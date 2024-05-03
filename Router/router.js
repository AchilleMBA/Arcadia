import Route from "./Route.js.js";
import { allRoutes, websiteName } from "./allRoutes.js";


const route404 = new Route("404", "Page introuvable", "/pages/404.html");


const getRouteByUrl = (url) => {
  let currentRoute = null;
  
  allRoutes.forEach((element) => {
    if (element.url == url) {
      currentRoute = element;
    }
  });
  
  if (currentRoute != null) {
    return currentRoute;
  } else {
    return route404;
  }
};


const LoadContentPage = async () => {
  const path = window.location.pathname;
  
  const actualRoute = getRouteByUrl(path);
  
  const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
  
  document.getElementById("main-page").innerHTML = html;

 
  if (actualRoute.pathJS != "") {
   
    var scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.setAttribute("src", actualRoute.pathJS);

    
    document.querySelector("body").appendChild(scriptTag);
  }


  document.title = actualRoute.title + " - " + websiteName;
};

// Fonction pour gérer les événements de routage (clic sur les liens)
const routeEvent = (event) => {
  event = event || window.event;
  event.preventDefault();
  // Mise à jour de l'URL dans l'historique du navigateur
  window.history.pushState({}, "", event.target.href);
  // Chargement du contenu de la nouvelle page
  LoadContentPage();
};

// Gestion de l'événement de retour en arrière dans l'historique du navigateur
window.onpopstate = LoadContentPage;
// Assignation de la fonction routeEvent à la propriété route de la fenêtre
window.route = routeEvent;
// Chargement du contenu de la page au chargement initial
LoadContentPage();