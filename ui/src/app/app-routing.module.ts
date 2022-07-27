import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostViewComponent } from './post/post-view/post-view.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/new', component: PostCreateComponent },
  { path: 'posts/:id', component: PostViewComponent },
  { path: 'posts/:id/edit', component: PostEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
