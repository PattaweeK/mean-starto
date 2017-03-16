import { NgModule } from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";


@NgModule({

    declarations: [NavbarComponent],
    imports:[
        BrowserModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavModule { }
