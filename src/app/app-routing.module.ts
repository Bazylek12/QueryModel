import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryArraySingleJobComponent } from './components/query-array-single-job/query-array-single-job.component';
import { QueryArraySingleJobComponentModule } from './components/query-array-single-job/query-array-single-job.component-module';
import { JobPostsServiceModule } from './services/job-posts.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-array-single-job', component: QueryArraySingleJobComponent }]), QueryArraySingleJobComponentModule, JobPostsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
