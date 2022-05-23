import { Routes } from '@angular/router';


export const Full_Content_Routes: Routes  = [
    { path:'', 
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },

    { path: 'widgets',
        loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule)
    },

    { path: 'mail',
        loadChildren: () => import('../../components/mail/mail.module').then(m => m.MailModule)
    },

    { path: 'apps',
        loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule)
    },
    { path: 'icons',
        loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'maps',
        loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule)
    },
    { path: 'tables',
        loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule)
    },
    { path: 'elements',
        loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
    },
    { path: 'advancedUi',
        loadChildren: () => import('../../components/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)
    },
    { path: 'forms',
        loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormModule)
    },
    { path: 'charts',
        loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule)
    },
    { path: 'pages',
        loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
    },
    { path: 'ecommerce',
        loadChildren: () => import('../../components/ecommerce/ecommerce.module').then(m => m.EcommerceModule)
    },
    { path: 'utilities',
        loadChildren: () => import('../../components/utilities/utilities.module').then(m => m.UtilitiesModule)
    }
 
 ];