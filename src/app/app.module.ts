import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user/user-list/user-list.component';
import { UserLoginComponent } from './Components/user/user-login/user-login.component';
import { UserEditComponent } from './Components/user/user-edit/user-edit.component';
import { UserCreateComponent } from './Components/user/user-create/user-create.component';
import { UserDetailComponent } from './Components/user/user-detail/user-detail.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ProductListComponent } from './Components/product/product-list/product-list.component';
import { ProductCreateComponent } from './Components/product/product-create/product-create.component';
import { ProductEditComponent } from './Components/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './Components/product/product-detail/product-detail.component';
import { VendorListComponent } from './Components/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './Components/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './Components/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './Components/vendor/vendor-edit/vendor-edit.component';
import { PurchaseRequestListComponent } from './Components/purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestCreateComponent } from './Components/purchase-request/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestEditComponent } from './Components/purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestDetailComponent } from './Components/purchase-request/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestApproveComponent } from './Components/purchase-request/purchase-request-approve/purchase-request-approve.component';
import { PurchaseRequestLinesComponent } from './Components/purchase-request/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestReviewComponent } from './Components/purchase-request/purchase-request-review/purchase-request-review.component';
import { LineItemCreateComponent } from './Components/line-item/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './Components/line-item/line-item-edit/line-item-edit.component';
import { NoComponentDefinedComponent } from './Components/no-component-defined/no-component-defined.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserLoginComponent,
    UserEditComponent,
    UserCreateComponent,
    UserDetailComponent,
    MenuComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    PurchaseRequestListComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestApproveComponent,
    PurchaseRequestLinesComponent,
    PurchaseRequestReviewComponent,
    LineItemCreateComponent,
    LineItemEditComponent,
    NoComponentDefinedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
