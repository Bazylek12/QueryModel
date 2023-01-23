import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {QueryArraySingleJobComponent} from './components/query-array-single-job/query-array-single-job.component';
import {QueryStringSingleUserComponent} from './components/query-string-single-user/query-string-single-user.component';
import {QueryStringMultiUserComponent} from './components/query-string-multi-user/query-string-multi-user.component';
import {QueryLoaderComponent} from './components/query-loader/query-loader.component';
import {
  QuerySingleNestedProductsComponent
} from './components/query-single-nested-products/query-single-nested-products.component';
import {QueryMultiNestedOrgsComponent} from './components/query-multi-nested-orgs/query-multi-nested-orgs.component';
import {
  QuerySingleProdWithCatComponent
} from './components/query-single-prod-with-cat/query-single-prod-with-cat.component';
import {
  QueryArraySingleJobComponentModule
} from './components/query-array-single-job/query-array-single-job.component-module';
import {JobPostsServiceModule} from './services/job-posts.service-module';
import {
  QueryStringSingleUserComponentModule
} from './components/query-string-single-user/query-string-single-user.component-module';
import {SingleUsersServiceModule} from './services/single-users.service-module';
import {
  QueryStringMultiUserComponentModule
} from './components/query-string-multi-user/query-string-multi-user.component-module';
import {QueryLoaderComponentModule} from './components/query-loader/query-loader.component-module';
import {LoaderServiceModule} from './services/loader.service-module';
import {
  QuerySingleNestedProductsComponentModule
} from './components/query-single-nested-products/query-single-nested-products.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {
  QueryMultiNestedOrgsComponentModule
} from './components/query-multi-nested-orgs/query-multi-nested-orgs.component-module';
import {OrganizationsServiceModule} from './services/organizations.service-module';
import {UsersWithAvatarsServiceModule} from './services/users-with-avatars.service-module';
import {
  QuerySingleProdWithCatComponentModule
} from './components/query-single-prod-with-cat/query-single-prod-with-cat.component-module';
import {ProductsWithCategoryServiceModule} from './services/products-with-category.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'query-array-single-job',
    component: QueryArraySingleJobComponent
  }, {path: 'query-string-single-user', component: QueryStringSingleUserComponent}, {
    path: 'query-string-multi-user',
    component: QueryStringMultiUserComponent
  }, {path: 'loader', component: QueryLoaderComponent}, {
    path: 'nested-products',
    component: QuerySingleNestedProductsComponent
  }, {path: 'nested-orgs', component: QueryMultiNestedOrgsComponent}, {
    path: 'single-products',
    component: QuerySingleProdWithCatComponent
  }]), QueryArraySingleJobComponentModule, JobPostsServiceModule, QueryStringSingleUserComponentModule, SingleUsersServiceModule, QueryStringMultiUserComponentModule, QueryLoaderComponentModule, LoaderServiceModule, QuerySingleNestedProductsComponentModule, ProductsServiceModule, QueryMultiNestedOrgsComponentModule, OrganizationsServiceModule, UsersWithAvatarsServiceModule, QuerySingleProdWithCatComponentModule, ProductsWithCategoryServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
