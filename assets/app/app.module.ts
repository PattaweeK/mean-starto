import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from "./app.component";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {NavModule} from "./nav-center/nav.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        NavModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}