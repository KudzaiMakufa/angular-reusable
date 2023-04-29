import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminFeatureShellRoutes } from './lib.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(adminFeatureShellRoutes),
    ],
})
export class AdminFeatureShellModule {}
