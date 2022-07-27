import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserViewComponent } from './user/user-view/user-view.component';

const routes: Routes = [
  { path: "users", component: UserListComponent },
  { path: "users/new", component: UserCreateComponent },
  { path: "users/:uid", component: UserViewComponent },
  { path: "users/:uid/edit", component: UserEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
