import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { QueryArraySingleJobComponent } from './query-array-single-job.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule, MatCardModule],
  declarations: [QueryArraySingleJobComponent],
  providers: [],
  exports: [QueryArraySingleJobComponent]
})
export class QueryArraySingleJobComponentModule {
}
