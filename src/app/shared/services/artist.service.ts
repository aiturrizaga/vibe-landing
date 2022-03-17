import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Artist {
  firstName: string;
  secondName: string;
  associatedFrom: string;
  description: string;
  phrase: string;
  youtubeEmbed: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Artist[]>('./assets/data/artists.json');
  }

}
