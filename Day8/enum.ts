

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

enum BrowserStatus {
OPen,
Incognite,
crash,
Close=5,
freeze
}

function reportBrowserStatus(status :BrowserStatus){

    console.log(`Current status of browser is ${status}`);   

}

reportBrowserStatus(BrowserStatus.freeze)