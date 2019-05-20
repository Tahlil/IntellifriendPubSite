import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceDetectorModule } from 'ngx-device-detector';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { PartnersComponent } from './partners/partners.component';
import { BlogComponent } from './blog/blog.component';
import { BannerComponent } from './banner/banner.component';

import { CookieComponent } from './cookie/cookie.component';
import { RegisterComponent } from './register/register.component'


//import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HomeComponent, ContactComponent, FaqComponent, AboutComponent, FeaturesComponent, PricingComponent, PrivacyComponent, TermsComponent, PartnersComponent, BlogComponent, CookieComponent, BannerComponent, RegisterComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  exports: []
})
export class MainModule { }
