import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})

export class MoviesDetailsComponent implements OnInit{

  movieParam: any;
  movie: any;

  constructor(
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void{
  
    this.route.queryParams.subscribe((params: any) => {
      this.movieParam = params.data
      this.movie = JSON.parse(this.movieParam);
      console.log(this.movie);
    })

  }
}
