import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent, IconComponent, PageTitleComponent, UnderConstructionComponent } from 'projects/web-components/src/public-api';
import { ErrorStateComponent } from '../../molecules/error-state/error-state.component';
import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NotFoundPageComponent,
        PageTitleComponent,
        AvatarComponent,
        IconComponent,
        ErrorStateComponent,
        UnderConstructionComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'not-found-page-component'`, () => {
    expect(component.title).toEqual('not-found-page-component');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Not Found');
  });
});
