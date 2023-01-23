import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { QuerySingleNestedProductsComponent } from './query-single-nested-products.component';

@NgModule({
  imports: [MatExpansionModule, CommonModule],
  declarations: [QuerySingleNestedProductsComponent],
  providers: [],
  exports: [QuerySingleNestedProductsComponent]
})
export class QuerySingleNestedProductsComponentModule {
}
