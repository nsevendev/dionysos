import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-service-card1',
  standalone: true,
  imports: [],
  templateUrl: './service-card1.component.html',
})
export class ServiceCard1Component {
  @Input() titre: string = '';
  @Input() image: string = '';
  @Input() text: string = '';
  @Input() textPosition: 'left' | 'right' = 'left';
}
