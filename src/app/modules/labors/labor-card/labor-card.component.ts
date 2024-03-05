import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILabor } from '../interfaces/labor.interface';

@Component({
  selector: 'app-labor-card',
  templateUrl: './labor-card.component.html',
  styleUrls: ['./labor-card.component.scss'],
})
export class LaborCardComponent {
  @Input() id?: number;
  @Input() title?: string;
  @Input() description?: string;
  @Input() isDone: boolean = false;
  @Output() edit: EventEmitter<ILabor> = new EventEmitter<ILabor>();
  @Output() markDone: EventEmitter<ILabor> = new EventEmitter<ILabor>();
  @Output() remove: EventEmitter<ILabor> = new EventEmitter<ILabor>();

  constructor() {}

  editLabor(): void {
    this.edit.emit({
      id: this.id,
      title: this.title || '',
      description: this.description || '',
      isDone: this.isDone,
    });
  }

  markAsDone(): void {
    this.markDone.emit({
      id: this.id,
      title: this.title || '',
      description: this.description || '',
      isDone: true,
    });
  }

  removeLabor(): void {
    this.remove.emit({
      id: this.id,
      title: this.title || '',
      description: this.description || '',
      isDone: true,
    });
  }
}
