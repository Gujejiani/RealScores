import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from '../menu/language-dropdown/language.service';

@Component({
  selector: 'app-mob-menu',
  templateUrl: './mob-menu.component.html',
  styleUrls: ['./mob-menu.component.scss'],
})
export class MobMenuComponent implements OnInit {
  showSettingOverlay: boolean = false;
  language: { country: string; src: string };
  languages: { country: string; src: string }[];
  showLanguages: boolean = false;
  darkThemeBackground: boolean = false;
  @Input() showMobMenu: boolean;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languages = this.languageService.languages;
    this.language = this.languageService.language;
  }
  settingsClicked() {
    console.log('shoot');
    this.showSettingOverlay = !this.showSettingOverlay;
  }
  toggleLanguages() {
    this.showLanguages = !this.showLanguages;
  }
  hideSettings() {
    this.showSettingOverlay = false;
  }
  languageSelected(language: { country: string; src: string }) {
    this.languageService.language.country = language.country;
    this.languageService.language.src = language.src;
    this.showLanguages = false;
  }
  changeTheme() {
    this.darkThemeBackground = !this.darkThemeBackground;
  }
}
