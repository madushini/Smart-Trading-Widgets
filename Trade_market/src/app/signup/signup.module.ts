import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
@NgModule({
  imports: [
    CommonModule,
      FormsModule,
    SignupRoutingModule,
      FlashMessagesModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
