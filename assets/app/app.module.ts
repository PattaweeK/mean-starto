import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from "./app.component";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {TestComponent} from "./test/test.component";

@NgModule({
    declarations: [
        AppComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        AppComponent,
        TestComponent
    ]
})
export class AppModule {

}