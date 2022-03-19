import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SocialNetworks } from "@vibe/shared/services/music.service";
import { tap } from "rxjs";

export interface Staff {
  firstName: string;
  secondName: string;
  associatedFrom: string;
  description: string;
  phrase: string;
  youtubeEmbed: string;
}

export interface Artist {
  order: number;
  image: string;
  alt?: string;
  name: string;
  description: string;
  phrase?: string;
  networks: SocialNetworks;
}

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) {
  }

  getStaff() {
    return this.http.get<Staff[]>('./assets/data/staff.json');
  }

  getArtists() {
    return this.http.get<Artist[]>('./assets/data/artists.json').pipe(
      tap(res => res.sort((a, b) => {
        return a.order < b.order ? -1 : 1;
      }))
    );
  }

}
