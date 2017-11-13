import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FloatingButtonComponent {

  @Input()
  text: string;

  @Output()
  clicklike: EventEmitter<Event>;

  constructor() {
    this.clicklike = new EventEmitter<Event>();
  }

  handleButtonClick() {
    this.clicklike.emit();
  }

}
