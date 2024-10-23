import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../component/footer/footer.component';
import { ServicesComponent } from '../../../component/services/services.component';

@Component({
  selector: 'app-layout-public',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './layout-public.component.html',
})
export class LayoutPublicComponent {}
