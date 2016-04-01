import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { MessageBusService } from '../../services/message-bus/message-bus.service';

@Component({
  selector: 'screen-splash',
  templateUrl: 'app/screens/splash/splash.component.html'
})
export class SplashComponent implements OnInit {

  constructor(private _messageBusService: MessageBusService, private _router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this._messageBusService.messageBus.broadcast('Splash Complete');
       this._router.navigate(['Home']);
    }, 3000);
  }
}
