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
import { FormsModule } from '@angular/forms';
import { PowComponent } from './pow/pow.component';
import { FilterPipe } from './filter.pipe';

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
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
