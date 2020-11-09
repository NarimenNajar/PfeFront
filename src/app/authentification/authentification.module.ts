import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlashMessagesModule} from "angular2-flash-messages";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    FlashMessagesModule,
    ReactiveFormsModule
  ]
})
export class AuthentificationModule { }
