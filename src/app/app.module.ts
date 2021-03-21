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
import { MainComponent } from './main/main.component';
import { NavDropdownComponent } from './header/nav/nav-dropdown/nav-dropdown.component';
import { BurgerMenuComponent } from './UI/burger-menu/burger-menu.component';
import { MobMenuComponent } from './header/mob-menu/mob-menu.component';
import { ThemeComponent } from './header/menu/theme/theme.component';
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
    MainComponent,
    NavDropdownComponent,
    BurgerMenuComponent,
    MobMenuComponent,
    ThemeComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
