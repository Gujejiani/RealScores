import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { SearchComponent } from './header/menu/search/search.component';
import { SettingsComponent } from './header/menu/settings/settings.component';
import { OverlayComponent } from './UI/overlay/overlay.component';

import { FormTemplateComponent } from './header/menu/form-template/form-template.component';
import { LanguageComponent } from './header/menu/language-dropdown/languages.component';
import { NavComponent } from './header/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SearchComponent,
    SettingsComponent,
    OverlayComponent,
    FormTemplateComponent,
    LanguageComponent,
    NavComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
