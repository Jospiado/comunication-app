import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clients } from '../clients.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() client!: Clients;
  @Output() updateClient: EventEmitter<Clients> = new EventEmitter();
  @Output() removeClient: EventEmitter<any> = new EventEmitter();
  onEdit: boolean = false;
  constructor() { }
  name!: string;
  age!: number;
  ngOnInit(): void {
  }
  edit() {
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }
  remove() {
    this.removeClient.emit();
  }
  save() {
    this.onEdit = false;
    this.updateClient.emit(
      { name: this.name, age: this.age }
    );
  }
}
