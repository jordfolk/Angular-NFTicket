import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/IEvent';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    
    readonly eventServiceURL = "https://localhost:7133/event/"

  constructor(private http:HttpClient) { }

    getEvents():Observable<any[]> {

        return this.http.get<any>(this.eventServiceURL + '/events');

    }

    getEvent(id:number): Observable<any> {
        return this.http.get<any>(this.eventServiceURL + `/events/${id}`);
    }
    

    addEvent(data:any) {
          return this.http.post(this.eventServiceURL + '/events', data);
    }


    updateEvent(id: number, data:any) {
          return this.http.put(this.eventServiceURL + `/events/${id}`, data);
    }

    deleteEvent(id:number) {
        return this.http.delete<any>(this.eventServiceURL + `/events/${id}`);
    }



        //Locations

        getLocations():Observable<any[]> {

            return this.http.get<any>(this.eventServiceURL + '/locations');

        }

        getLocation(id:number): Observable<any> {
            return this.http.get<any>(this.eventServiceURL + `/locations/${id}`);
        }
        

        addLocation(data:any) {
                return this.http.post(this.eventServiceURL + '/locations', data);
        }


        updateLocation(id: number, data:any) {
                return this.http.put(this.eventServiceURL + `/locations/${id}`, data);
        }

        deleteLocation(id:number) {
            return this.http.delete<any>(this.eventServiceURL + `/Locations/${id}`);
        }



        //Sales

        getSales():Observable<any[]> {

            return this.http.get<any>(this.eventServiceURL + '/sales');
    
        }
    
        getSale(id:number): Observable<any> {
            return this.http.get<any>(this.eventServiceURL + `/sales/${id}`);
        }
        
    
        addSale(data:any) {
                return this.http.post(this.eventServiceURL + '/sales', data);
        }
    
    
        updateSale(id: number, data:any) {
                return this.http.put(this.eventServiceURL + `/sales/${id}`, data);
        }
    
        deleteSale(id:number) {
            return this.http.delete<any>(this.eventServiceURL + `/sales/${id}`);
        }





    //Admins

        getPublishers():Observable<any[]> {

            return this.http.get<any>(this.eventServiceURL + '/publishers');
    
        }
    
        getPublisher(id:number): Observable<any> {
            return this.http.get<any>(this.eventServiceURL + `/publishers/${id}`);
        }
        
    
        addPublisher(data:any) {
              return this.http.post(this.eventServiceURL + '/publishers', data);
        }
    
    
        updatePublisher(id: number, data:any) {
              return this.http.put(this.eventServiceURL + `/publishers/${id}`, data);
        }
    
        deletePublisher(id:number) {
            return this.http.delete<any>(this.eventServiceURL + `/publishers/${id}`);
        }





}
