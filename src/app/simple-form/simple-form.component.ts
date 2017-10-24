import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <p>{{message}}</p>
      <input #myInput type="text" [(ngModel)]="message">
      <button (click)="onClick($event, myInput.value)">click me</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() message;

  onClick(event, value){
    console.log(event, value)
  }

}
