export class User {
    id: number;
    name: string;
    email: string;
    phone: string;
    readonly: boolean;
    administrator: boolean;
    map: string;
    latitude: number;
    longitude: number;
    zoom: number;
    password: string;
    twelveHourFormat: boolean;
    coordinateFormat: string;
    disabled: boolean;
    expirationTime: string;
    deviceLimit: number;
    userLimit: number;
    deviceReadonly: boolean;
    limitCommands: boolean;
    poiLayer: string;
    token: string;
    attributes: object;
}