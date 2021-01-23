import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user/user-list/user-list.component';
import { UserLoginComponent } from './Components/user/user-login/user-login.component';
import { UserEditComponent } from './Components/user/user-edit/user-edit.component';
import { UserCreateComponent } from './Components/user/user-create/user-create.component';
import { UserDetailComponent } from './Components/user/user-detail/user-detail.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserLoginComponent, UserEditComponent, UserCreateComponent, UserDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
