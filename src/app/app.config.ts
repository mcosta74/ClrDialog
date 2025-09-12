import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { ClarityModule } from '@clr/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(ClarityModule),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
  ]
};
