import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from  './helloworld/helloworld.component';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'micro-ng-app2/page1'},
      { 
        path: 'micro-ng-app2', children: [
          { path: 'page1', component: Page1Component },
          { path: 'page2', component: Page2Component },
        ]
      },
    ], { useHash: true  }),
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
