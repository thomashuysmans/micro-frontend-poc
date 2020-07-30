import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent,
    HelloWorldComponent
  ]
})
export class AppModule { 

  constructor(private injector: Injector) {}

   ngDoBootstrap() {
      const { injector } = this;
      const ngCustomElement = createCustomElement(HelloWorldComponent, { injector });

      customElements.define('ng-el', ngCustomElement);
   }
}
