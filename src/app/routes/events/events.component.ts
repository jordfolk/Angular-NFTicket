import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../../interfaces/IEvent';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    
  events: Event[] = [];  
  selectedEvent?: Event;
  eventList$!:Observable<any[]>;

    //Map to display data associate with foreign keys
    //eventListMap:Map<number, string> = new Map();

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
      this.getEvents();
      //this.eventList$ = this.eventService.getEvents();

  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }



}
