function(codeType, codeContent) {
  if (codeType === 'setLanguage') {
    localStorage.setItem('PO_USER_LOCALE', codeContent);
  }
  else if (codeType === 'setTheme') {
    localStorage.setItem('ProTheme', codeContent);
  }
  else {
    this.eventTarget.send(codeType, codeContent);
  }
}
