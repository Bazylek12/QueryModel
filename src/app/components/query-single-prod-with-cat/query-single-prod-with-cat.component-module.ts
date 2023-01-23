import { NgModule } from '@angular/core';
import { QuerySingleProdWithCatComponent } from './query-single-prod-with-cat.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [
    MatCardModule,
    NgIf,
    AsyncPipe,
    NgForOf,
    CurrencyPipe,
    MatChipsModule
  ],
  declarations: [QuerySingleProdWithCatComponent],
  providers: [],
  exports: [QuerySingleProdWithCatComponent]
})
export class QuerySingleProdWithCatComponentModule {
}
