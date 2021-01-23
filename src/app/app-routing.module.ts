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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
