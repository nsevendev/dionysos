import { Component } from '@angular/core';
import { ServicesComponent } from '../../../component/services/services.component';
import { TeamComponent } from '../../../component/team/team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent, TeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
