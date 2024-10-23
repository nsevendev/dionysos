import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() titre: string = '';
  @Input() image: string = '';
  @Input() text: string = '';
  @Input() textPosition: 'left' | 'right' = 'left';
}
