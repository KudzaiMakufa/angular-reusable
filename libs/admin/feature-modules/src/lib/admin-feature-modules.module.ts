import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminFeatureModulesRoutes } from './lib.routes';
import {FormsModule} from "@angular/forms";
import {ChartModule} from "primeng/chart";
import {MenuModule} from "primeng/menu";
import {TableModule} from "primeng/table";
import {StyleClassModule} from "primeng/styleclass";
import {PanelMenuModule} from "primeng/panelmenu";
import {ButtonModule} from "primeng/button";
import {ModulesComponent} from "./modules/modules.component";

@NgModule({
    imports: [
        CommonModule,
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        RouterModule.forChild(adminFeatureModulesRoutes),
    ],
    declarations: [ModulesComponent],
    exports: [ModulesComponent],
})
export class AdminFeatureModulesModule {}
