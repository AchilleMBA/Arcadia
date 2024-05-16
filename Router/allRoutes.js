import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/signin", "Connexion", "/pages/auth/signin.html",["disconnected"],"/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html",["disconnected"],"/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html",["admin", "employe","veterinaire"]),
    new Route("/services", "Service", "/pages/services.html",[]),
    new Route("/habitats", "habitats", "/pages/habitats.html",[]),
    new Route("/contact", "contact", "/pages/contact.html",["visiteur"]),
    new Route("/marais", "marais", "/pages/marais.html",["admin", "employe","veterinaire", "visiteur"]),
    new Route("/savane", "savane", "/pages/savane.html",["admin", "employe","veterinaire", "visiteur"]),
    new Route("/jungle", "jungle", "/pages/jungle.html",["admin", "employe","veterinaire", "visiteur"]),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";