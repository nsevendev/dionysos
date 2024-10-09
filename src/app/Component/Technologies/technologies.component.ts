import { Component } from '@angular/core'

@Component({
  standalone: true,
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class Technologies {
  Technologies: string[] = ['React', 'Rust', 'React Native'];
}

