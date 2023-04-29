import { Route } from '@angular/router';
import {ModulesComponent} from "../../../../libs/admin/feature-modules/src/lib/modules/modules.component";
import {AppLayoutComponent} from "../../../../libs/shared/ui/src/lib/layout/app.layout.component";

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import('libs/admin/feature-shell/src/lib/admin-feature-shell.module').then(
                (m) => m.AdminFeatureShellModule
            ),
    }
];
