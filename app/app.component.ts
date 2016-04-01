import { Component, OnInit, provide } from 'angular2/core';
import { MessageBusService } from './services/message-bus/message-bus.service';
import { CastReceiverManagerService } from './services/cast-receiver-manager/cast-receiver-manager.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from 'angular2/router';

import { _settings } from './settings';

import { SplashComponent } from './screens/splash/splash.component';
import { HomeComponent } from './screens/home/home.component';
import { Page1Component } from './screens/page1/page1.component';
import { FontsComponent } from './screens/fonts/fonts.component';
import { Fonts2Component } from './screens/fonts2/fonts2.component';
import { Fonts3Component } from './screens/fonts3/fonts3.component';
import { Fonts4Component } from './screens/fonts4/fonts4.component';
import { BootstrapGridComponent } from './screens/bootstrap-grid/bootstrap-grid.component';
import { GlyphiconsComponent } from './screens/glyphicons/glyphicons.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,
//      provide(Cast, {useExisting: cast}),
      MessageBusService,
      CastReceiverManagerService]

})
@RouteConfig([
  {
    path: '/splash',
    name: 'Splash',
    component: SplashComponent,
    useAsDefault: true
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/page1/:message',
    name: 'Page1',
    component: Page1Component
  },
  {
    path: '/fonts',
    name: 'Fonts',
    component: FontsComponent
  },
  {
    path: '/fonts2',
    name: 'Fonts2',
    component: Fonts2Component
  },
  {
    path: '/fonts3',
    name: 'Fonts3',
    component: Fonts3Component
  },
  {
    path: '/fonts4',
    name: 'Fonts4',
    component: Fonts4Component
  },
  {
    path: '/grid',
    name: 'Grid',
    component: BootstrapGridComponent
  },
  {
    path: '/glyphicons',
    name: 'Glyphicons',
    component: GlyphiconsComponent
  },
])
export class AppComponent implements OnInit {
  title = "Angular 2 Receiver";
  constructor(private _messageBusService: MessageBusService, private _router: Router) { }

  ngOnInit() {
    console.log('ngOnInit');
    this._messageBusService.init();

    this._messageBusService.messageBus.onMessage = (event) => {
      console.log("messageBus.onMessage: " + JSON.stringify(event["data"]));
      var payload = JSON.parse(event["data"]);

      switch (payload.command)
      {
        case 'nav':
          var routerLink = [payload.page];

          if (payload.message != undefined) {
            routerLink.push({message: payload.message});
          }
          this._router.navigate(routerLink);
          break;
        case 'version':
          this._messageBusService.messageBus.broadcast(_settings.version);
          break;
      }

     }

     this._messageBusService.manager.start({statusText: "Application is starting"});

  }
}
