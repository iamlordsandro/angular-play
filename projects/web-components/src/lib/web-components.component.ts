import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib',
  template: `
    <p>
      web-components works!
    </p>
  `,
  styles: [
  ]
})
export class WebComponentsComponent implements OnInit {

  title: string = 'web-components-library';

  constructor() { }

  ngOnInit(): void {
    this.title = 'web-components-library';
  }

}
