import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  @Input('firstname')
  name!: string;

  @Input()
  lastname!: string;

  @Input() age!: number;

  clients: Client[];

  constructor() {
    this.clients = [
      { id: 1, name: 'Joao', age: 20 },
      { id: 2, name: 'Bob', age: 18 },
      { id: 3, name: 'Hey', age: 18 },
      { id: 4, name: 'Boboa', age: 18 },
    ]
  }

  ngOnInit(): void {
  }

}
