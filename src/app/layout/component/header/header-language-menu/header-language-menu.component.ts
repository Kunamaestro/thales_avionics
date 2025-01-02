import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'header-language-menu',
  standalone : true,
  imports: [
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './header-language-menu.component.html',
  styleUrl: './header-language-menu.component.css'
})
export class HeaderLanguageMenuComponent {

  currentLanguage = signal("FR");
  isPanelOpen = signal(false);

}
