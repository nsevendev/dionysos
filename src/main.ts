import { bootstrapApplication } from '@angular/platform-browser';
import { rootConfig } from './root/root.config';
import { RootComponent } from './root/root.component';

bootstrapApplication(RootComponent, rootConfig)
  .catch((err) => console.error(err));
