import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './services.component.html',
})
export class ServicesComponent {}
