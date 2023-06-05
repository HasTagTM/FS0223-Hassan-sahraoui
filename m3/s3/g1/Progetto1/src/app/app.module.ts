import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotosLikeComponent } from './pages/photos-like/photos-like.component';
import { HeaderComponent } from './component/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { PhotoInterceptor } from './photo.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotosLikeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PhotoInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
