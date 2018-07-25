import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { FoundComponent } from './found/found.component';
import { SummaryComponent } from './summary/summary.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '',
    component: SummaryComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'found',
    component: FoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
