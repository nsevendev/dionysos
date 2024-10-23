import { Component } from '@angular/core';
import { CardComponent } from '../core/card/card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './services.component.html',
})
export class ServicesComponent {}
