import {Injectable} from 'angular2/core';

@Injectable()
export class CastReceiverManagerService {
  private serviceId: string = "CastReceiverManagerService";
  manager: any;

  public init = () => {
    console.log(this.serviceId + ".init");

    if (this.manager != null)
      return false;

    cast.receiver.logger.setLevelValue(cast.receiver.LoggerLevel.NONE);

    this.manager = cast.receiver.CastReceiverManager.getInstance();

    this.manager.onReady = (event) =>  {
      console.log('Received Ready event: ' + JSON.stringify(event.data));
      this.manager.setApplicationState("Application status is ready...");
    };

    this.manager.onSenderConnected = (event) => {
      console.log('Received Sender Connected event: ' + event.data);
      console.log(this.manager.getSender(event.data).userAgent);
    };

    this.manager.onSenderDisconnected = (event) => {

        if (this.manager.getSenders().length == 0 && event.reason == cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
            window.close();
        }
    };

    this.manager.onSystemVolumeChanged = (event) => {
      console.log('Received System Volume Changed event: ' + event.data['level'] + ' ' +
          event.data['muted']);
    };

    return true;
  }
}
