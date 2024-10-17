import { Component } from '@angular/core';
import { ServiceCard1Component } from './service-card1/service-card1.component';
import { ServiceCard2Component } from './service-card2/service-card2.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCard1Component, ServiceCard2Component],
  templateUrl: './services.component.html',
})
export class ServicesComponent {}
