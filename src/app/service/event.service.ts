import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Interfaces/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    
    readonly eventServiceURL = "https://localhost:7133/event/"

  constructor(private http:HttpClient) { }

    //Old functions below
    getEvents():Observable<any[]> {

        return this.http.get<any>(this.eventServiceURL + '/events');
        /*const movies = of(MOVIES);
        return movies;*/
    }

    getEvent(id:number): Observable<any> {
        /*const event = EVENTS.find(e => e.id === id)!;
        return of(event);*/
        return this.http.get<any>(this.eventServiceURL + `/event/${id}`);
    }
    

    addEvent(data:any) {
          return this.http.post(this.eventServiceURL + '/event', data);
    }


    updateEvent(id: number, data:any) {
          return this.http.put(this.eventServiceURL + `/event/${id}`, data);
    }

    deleteEvent(id:number) {
        return this.http.delete<any>(this.eventServiceURL + `/event/${id}`);
    }









}
