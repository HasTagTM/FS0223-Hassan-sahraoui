import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosLikeComponent } from './photos-like.component';

describe('PhotosLikeComponent', () => {
  let component: PhotosLikeComponent;
  let fixture: ComponentFixture<PhotosLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosLikeComponent]
    });
    fixture = TestBed.createComponent(PhotosLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
