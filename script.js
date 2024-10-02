const translate = {
    en: {
      titled: "Hello, ",
      titlem: "Good morning",
      titlea: "Good afternoon",
      titlee: "Good evening",
      description: "Welcome to our website! Please enter your cookie preferences and let us know how we can improve our website."
    },
    es: {
      titled: "Hola, ",
      titlem: "Buenos días",
      titlea: "Buenas tardes",
      titlee: "Buenas noches",
      description: "¡Bienvenidos a nuestro sitio web! Por favor, indique sus preferencias de cookies y háganos saber cómo podemos mejorar nuestro sitio."
    },
    sn: {
      titled: "Makadi",
      titlem: "Mamukasei, ",
      titlea: "Maskwerasei, ",
      titlee: "Manheru, ",
      description: "Tinokugamuchirai kune webhusaiti yedu! Ndokumbira zadza zvaunofarira pamakuki uye tizivise kuti tingavandudza sei saiti yedu."
    },
    de: {
      titled: "Guten Tag",
      titlem: "Guten Morgen",
      titlea: "Guten Nachmittag",
      titlee: "Guten Abend",
      description: "Willkommen auf unserer Website! Bitte geben Sie Ihre Cookie-Einstellungen ein und Lassen Sie uns wissen wie können wir unsere Webseite verbessern."
    },
    fr: {
      titled: "Bonjour, ",
      titlem: "Bonjour",
      titlea: "Bonne après-midi",
      titlee: "Bonsoir",
      description: "Bienvenue sur notre site ! Veuillez indiquer vos préférences de Cookie et nous faire savoir comment nous pouvons améliorer notre site."
    }
  };

  let browserUserAgent = window.navigator.userAgent;
  let browserName = window.navigator.appName;

  window.onload = function () {
    let language = window.navigator.language.substring(0, 2); // Get the two-letter language code
    let javaEnabled = navigator.javaEnabled();
    document.getElementById("Lang").innerHTML = "Browser language: " + language;
    //cookiesStatus();
    // Show greeting based on language and time
    greeting(language);

    /* Java enabled status
    if (!javaEnabled) {
      window.alert("Java: Disabled");
    } else {
      window.alert("Java: Active");
    }
*/
    // Show cookie status and consent box if needed
    //cookiesStatus();
  };

  // Display greeting based on time of day and language
  function greeting(browLang) {
    // Get translation based on browser language or default to 'en'
    const translation = translate[browLang] || translate['en'];
    let current = new Date();
    let hour = current.getHours();
    var greetingType;
    var x=document.getElementById("langop");
    x.style.display="block";
    if (hour < 12&& hour>5) {
        greetingType=translation.titlem+" "+translation.description; // Morning
    } else if (hour < 17) {
        greetingType=translation.titlea+" "+translation.description; // Afternoon
    } else if (hour<24){
        greetingType=translation.titlee+" "+translation.description;//"translation[browLang].titlee+" "+translation[browLang].description"; // Evening
    };
    // Set greeting
    x.innerHTML = greetingType ;
  }
  function closelop(){
    document.getElementById("langop").style.display="none";
    document.getElementById("container").style.display="none";
    const imagereview=document.getElementById("gettoreview");
    imagereview.parentNode.removeChild(imagereview);
    
  }

  // Handle cookie status and consent
  function cookiesStatus() {
    //const cookieConsent = getCookie("cookieConsent");

    //if (!cookieConsent) {
      // If no consent is found, show the consent box
     // document.getElementById("cookieConsent").style.display = "block";
   // }

    // Cookie status display
    let cookieText = navigator.cookieEnabled
      ? "Cookies are enabled."
      : "Cookies are not enabled. App: " + browserName + " UserAgent: " + browserUserAgent;
    document.getElementById("cookieConsent").innerHTML = cookieText;
}
    // Accept cookies
     function acceptCookies() {
      setCookie("cookieConsent", "accepted", 365); // Set cookie for 1 year
      document.getElementById("cookieConsent").style.display = "none";
    };

    // Reject cookies 
    function rejectCookies() {
      setCookie("cookieConsent", "rejected", 365); // Set rejection for 1 year
      document.getElementById("cookieConsent").style.display = "none";
      
    };
  

  // Set cookie function
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiry in days
   // document.cookie = `${name}=${value};path=/`;
  }

  
