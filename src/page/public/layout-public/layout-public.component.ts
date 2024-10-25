import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../component/footer/footer.component';
import { HeaderComponent } from '../../../component/header/header.component';
import { SvgIconComponent } from '../../../component/core/svg/svgn7.component';

@Component({
  selector: 'app-layout-public',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, SvgIconComponent],
  templateUrl: './layout-public.component.html',
  styleUrls: ['./layout-public.component.css'],
})
export class LayoutPublicComponent {}
