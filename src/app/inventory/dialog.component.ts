import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dialog',
  templateUrl: '//dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() addDate;
  @Input() editInvent;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removeDate = new EventEmitter();
  @Output() removeEditData =new EventEmitter();

  constructor() { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.addDate = [];
    this.editInvent = [];
    this.visibleChange.emit(this.visible);
    this.removeDate.emit(this.addDate);
    this.removeEditData.emit(this.editInvent);
  }
}
