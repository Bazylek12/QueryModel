import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {QueryArraySingleJobComponent} from './components/query-array-single-job/query-array-single-job.component';
import {QueryStringSingleUserComponent} from './components/query-string-single-user/query-string-single-user.component';
import {
  QueryArraySingleJobComponentModule
} from './components/query-array-single-job/query-array-single-job.component-module';
import {JobPostsServiceModule} from './services/job-posts.service-module';
import {
  QueryStringSingleUserComponentModule
} from './components/query-string-single-user/query-string-single-user.component-module';
import {SingleUsersServiceModule} from './services/single-users.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'query-array-single-job',
    component: QueryArraySingleJobComponent
  }, {
    path: 'query-string-single-user',
    component: QueryStringSingleUserComponent
  }]), QueryArraySingleJobComponentModule, JobPostsServiceModule, QueryStringSingleUserComponentModule, SingleUsersServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
