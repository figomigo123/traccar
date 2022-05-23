import { Routes } from "@angular/router";

export const COUNTENT_ROUTES:Routes = [{
    path: 'custompages',
    loadChildren: () => import('../../components/custom-pages/custom-pages.module').then(m => m.CustomPagesModule)
}]