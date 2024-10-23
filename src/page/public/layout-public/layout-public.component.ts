import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../component/footer/footer.component';
import { HeaderComponent } from '../../../component/header/header.component';

@Component({
  selector: 'app-layout-public',
  standalone: true, // This indicates that this is a standalone component
  imports: [RouterOutlet, FooterComponent, HeaderComponent], // Importing RouterOutlet and child components
  templateUrl: './layout-public.component.html',
  styleUrls: ['./layout-public.component.css'], // Correct use of styleUrls array
})
export class LayoutPublicComponent {}
