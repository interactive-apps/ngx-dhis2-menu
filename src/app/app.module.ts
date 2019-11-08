import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { NgxDhis2HttpClientModule } from "@iapps/ngx-dhis2-http-client";
import { NgxDhis2MenuModule } from "projects/ngx-dhis2-menu/src/public_api";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxDhis2HttpClientModule,
    NgxDhis2MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
