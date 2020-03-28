import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../Model/photo';

export interface PhotoListResponse {
  totalItems: number;
  items: Array<{
    imageInfo: {
      url: string;
    }
  }>;
}

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  imagesList: Photo[];
  private imageUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Photo[]>(this.imageUrl).subscribe(
      (photo) => {
        // console.log(response);
        this.imagesList = photo;
      },
      (error) => {
        console.log('Erreur: ', error);
      },
      () => {
        console.log('Toutes les données ont été reçues avec succès !!!');
      }
    );
  }

}
