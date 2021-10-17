import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  // @ViewChild('navBurger') navBurger!: ElementRef;
  // @ViewChild('navMenu') navMenu!: ElementRef;
  
  //   toggleNavbar() {
  //     this.navBurger.nativeElement.classList.toggle('is-active');
  //     this.navMenu.nativeElement.classList.toggle('is-active');
  //   }
}


// @Directive({
//   selector: 'hamburger'
// })
// export class HamburgerToggleDirective {
//   @HostBinding('class.is-active')
//   private isActive = false;

//   @HostListener('click')
//   toggleActive(): void {
//     this.isActive = !this.isActive;
//   }
// }
