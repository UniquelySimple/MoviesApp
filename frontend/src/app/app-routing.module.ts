import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Added import statements
import { MoviesListComponent } from './MyComponents/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './MyComponents/movies-details/movies-details.component';
import { AboutComponent } from './MyComponents/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: MoviesDetailsComponent },
  // { path: 'add', component: AddMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }