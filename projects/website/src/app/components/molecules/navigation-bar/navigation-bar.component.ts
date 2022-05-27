import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ws-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  title: string = 'navigation-bar-component';
  
  constructor() { }
  
  ngOnInit(): void {
    this.title = 'navigation-bar-component';
  }
  
  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
}