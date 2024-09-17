import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TAgencyHomeComponent } from './pages/t-agency-home/t-agency-home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'TAgencyHomeComponent',
    pathMatch:'full'
  },
  {
    path:'TAgencyHome',
    component:TAgencyHomeComponent,
    title: 'TAgencyHome'
  },
  {
    path:'Navbar',
    component:NavbarComponent,
  },
  {
    path:'Footer',
    component:FooterComponent,
  },
  {
    path:'**',
    component:TAgencyHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
