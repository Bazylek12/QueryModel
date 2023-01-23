import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { QueryMultiNestedOrgsComponent } from './query-multi-nested-orgs.component';

@NgModule({
  imports: [
    MatExpansionModule,
    MatListModule,
    CommonModule,
    MatListModule
  ],
  declarations: [QueryMultiNestedOrgsComponent],
  providers: [],
  exports: [QueryMultiNestedOrgsComponent]
})
export class QueryMultiNestedOrgsComponentModule {
}
