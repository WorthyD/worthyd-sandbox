import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
//import { MyTestDataService } from './my-test-data.service';
import { ProviderServiceService } from './services/provider-service.service';
import { MyTestDataService } from './counter/my-test-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    MyTestDataService,
    {
      provide: ProviderServiceService,
      useFactory: () => new ProviderServiceService('AppModule'),
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
