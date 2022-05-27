import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import packageJson from './../../../../../../../package.json';

@Component({
  selector: 'ws-website-version',
  templateUrl: './website-version.component.html',
  styleUrls: ['./website-version.component.scss']
})
export class WebsiteVersionComponent implements OnInit {

  title: string = 'website-version-component';
  public version: string = packageJson.version;

  constructor() { }

  ngOnInit(): void {
    this.title = 'website-version-component';
  }

}
