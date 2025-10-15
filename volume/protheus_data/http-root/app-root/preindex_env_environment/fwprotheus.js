class FwEventData extends CustomEvent {
  constructor(eventType, data) {
    super(eventType);
    this.protheusResponse = data;
    if (twebchannel[eventType]) {
      this.subscriber = twebchannel[eventType].subscriber;
    }
  }
}

class FwEventDispatcher extends EventTarget {
  send(event, content) {
    this.dispatchEvent(new FwEventData(event, content));
  }
}

if (twebchannel && getParam) {
  twebchannel['gotConnection'] = false;
  var port = getParam('totvstec_websocket_port');
  var remoteType = getParam('totvstec_remote_type');
  var appName = getParam('app_name');

  if (port == null) {
    port = sessionStorage['SocketPort'];
  } else {
    sessionStorage['SocketPort'] = port;
  }

  if (remoteType == null) {
    remoteType = sessionStorage['RemoteType'];
  } else {
    sessionStorage['RemoteType'] = remoteType;
  }
  if (appName == null) {
    appName = sessionStorage['appName'];
  } else {
    sessionStorage['appName'] = appName;
  }

  if (port == null || remoteType == null) {
    console.log('Loading without twebchannel connection.');
  } else {
    if (appName) {
      appFunctions(appName);
    }

    twebchannel.advplToJs = function (codeType, codeContent, objectName) {
      if (this[appName]) {
        this[appName](codeType, codeContent, objectName);
      }
    };

    twebchannel.eventTarget = new FwEventDispatcher();

    twebchannel.connect(function () {
      twebchannel['gotConnection'] = true;
    });
  }

  function appFunctions(appName) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        twebchannel[appName] = new Function(
          'return (' + xmlhttp.responseText + ')'
        )();
      }
    };
    xmlhttp.open(
      'GET',
      '/app-root/' + appName + '/assets/preload/advpltojs.js',
      true
    );
    xmlhttp.send();
  }
} else {
  console.log('twebchannel object not found.');
}
