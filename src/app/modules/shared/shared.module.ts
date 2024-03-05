import { NgModule } from '@angular/core';
import { FormErrorsPipe } from './pipes/form-error.pipe';
import { LoaderFeedbackModule } from './loader-feedback';

@NgModule({
  declarations: [FormErrorsPipe],
  imports: [LoaderFeedbackModule],
  exports: [FormErrorsPipe, LoaderFeedbackModule],
})
export class SharedModule {}
