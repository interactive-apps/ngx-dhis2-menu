import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { MenuLoaderComponent } from './components/menu-loader/menu-loader.component';
import { MenuNotificationComponent } from './components/menu-notification/menu-notification.component';
import { MenuProfileComponent } from './components/menu-profile/menu-profile.component';
import { MenuSearchComponent } from './components/menu-search/menu-search.component';
import { MenuSideBarComponent } from './components/menu-side-bar/menu-side-bar.component';
import { MenuComponent } from './containers/menu/menu.component';
import { ClickOutsideDirective } from './directives';
import { AbbreviatePipe } from './pipes/abbreviate.pipe';
import { ConvertToLighterColor } from './pipes/convert-to-lighter-color.pipe';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, NgxDhis2HttpClientModule],
  declarations: [
    MenuLoaderComponent,
    MenuProfileComponent,
    MenuSearchComponent,
    LoginFormComponent,
    MenuSideBarComponent,
    MenuNotificationComponent,
    MenuComponent,
    ClickOutsideDirective,
    FilterByNamePipe,
    AbbreviatePipe,
    ConvertToLighterColor
  ],
  providers: [],
  exports: [MenuComponent]
})
export class NgxDhis2MenuModule {}
