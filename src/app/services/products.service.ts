import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {forkJoin, Observable, map} from 'rxjs';
import { ProductModel } from '../models/product.model';
import {StoreModel} from "../models/store.model";

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products');
  }

  getStock(productIds: string[]): Observable<Record<string, StoreModel[]>> {
    return forkJoin(
      productIds.map((productId) => this._httpClient.get<StoreModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/products/${productId}/product-metadata`))).pipe(
      map((productsStock: StoreModel[][]) =>
        productsStock.reduce((a, c, idx) => ({...a, [productIds[idx]]: c}),
          {} as Record<string, StoreModel[]>
        )
      )
    )

  }
}
