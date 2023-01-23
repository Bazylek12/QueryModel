import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {map, Observable, switchMap} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import {ProductQuery} from "../../queries/product.query";
import {StoreModel} from "../../models/store.model";

@Component({
  selector: 'app-query-single-nested-products',
  templateUrl: './query-single-nested-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleNestedProductsComponent {
  readonly productsList$: Observable<ProductQuery[]> = this._productsService.getAll().pipe(
    switchMap((products) => {
      const productsIds: string[] = products.reduce((a, c) => [...a,c.id], [] as string[]);
      return this._productsService.getStock(productsIds).pipe(
        map(productMap => products.map((product) => this._mapToQuery(product, productMap)))
      )
    })
  );

  constructor(private _productsService: ProductsService) {
  }

  private _mapToQuery(product: ProductModel, productMap: Record<string, StoreModel[]>) : ProductQuery {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: productMap[product.id]?.reduce((a, c) =>  a + c.stock, 0)
    }
  }
}
