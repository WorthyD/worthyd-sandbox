import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';
import { MyTestComponent2Component } from './my-test-component-2/my-test-component-2.component';
import { MyTestDataService } from './my-test-data.service';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MyTestComponentComponent,
    MyTestComponent2Component,
  ],
  //providers: [MyTestDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
