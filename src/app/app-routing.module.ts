import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path:'', component: MainComponent, pathMatch:"full" },
  { path:'contact', component: ContactComponent },
  { path:'quote', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
