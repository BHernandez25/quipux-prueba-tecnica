import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { FaIconLibrary,FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faBars,
  faUser,
  faArchive,
  faCircle,
  faFileLines,
  faGripLines,
  faHome,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import {
   faLine,
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBars,
      faUser,
      faFileLines,
      faArchive,
      faGripLines,
      faHome,
      faMagnifyingGlass
  );
  }
}
