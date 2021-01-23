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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
