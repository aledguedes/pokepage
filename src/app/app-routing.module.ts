import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  
  { path: '', component: LayoutComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cards/:id', component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
