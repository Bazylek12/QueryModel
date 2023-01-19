import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryArraySingleJobComponent } from './components/query-array-single-job/query-array-single-job.component';
import { QueryStringSingleUserComponent } from './components/query-string-single-user/query-string-single-user.component';
import { QueryStringMultiUserComponent } from './components/query-string-multi-user/query-string-multi-user.component';
import { QueryLoaderComponent } from './components/query-loader/query-loader.component';
import { QueryArraySingleJobComponentModule } from './components/query-array-single-job/query-array-single-job.component-module';
import { JobPostsServiceModule } from './services/job-posts.service-module';
import { QueryStringSingleUserComponentModule } from './components/query-string-single-user/query-string-single-user.component-module';
import { SingleUsersServiceModule } from './services/single-users.service-module';
import { QueryStringMultiUserComponentModule } from './components/query-string-multi-user/query-string-multi-user.component-module';
import { QueryLoaderComponentModule } from './components/query-loader/query-loader.component-module';
import { LoaderServiceModule } from './services/loader.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-array-single-job', component: QueryArraySingleJobComponent }, { path: 'query-string-single-user', component: QueryStringSingleUserComponent }, { path: 'query-string-multi-user', component: QueryStringMultiUserComponent }, { path: 'loader', component: QueryLoaderComponent }]), QueryArraySingleJobComponentModule, JobPostsServiceModule, QueryStringSingleUserComponentModule, SingleUsersServiceModule, QueryStringMultiUserComponentModule, QueryLoaderComponentModule, LoaderServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
