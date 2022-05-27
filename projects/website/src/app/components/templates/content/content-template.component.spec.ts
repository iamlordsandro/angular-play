import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ContentTemplateComponent } from './content-template.component';

import { NavigationBarComponent } from '../../molecules/navigation-bar/navigation-bar.component';
import { HeaderComponent } from '../../organisms/header/header.component';

describe('ContentTemplateComponent', () => {
  let component: ContentTemplateComponent;
  let fixture: ComponentFixture<ContentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ContentTemplateComponent,
        NavigationBarComponent,
        HeaderComponent
       ],
      imports: [
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'content-template-component'`, () => {
    expect(component.title).toEqual('content-template-component');
  });
});
