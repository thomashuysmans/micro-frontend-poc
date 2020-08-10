import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from  './helloworld/helloworld.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
    //AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

      customElements.define('ng-app2-el', ngCustomElement);
   }

}
