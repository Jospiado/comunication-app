import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  title = "my title"
  value: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  incBy(event: any) {
    this.value += event;
  }

}
