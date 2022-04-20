import { Clients } from './clients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name!: string;
  age!: number;
  clients: Clients[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  save() {
    this.clients.push(
      { name: this.name, age: this.age }
    );
    this.name = '';
    this.age = 0;
  }

  deleteClient(n: number) {
    this.clients.splice(n, 1);
  }
  updateClient(c: Clients, n: number) {
    this.clients[n].name = c.name;
    this.clients[n].age = c.age;
  }
}
