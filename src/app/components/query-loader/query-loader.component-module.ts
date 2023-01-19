import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QueryLoaderComponent } from './query-loader.component';

@NgModule({
  imports: [MatProgressSpinnerModule, CommonModule, MatListModule, MatButtonModule, MatIconModule],
  declarations: [QueryLoaderComponent],
  providers: [],
  exports: [QueryLoaderComponent]
})
export class QueryLoaderComponentModule {
}
