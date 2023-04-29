import { Route } from '@angular/router';
import {ModulesComponent} from "./modules/modules.component";

export const adminFeatureModulesRoutes: Route[] = [
        {path: '', pathMatch: 'full', component: ModulesComponent}

];
