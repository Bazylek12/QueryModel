import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { QueryStringSingleUserComponent } from './query-string-single-user.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [CommonModule, MatTableModule, MatCardModule],
  declarations: [QueryStringSingleUserComponent],
  providers: [],
  exports: [QueryStringSingleUserComponent]
})
export class QueryStringSingleUserComponentModule {
}
