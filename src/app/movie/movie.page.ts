import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movieData: any = [];
  constructor(private service: MovieService) { }
  ngOnInit() {
  this.service.GetMovieData().subscribe(
  (data) => {
  this.movieData = data.Search;
  console.log(this.movieData);
  });

}}
