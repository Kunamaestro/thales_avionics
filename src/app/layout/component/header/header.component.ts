import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderButtonComponent } from "./agnostic_components/header-button/header-button.component";
import { HeaderLanguageMenuComponent } from "./agnostic_components/header-language-menu/header-language-menu.component";
@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HeaderButtonComponent,
    HeaderLanguageMenuComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
