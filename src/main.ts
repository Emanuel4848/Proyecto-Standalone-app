import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), //para poder manejarlo a nivel de toda la app
    provideRouter(routes),//para poder rutear a nivel de toda la app
  ]
})
  .catch((err) => console.error(err));
