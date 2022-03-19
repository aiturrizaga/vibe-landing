import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export interface Music {
  order: number;
  image: string;
  alt: string;
  name: string;
  descriptions: Description[];
  networks: SocialNetworks;
}

export interface SocialNetworks {
  spotify?: string;
  youtube?: string;
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  web?: string;
}

export interface Description {
  header: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  albums$: Observable<Music[]>;
  singles$: Observable<Music[]>;

  constructor(private http: HttpClient) {
    this.albums$ = this.getAlbums();
    this.singles$ = this.getSingles();
  }

  getAlbums() {
    return this.http.get<Music[]>('./assets/data/albums.json').pipe(
      tap(res => res.sort((a, b) => {
        return a.order < b.order ? -1 : 1;
      }))
    );
  }

  getSingles() {
    return this.http.get<Music[]>('./assets/data/singles.json').pipe(
      tap(res => res.sort((a, b) => {
        return a.order < b.order ? -1 : 1;
      }))
    );
  }

}
