import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { config } from './root/root.config.server';

const bootstrap = () => bootstrapApplication(RootComponent, config);

export default bootstrap;
