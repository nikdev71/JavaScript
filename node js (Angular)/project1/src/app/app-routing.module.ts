import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { Form1Component } from './form1/form1.component';
import { FormHWComponent } from './form-hw/form-hw.component';

const routes: Routes = [
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'form1', component: Form1Component },
  { path: 'form-hw', component: FormHWComponent },
  { path: '', redirectTo: '/form-hw', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/form-hw' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
