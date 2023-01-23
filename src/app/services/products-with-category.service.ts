import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {concatMap, from, map, Observable} from 'rxjs';
import {ProductWithCategoryModel} from '../models/product-with-category.model';
import {ProductWithCategoryQuery} from "../queries/product-with-category.query";

@Injectable()
export class ProductsWithCategoryService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllProducts(): Observable<ProductWithCategoryModel[]> {
    return this._httpClient.get<ProductWithCategoryModel[]>('https://fakestoreapi.com/products');
  }

  getProductsWithCategory(products: ProductWithCategoryModel[]): Observable<ProductWithCategoryQuery> {
    return from(products).pipe(
      concatMap((product) =>
        this._httpClient.get<ProductWithCategoryModel[]>(`https://fakestoreapi.com/products/category/${product.category}`).pipe(
        map((products) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          others: products.map((other) => ({title: other.title}))
        }))
      ))
    )
  }
}
