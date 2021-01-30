import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './Components/user/user-login/user-login.component';
import { UserListComponent } from './Components/user/user-list/user-list.component';
import { UserDetailComponent } from './Components/user/user-detail/user-detail.component';
import { UserEditComponent } from './Components/user/user-edit/user-edit.component';
import { UserCreateComponent } from './Components/user/user-create/user-create.component';
import { ProductListComponent } from './Components/product/product-list/product-list.component';
import { ProductDetailComponent } from './Components/product/product-detail/product-detail.component';
import { ProductEditComponent } from './Components/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './Components/product/product-create/product-create.component';
import { VendorListComponent } from './Components/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './Components/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './Components/vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './Components/vendor/vendor-create/vendor-create.component';
import { PurchaseRequestListComponent } from './Components/purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './Components/purchase-request/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestEditComponent } from './Components/purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestCreateComponent } from './Components/purchase-request/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestLinesComponent } from './Components/purchase-request/purchase-request-lines/purchase-request-lines.component';
import { LineItemEditComponent } from './Components/line-item/line-item-edit/line-item-edit.component';
import { LineItemCreateComponent } from './Components/line-item/line-item-create/line-item-create.component';
const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'vendor-list', component: VendorListComponent },
  { path: 'vendor-detail/:id', component: VendorDetailComponent },
  { path: 'vendor-edit/:id', component: VendorEditComponent },
  { path: 'vendor-create', component: VendorCreateComponent },
  { path: 'line-item-edit/:id', component: LineItemEditComponent },
  { path: 'line-item-create', component: LineItemCreateComponent },
  { path: 'purchase-request-list', component: PurchaseRequestListComponent },
  {
    path: 'purchase-request-detail/:id',
    component: PurchaseRequestDetailComponent,
  },
  {
    path: 'purchase-request-edit/:id',
    component: PurchaseRequestEditComponent,
  },
  {
    path: 'purchase-request-create',
    component: PurchaseRequestCreateComponent,
  },
  {
    path: 'purchase-request-lines/:id',
    component: PurchaseRequestLinesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
