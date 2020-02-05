import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyDatePickerModule } from 'mydatepicker';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { NguCarouselModule } from '@ngu/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
import { ChatPreviewComponent } from './components/chat-preview/chat-preview.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NextLinePipe } from './pipes/next-line.pipe';
import { AddSpacePipe } from './pipes/add-space.pipe';

const config: SocketIoConfig = { url: 'http://192.168.9.101:9090', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // FooterComponent,
    ChatPreviewComponent,
    NextLinePipe,
    AddSpacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    GooglePlaceModule,
    MyDatePickerModule,
    SocketIoModule.forRoot(config)
    // NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
