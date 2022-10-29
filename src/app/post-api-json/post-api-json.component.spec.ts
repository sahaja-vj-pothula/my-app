import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiJsonComponent } from './post-api-json.component';

describe('PostApiJsonComponent', () => {
  let component: PostApiJsonComponent;
  let fixture: ComponentFixture<PostApiJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostApiJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApiJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
