function(codeType, content) {
  if (codeType == 'setGenericInformations') {
      sessionStorage['genericInformation'] = content;
      this.eventTarget.send(codeType, content);
  } else if (codeType == 'selectDirectory') {
      this.eventTarget.send(codeType, content);
  } else if (codeType == 'isLoggingProfile') {
      sessionStorage['isLoggingProfile'] = content;
  } else if (codeType == 'isLoggingReplay') {
      sessionStorage['isLoggingReplay'] = content;
  } else if (codeType == 'getUrlIdPortal') {
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'setUrlAccessCentral') {
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'setStackCalls') {
      sessionStorage['stackInfo'] = content
      this.eventTarget.send(codeType, content);
  } else if (codeType == 'setAppDiagnostic') {
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'setPerformanceDictionary') {
    sessionStorage['PerformanceDictionaryInfo'] = content
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'setParamsInformations') {
    sessionStorage['param'] = content;
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'setExecBlocksInformations') {
    sessionStorage['execblock'] = content;
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'setAlterStatusExecBlock') {
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'returnExportData') {
    sessionStorage['returnExportData'] = content;
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'returnConfigDbms') {
    sessionStorage['config_dbms'] = content;
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'returnConnection') {
    sessionStorage['connection'] = content;
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'returnListAnalysis') {
    sessionStorage['list_analysis'] = content;
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'returnPostAnalysis') {
    sessionStorage['return_post_analysis'] = content;
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'returnAnalysis') {
    sessionStorage['return_get_analysis'] = content;
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'setInfosUPDData') {
    sessionStorage['setInfosUPDData'] = content;
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'returnUpdateUPDData') {
    sessionStorage['returnUpdateUPDData'] = content;
    this.eventTarget.send(codeType, content);
  } else if (codeType == 'setPrograms') {
    this.eventTarget.send(codeType, content);
  }
}
