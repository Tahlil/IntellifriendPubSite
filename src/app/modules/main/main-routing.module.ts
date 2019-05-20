import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent} from './pricing/pricing.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent} from './privacy/privacy.component';
import { PartnersComponent} from './partners/partners.component';
import { BlogComponent} from './blog/blog.component';
import { CookieComponent } from './cookie/cookie.component';
import { BannerComponent} from './banner/banner.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'cookie',
    component: CookieComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'partners',
    component: PartnersComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
