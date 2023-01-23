import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap, take, tap} from "rxjs";
import {ProductWithCategoryQuery} from "../../queries/product-with-category.query";
import {ProductsWithCategoryService} from "../../services/products-with-category.service";

@Component({
  selector: 'app-query-single-prod-with-cat',
  templateUrl: './query-single-prod-with-cat.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleProdWithCatComponent {
  private _productsWithCategorySubject: BehaviorSubject<ProductWithCategoryQuery[]> = new BehaviorSubject<ProductWithCategoryQuery[]>([]);

  public productsWithCategory$: Observable<ProductWithCategoryQuery[]> = this._productsWithCategorySubject.asObservable();

  readonly products$: Observable<ProductWithCategoryQuery> = this._productsWithCategoryService.getAllProducts().pipe(
    switchMap((products) => this._productsWithCategoryService.getProductsWithCategory(products)),
    tap((data) => this.addNextProductsWithCategory(data))
  );

  constructor(private _productsWithCategoryService: ProductsWithCategoryService) {
  }

  addNextProductsWithCategory(products: ProductWithCategoryQuery): void {
    this.productsWithCategory$.pipe(
      take(1),
      tap((prevProducts) => this._productsWithCategorySubject.next([...prevProducts, products]))
    ).subscribe()
  }
}
