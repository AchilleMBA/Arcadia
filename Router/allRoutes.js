import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html","/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/services", "Service", "/pages/services.html"),
    new Route("/habitats", "habitats", "/pages/habitats.html"),
    new Route("/contact", "contact", "/pages/contact.html"),
    new Route("/marais", "marais", "/pages/marais.html"),
    new Route("/savane", "savane", "/pages/savane.html"),
    new Route("/jungle", "jungle", "/pages/jungle.html"),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";