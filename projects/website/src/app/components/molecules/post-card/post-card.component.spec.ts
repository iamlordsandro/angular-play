import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PostCardComponent } from './post-card.component';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PostCardComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'post-card-component'`, () => {
    expect(component.title).toEqual('post-card-component');
  });
});
