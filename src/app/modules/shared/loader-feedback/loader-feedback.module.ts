import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderFeedbackComponent } from './loader-feedback/loader-feedback.component';

@NgModule({
  declarations: [LoaderFeedbackComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoaderFeedbackComponent],
})
export class LoaderFeedbackModule {}
