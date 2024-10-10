import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/Models/movies.model';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {

  movies?: Movies[];
  currentMovie: Movies = {};
  currentIndex = -1;
  title = '';
  binding: any;

  constructor(
    private moviesService: MoviesService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.moviesService.getAllMovies()
      .subscribe({
        next: (data) => {
          this.movies = data;
        },
        error: (e) => console.error(e)
      });
  }

  setActiveMovie(movie: Movies, index: number): void {
    this.currentMovie = movie;
    this.currentIndex = index;
    // Here we will implement the code to navigate to another component with passing parameters
    let currMov = JSON.stringify(this.currentMovie);
    this.route.navigate(['movies/:id'], { queryParams: { data: currMov } })
  }

  searchTitle(): void {
    this.currentMovie = {};
    this.currentIndex = -1;

    this.moviesService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.movies = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}