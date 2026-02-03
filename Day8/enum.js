// //NUmeric enum / String Enum
// enum TestResults {
//     Pass="Passed",
//     Fail="Failed",
//     Skip="Skipped"
// }
// function logTestResult(result : TestResults){
//     console.log(`Test result : ${result}`);   
// }
// logTestResult(TestResults.Fail);
//Heterogenous
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["OPen"] = 0] = "OPen";
    BrowserStatus[BrowserStatus["Incognite"] = 1] = "Incognite";
    BrowserStatus[BrowserStatus["crash"] = 2] = "crash";
    BrowserStatus[BrowserStatus["Close"] = 5] = "Close";
    BrowserStatus[BrowserStatus["freeze"] = 6] = "freeze";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    console.log("Current status of browser is ".concat(status));
}
reportBrowserStatus(BrowserStatus.freeze);
