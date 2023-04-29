import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { clientFeatureShellRoutes } from './lib.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(clientFeatureShellRoutes),
        RouterModule.forChild(clientFeatureShellRoutes),
    ],
})
export class ClientFeatureShellModule {}
