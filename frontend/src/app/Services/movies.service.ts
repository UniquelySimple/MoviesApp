import { Injectable } from '@angular/core';
// Added import statements
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Movies } from '../Models/movies.model';

// write your code here

const baseUrl = "http://127.0.0.1:8000/api/movies/";
const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient){}

  getAllMovies(): Observable<Movies[]>{
    return this.http.get<Movies[]>(baseUrl, {headers: httpHeaders});
  }

  findByTitle(title: any): Observable<Movies[]> {
    return this.http.get<Movies[]>('${baseUrl}?title=${title}', {headers: httpHeaders});
  }

}