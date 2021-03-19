import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguageComponent implements OnInit {
  @Input() showDropDown: boolean = false;
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
    this.toggleDropDown(null);
  }

  toggleDropDown(e) {
    if (!e) {
      this.showDropDown = !this.showDropDown;
      return;
    }
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
