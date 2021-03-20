import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguageComponent implements OnInit {
  showDropDown: boolean = false;
  constructor() {}

  language: { country: string; src: string } = {
    country: 'English/International',
    src: './assets/eng.png',
  };
  src: string = './assets/eng.png';
  languages = [
    { country: 'English/International', src: './assets/eng.png' },
    { country: 'German', src: './assets/German.png' },
    { country: 'Spain', src: './assets/spain.png' },
    { country: 'Russian', src: './assets/russian.jpg' },
    { country: 'France', src: './assets/france.png' },
  ];
  ngOnInit(): void {}
  languageClicked(language: { country: string; src: string }) {
    this.language.country = language.country;
    this.language.src = language.src;
  }

  toggleDropDown(e) {
    const el: Element = e.target;
    if (
      !(
        el.closest('ul') &&
        el.closest('ul').classList.contains('menu__section__language__dropdown')
      )
    ) {
      this.showDropDown = !this.showDropDown;
    }
  }
}
