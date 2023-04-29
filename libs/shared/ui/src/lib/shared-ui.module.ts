import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedUiRoutes } from './lib.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(sharedUiRoutes),
        RouterModule.forChild(sharedUiRoutes),
    ],
})
export class SharedUiModule {}
