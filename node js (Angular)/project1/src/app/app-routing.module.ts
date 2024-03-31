import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', redirectTo: '/shop', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/shop' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
