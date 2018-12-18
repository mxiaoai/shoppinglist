import { SignupComponent } from './auth/signup/signup.component';
import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path:'', redirectTo: 'book', pathMatch: 'full'},
  { path:'book', component: BookComponent},
  { path:'shoppingcart', component: ShoppinglistComponent},
  { path:'signin', component: SigninComponent},
  { path:'signup', component: SignupComponent},
  { path:'**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
