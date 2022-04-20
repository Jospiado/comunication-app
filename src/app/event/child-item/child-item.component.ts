import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title!: string;
  @Output() inc: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  BTClick(n: number) {
    this.inc.emit(n);
  }

}
