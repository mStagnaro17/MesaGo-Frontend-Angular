import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { config as appConfig } from './app.config';


const serverConfig: ApplicationConfig = {
  providers: [
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);