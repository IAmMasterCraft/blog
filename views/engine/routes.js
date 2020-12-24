const getRoute = () => {
    return $(location).attr("href").split("#")[1];
}

/**
 * signup route
 */
const signUpRoutes = () => {
    return ((getRoute()) && getRoute().includes("signup")) ? true : false;
}

/**
 * login routes
 */

const loginRoutes = () => {
    return ((getRoute()) && getRoute().includes("login")) ? true : false;
}

/**
 * Create blog post routes
 */

const createRoutes = () => {
    return ((getRoute()) && getRoute().includes("create")) ? true : false;
}

/**
 * home routes
 */

const homeRoutes = () => {
    if ((getRoute()) && getRoute().includes("home")) return true;
    if (getRoute() === "") return true;
    if (!(getRoute())) return true;
    return false;
}