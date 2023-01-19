import { Injectable } from '@angular/core';
import {delay, map, Observable, of} from 'rxjs';

@Injectable({ providedIn: 'root'})
export class LoaderService {
  getNames(): Observable<string[]> {
    return of(['tom', 'kate', 'rob', 'stephen']).pipe(
      delay(2000),
      map((data) => {
          if (Math.random() > 0.5) {
            throw new Error('Ooops something went wrong...');
          }
          return data;
        }
      )
    )
  }
}
