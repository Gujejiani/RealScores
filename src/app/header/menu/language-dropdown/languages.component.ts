import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguageComponent implements OnInit {
  showDropDown: boolean = false;
  constructor(private languageService: LanguageService) {}

  language: { country: string; src: string };

  src: string = './assets/eng.png';
  languages: { country: string; src: string }[];
  ngOnInit(): void {
    this.languages = this.languageService.languages;
    this.language = this.languageService.language;
  }
  languageClicked(language: { country: string; src: string }) {
    this.languageService.language.country = language.country;
    this.languageService.language.src = language.src;
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
