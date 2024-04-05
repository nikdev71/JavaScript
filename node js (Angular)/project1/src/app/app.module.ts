import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { BtnComponent } from './btn/btn.component';
import { AuthotsAndBooksComponent } from './authots-and-books/authots-and-books.component';
import { AppleComponent } from './apple/apple.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PetsComponent } from './pets/pets.component';
import { PetsChildComponent } from './pets-child/pets-child.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PowComponent } from './pow/pow.component';
import { FilterPipe } from './filter.pipe';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { Form1Component } from './form1/form1.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ShopComponent } from './shop/shop.component';
import { GoodService } from './good.service';
import { PasswordMatchDirective } from './passsword-match.directive';
import { FormHWComponent } from './form-hw/form-hw.component';
import { RformComponent } from './rform/rform.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './films/films.component';
import { LocationService } from './location.service';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    BtnComponent,
    AuthotsAndBooksComponent,
    AppleComponent,
    ParentComponent,
    ChildComponent,
    PetsComponent,
    PetsChildComponent,
    TasksComponent,
    PowComponent,
    FilterPipe,
    ProductsComponent,
    ProductAddComponent,
    ProductComponent,
    Form1Component,
    AdminPanelComponent,
    ShopComponent,
    PasswordMatchDirective,
    FormHWComponent,
    RformComponent,
    CocktailsComponent,
    FilmsComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    ProductService,
    GoodService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
