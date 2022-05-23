
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

export interface NotificationModel {
    id?:           number;
    attributes?:   any;
    calendarId?:   number;
    always?:       boolean;
    type?:         string;
    notificators?: string;
  }
  
  export interface ColumnItem {
    name: string;
    sortOrder: NzTableSortOrder | null;
    sortFn: NzTableSortFn | null;
    listOfFilter: NzTableFilterList;
    filterFn: NzTableFilterFn | null;
    filterMultiple: boolean;
    sortDirections: NzTableSortOrder[];
  }
  export class FilterTypes {
    text:string
    value:any
    constructor(text:string,value:string)
    {
        this.text = text
        this.value = value
    }
  }

 
