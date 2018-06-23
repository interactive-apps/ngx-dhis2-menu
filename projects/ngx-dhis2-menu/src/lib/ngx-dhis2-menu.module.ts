import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { containers } from './containers/index';
import { components } from './components/index';
import { directives } from './directives/index';
import { pipes } from './pipes/index';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [
    ...containers,
    ...components,
    ...directives,
    ...pipes
  ],
  exports: [...containers],
})
export class NgxDhis2MenuModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDhis2MenuModule,
      providers: []
    };
  }
}
