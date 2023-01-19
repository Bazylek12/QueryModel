import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, startWith, switchMap } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import {LoaderQuery} from "../../queries/loader.query";


@Component({
  selector: 'app-query-loader',
  templateUrl: './query-loader.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryLoaderComponent {
  private _loaderSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public loader$: Observable<LoaderQuery> = this._loaderSubject.asObservable().pipe(
    switchMap(() => this._loaderService.getNames().pipe(
      map((value) => ({
        isLoading: false,
        value: value
      })),
      catchError(error => of({ isLoading: false, error: error })),
      startWith({ isLoading: true })
    ))
  );

  refresh(): void {
    this._loaderSubject.next(true)
  }

  constructor(private _loaderService: LoaderService) {
  }
}
