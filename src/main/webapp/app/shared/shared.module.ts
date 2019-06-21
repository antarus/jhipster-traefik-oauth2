import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipsterSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipsterSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [JhipsterSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterSharedModule
    };
  }
}
