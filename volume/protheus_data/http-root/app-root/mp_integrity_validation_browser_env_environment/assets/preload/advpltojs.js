function(codeType, codeContent) {
  storage : Storage;
  if(codeType === 'jsLog'){
    console.log(codeContent);
  } else {
    console.log('QUEM É CONTENT', codeType);
    console.log('QUEM É CODECONTENT', codeContent);
    this.eventTarget.send(codeType, codeContent);
    this.storage = window.localStorage;
    this.storage.setItem('idiomaProtheus',codeContent);
  }
}
