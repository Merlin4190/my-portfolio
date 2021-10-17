import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  isShowDiv = false;
   
  toggleNavbar() {
    this.isShowDiv = !this.isShowDiv;
  }

  // navMenu:boolean=false;

  // toggleNavbar(){
  //     this.navMenu=true;
  // }

  // @ViewChild('navBurger') navBurger!: ElementRef;
  // @ViewChild('navMenu') navMenu!: ElementRef;
  
  //   toggleNavbar() {
  //     this.navBurger.nativeElement.classList.toggle('is-active');
  //     this.navMenu.nativeElement.classList.toggle('is-active');
  //   }

}
