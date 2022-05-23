import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/reports/dashboard/new',
    title: 'Summary',
    icon: 'fas fa-globe',
    class: '',
    extralink: false,
    submenu: [
     
    ]
  },
  {
    path: '/reports/dashboard/excel',
    title: 'Excel Reports',
    icon: 'fas fa-file-excel',
    class: '',
    extralink: false,
    submenu: [
     
    ]
  }
 ];
 export const ResTaurantROUTES: RouteInfo[] = [

  {
    path: '',
    title: 'التقارير',
    icon: 'fas fa-globe',
    class: '',
    extralink: false,
    submenu: [
      {
        path: '/dashboard/dashboard1',
        title: 'عرض',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  } 
 ];
 export const BranchesROUTES: RouteInfo[] = [
 
    {
      path: '',
      title: 'التقارير',
      icon: 'fas fa-globe',
      class: 'has-arrow',
      extralink: false,
      submenu: [
        {
          path: '/dashboard/dashboard1',
          title: 'عرض',
          icon: '',
          class: '',
          extralink: false,
          submenu: []
        }
      ]
    }
  ];
export const OperationsROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'ادارة الطلبات',
        icon: 'fas fa-globe',
        class: 'has-arrow',
        extralink: false,
        submenu: [
          {
            path: '/operations/all',
            title: 'عرض',
            icon: '',
            class: '',
            extralink: false,
            submenu: []
          }
        ]
    },
  ];  