import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  facebookLink = 'https://www.facebook.com/eresvibe';
  instagramLink = 'https://www.instagram.com/eresvibe';
  tiktokLink = 'https://www.instagram.com/eresvibe';
  youtubeLink = 'https://www.youtube.com/channel/UC241VtTgCoGTudqPSu0BpFQ';
  waLink = 'https://api.whatsapp.com/send?phone=51901801803&text=Hola%2C%20quiero%20saber%20m%C3%A1s%20acerca%20de%20VIBE%20%F0%9F%98%8A';

  constructor() { }

}
