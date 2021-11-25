import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  { path: "", redirectTo: "listposts", pathMatch: "full" },
  { path: "listposts", component: ListPostComponent },
  { path : "listposts/:id" , component : UpdatePostComponent},
  { path : "addpost" , component : AddPostComponent},
  { path:"**",component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
