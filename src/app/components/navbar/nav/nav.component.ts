import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navStatus: boolean;

  constructor(private renderer: Renderer2, private router: Router) {
    this.navStatus = false;
  }

  runFunctions(redirect?:string){
    this.scrollTogle()
    if(redirect){
      this.redirectFuntion(redirect)
    }
  }

  redirectFuntion(redirect:string){
    this.router.navigate([redirect]);
  }

  scrollTogle() {
    if (this.navStatus === true){
      this.renderer.addClass(document.body, 'noScroll');
    } else {
      this.renderer.removeClass(document.body, 'noScroll');
    }
  }

}
