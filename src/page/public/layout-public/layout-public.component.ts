import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../component/footer/footer.component';
import { HeaderComponent } from '../../../component/header/header.component';


@Component({
  selector: 'app-layout-public',
  standalone: true, // Cela indique que ce composant est autonome
  imports: [RouterOutlet, FooterComponent, HeaderComponent], // Importation de RouterOutlet et des composants enfants
  templateUrl: './layout-public.component.html',
  styleUrls: ['./layout-public.component.css'], // Utilisation correcte du tableau styleUrls
})
export class LayoutPublicComponent {}
