import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Assuming appConfig is in this path

// Modify appConfig or directly add HttpClient provider with fetch here
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(withFetch()), // Enables fetch for HttpClient
    ...appConfig.providers || [] // Keeps any existing providers from appConfig
  ]
}).catch((err) => console.error(err));
