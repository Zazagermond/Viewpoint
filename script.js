

window.onload = function BrowserDisplay(){
    let Broswerhint=window.navigator.appName;
    let Browserusag= window.navigator.userAgent;
    let language = window.navigator.language;
    let jconf = navigator.javaEnabled();
    if (jconf==false){
    document.getElementById("Lang").innerHTML = "Browser language: " + language;
    window.alert(" Java: Disactivated");
    }else{
        document.getElementById("Lang").innerHTML = "Browser language: " + language;
        window.alert("Java: Active");
    }
        document.getElementById("cookieConsent").style.display = "block";
    var text = "";
  
    if (navigator.cookieEnabled == true) {
      text = "Cookies are enabled.";
    } else {
       text = "Cookies are not enabled. App: "+Broswerhint+ " UsrAgent: "+Browserusag;

    }
    document.getElementById("cookie").innerHTML = text;
  
    }

 // Show the cookie consent box


function acceptcookies(){
    
    navigator.cookieEnabled = true;
    //setCookie("cookieConsent", "accepted", 30); // Set cookie for 30 days
    document.getElementById("cookieConsent").style.display ="none";
}

function rejectCookies(){
    navigator.cookieEnabled =false;
}