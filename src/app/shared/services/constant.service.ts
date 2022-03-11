import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  facebookLink = 'https://www.facebook.com/eresvibe';
  instagramLink = 'https://www.instagram.com/eresvibe';
  youtubeLink = 'https://www.youtube.com/channel/UC241VtTgCoGTudqPSu0BpFQ';

  constructor() { }

}
