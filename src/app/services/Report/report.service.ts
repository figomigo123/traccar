import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../serverUrl';

@Injectable({
    providedIn: 'root'
})
export class ReportService {
    
 httpOptions = {
        responseType: 'arraybuffer',
        headers: new HttpHeaders(
            { 'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            
         'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password")) }),
        withCredentials: true
      }
    constructor(private http: HttpClient) { }

    showEventsReport(devices:string, groups:string,type:string, from:any, to:any){
        return this.http.get(`${apiUrl}/reports/events?${devices}&${groups}&type=${type}&from=${from}&to=${to}`,
        {
            responseType: 'blob',
            headers:{
                'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))
            }
        });
    }

    showRouteReport(devices:string, groups:string, from:any, to:any){
        return this.http.get(`${apiUrl}/reports/route?${devices}&${groups}&from=${from}&to=${to}`,
        
        {
            responseType: 'blob',
            headers:{
                'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))
            }
        });
    }

    showTripsReport(devices:string, groups:string, from:any, to:any){
        return this.http.get(`${apiUrl}/reports/trips?${devices}&${groups}&from=${from}&to=${to}`,
        {
            responseType: 'blob',
            headers:{
                'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))
            }
        });
    }

    showStopsReport(devices:string, groups:string, from:any, to:any){
        return this.http.get(`${apiUrl}/reports/stops?${devices}&${groups}&from=${from}&to=${to}`,
        {
            responseType: 'blob',
            headers:{
                'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))
            }
        });
    }


    showSummaryReport(devices:string, groups:string, from:any, to:any){
        return this.http.get(`${apiUrl}/reports/summary?${devices}&${groups}&from=${from}&to=${to}`,
        {
            responseType: 'blob',
            headers:{
                'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))
            }
        });
    }
}