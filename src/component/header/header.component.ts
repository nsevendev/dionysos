import { Component } from '@angular/core';
import { SvgIconComponent } from '../core/svg/svgn7.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}

