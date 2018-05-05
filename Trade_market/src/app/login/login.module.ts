import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FlashMessagesModule } from 'angular2-flash-messages';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        FlashMessagesModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}

