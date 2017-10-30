import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text" [(ngModel)]="message">
      <button (click)="update.emit({text: message})">click me</button>
    </div>
  `,
  styles: [`
  :host {
    display: flex;
  }
  * {
    font-family: monospace;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() message;

  @Output() update = new EventEmitter();

}
