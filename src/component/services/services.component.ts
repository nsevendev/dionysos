import { Component } from '@angular/core';
import { ServiceCard1Component } from './service-card1/service-card1.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCard1Component],
  templateUrl: './services.component.html',
})
export class ServicesComponent {}
