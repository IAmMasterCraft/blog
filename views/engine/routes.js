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
 * logout routes
 */

const logoutRoutes = () => {
    return ((getRoute()) && getRoute().includes("logout")) ? true : false;
}

/**
 * read routes
 */

const readRoutes = () => {
    return ((getRoute()) && getRoute().includes("read")) ? true : false;
}

/**
 * edit routes
 */

const editRoutes = () => {
    return ((getRoute()) && getRoute().includes("edit")) ? true : false;
}

/**
 * delete routes
 */

const deleteRoutes = () => {
    return ((getRoute()) && getRoute().includes("delete")) ? true : false;
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