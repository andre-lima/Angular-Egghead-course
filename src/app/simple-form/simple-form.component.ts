import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input
        #myInput
        type="text"
        [(ngModel)]="message"
        [ngClass]="{mousedown:isMouseDown}"
        (mousedown)="isMouseDown=true"
        (mouseup)="isMouseDown=false"
        (mouseleave)="isMouseDown=false"
      >
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
  .mousedown {
    border: 2px solid green;
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
