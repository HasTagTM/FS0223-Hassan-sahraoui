import { TestBed } from '@angular/core/testing';

import { PhotoInterceptor } from './photo.interceptor';

describe('PhotoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PhotoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PhotoInterceptor = TestBed.inject(PhotoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
