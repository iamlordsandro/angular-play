import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-lib-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  title: string = 'logo-component';
  height: string = '50px';
  @Input() imgSrc?: string;
  @Input() imgHeight?: number;

  constructor() { }

  ngOnInit(): void {
    this.title = 'logo-component';
    this.height = this.computeImgHeight(this.imgHeight);
  }

  private computeImgHeight(height?:number):string {
    let computedImgHeight: string = '';
    if (height && height > 0) {
      computedImgHeight = height.toString() + 'px';
      return computedImgHeight;
    } else {
      computedImgHeight = '50 px';
      return computedImgHeight;
    }
  }

}
