import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/main/footer/footer.component';
import { SubscribeComponent } from './modules/main/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SubscribeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
