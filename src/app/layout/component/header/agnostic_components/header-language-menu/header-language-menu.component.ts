import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { LanguagePipePipe } from "../../language_pipe/language-pipe.pipe";

@Component({
  selector: 'header-language-menu',
  standalone : true,
  imports: [
    MatMenuModule,
    MatIconModule,
    LanguagePipePipe
],
  templateUrl: './header-language-menu.component.html',
  styleUrl: './header-language-menu.component.css'
})
export class HeaderLanguageMenuComponent {

  languageList :  string[] = ["en-EN","fr-FR"]
  currentLanguage = signal("EN");
  isPanelOpen = signal(false);

  ngOnInit() : void{
     const index = this.languageList.findIndex((label) => label == navigator.language)
     index == -1 ? 
      this.currentLanguage.set("EN") : 
      this.currentLanguage.set(this.languageList[index].match(/[A-Z]/g)?.join('') || '') 
  }

  closeMenu() : void{
    this.isPanelOpen.set(false)
  }
  isOpenedMenu(bool:boolean):void{
    this.isPanelOpen.set(bool)
  }
}
