import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import {AppLayoutModule} from "shared/ui";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        AppLayoutModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking',
        }),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent],



})
export class AppModule {}
