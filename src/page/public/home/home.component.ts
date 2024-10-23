import { Component } from '@angular/core';
import { ServicesComponent } from '../../../component/services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
