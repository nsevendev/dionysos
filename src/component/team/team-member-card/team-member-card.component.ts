import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-member-card.component.html',
})
export class TeamMemberCardComponent {
  fakeData = [
    {
      nom: 'john',
      image:
        'https://cdn.discordapp.com/attachments/1230924324924428369/1281149671670157353/image.png?ex=671c961c&is=671b449c&hm=fbadbf5179c451c507ac60e2dcc10cac2d1b8d85c3534bd70624881d68437e87&',
      description: 'je suis john',
    },
    {
      nom: 'john',
      image:
        'https://cdn.discordapp.com/attachments/1230924324924428369/1281149671670157353/image.png?ex=671c961c&is=671b449c&hm=fbadbf5179c451c507ac60e2dcc10cac2d1b8d85c3534bd70624881d68437e87&',
      description: 'je suis john',
    },
    {
      nom: 'john',
      image:
        'https://cdn.discordapp.com/attachments/1230924324924428369/1281149671670157353/image.png?ex=671c961c&is=671b449c&hm=fbadbf5179c451c507ac60e2dcc10cac2d1b8d85c3534bd70624881d68437e87&',
      description: 'je suis john',
    },
    {
      nom: 'john',
      image:
        'https://cdn.discordapp.com/attachments/1230924324924428369/1281149671670157353/image.png?ex=671c961c&is=671b449c&hm=fbadbf5179c451c507ac60e2dcc10cac2d1b8d85c3534bd70624881d68437e87&',
      description: 'je suis john',
    },
    {
      nom: 'john',
      image:
        'https://cdn.discordapp.com/attachments/1230924324924428369/1281149671670157353/image.png?ex=671c961c&is=671b449c&hm=fbadbf5179c451c507ac60e2dcc10cac2d1b8d85c3534bd70624881d68437e87&',
      description: 'je suis john',
    },
    {
      nom: 'john',
      image:
        'https://cdn.discordapp.com/attachments/1230924324924428369/1281149671670157353/image.png?ex=671c961c&is=671b449c&hm=fbadbf5179c451c507ac60e2dcc10cac2d1b8d85c3534bd70624881d68437e87&',
      description: 'je suis john',
    },
  ];
}
