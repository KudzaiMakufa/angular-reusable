import { Route } from '@angular/router';

export const adminFeatureShellRoutes: Route[] = [
    {
        path: '',
        children: [
            {
                path: 'modules',
                loadChildren: () =>
                    import('libs/admin/feature-modules/src/lib/admin-feature-modules.module').then(
                        (m) => m.AdminFeatureModulesModule
                    ),

            }
        ]
    }
];
