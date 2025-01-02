import { Component, input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'header-button',
  imports: [
    
  ],
  templateUrl: './header-button.component.html',
  styleUrl: './header-button.component.css'
})
export class HeaderButtonComponent {

  label = input.required<string>()
  path = input.required<string>()

  constructor(private router : Router){}

  goToUrl() : void {
    this.router.navigateByUrl(this.path())
  }


}
