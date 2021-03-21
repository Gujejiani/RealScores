import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  language: { country: string; src: string } = {
    country: 'English',
    src: './assets/eng.png',
  };
  languages = [
    { country: 'English', src: './assets/eng.png' },
    { country: 'German', src: './assets/German.png' },
    { country: 'Spain', src: './assets/spain.png' },
    { country: 'Russian', src: './assets/russian.jpg' },
    { country: 'France', src: './assets/france.png' },
  ];
}
