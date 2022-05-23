export class Event{
    
        id:number;
        type: string;
        eventTime: any;
        deviceId: number;
        positionId: number;
        geofenceId: number;
        data:Event[] =[];
        maintenanceId: number;
        attributes: { }
        
}