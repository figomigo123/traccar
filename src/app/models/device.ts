export class ArrayOfDevices {
    id: number;
    device: Device;
   
    }
    export class Device{
        id: number;
        name: string;
        uniqueId: string;
        status: string;
        disabled: boolean;
        lastUpdate: any;
        positionId: number;
        groupId: number;
        phone: string;
        model: string;
        contact: string;
        category: string;
        children?
        geofenceIds: [];
        attributes: { }
        }