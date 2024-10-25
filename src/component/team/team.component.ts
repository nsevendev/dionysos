import { Component } from '@angular/core';
import { TeamMemberCardComponent } from './team-member-card/team-member-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [TeamMemberCardComponent, CommonModule],
  templateUrl: './team.component.html',
})
export class TeamComponent {}
