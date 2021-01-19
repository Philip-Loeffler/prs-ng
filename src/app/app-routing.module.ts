import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './Components/user/user-login/user-login.component';
import { UserListComponent } from './Components/user/user-list/user-list.component';

const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
