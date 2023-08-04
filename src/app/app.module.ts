import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxLoadingModule } from 'ngx-loading';
import { ContactComponent } from './pages/contact/contact.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    NgxLoadingModule.forRoot({}),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
