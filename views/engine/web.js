const doesHttpOnlyCookieExist = (cookiename) => {
    const myDate = new Date();
    myDate.setTime(myDate.getTime() + (1000));
    const expires = `expires=${myDate.toUTCString()}`;

    document.cookie = `${cookiename}=new_value;path=/;${expires}`;
    return (document.cookie.indexOf(`${cookiename}=`) === -1) ? true : false;
}

const hashChange = async() => {
    $("#navbar").empty().append(navItem());
    (!$(".navbar-toggler").attr("class").includes("collapsed")) ? $(".navbar-toggler").click(): "";
    (homeRoutes() || signUpRoutes() || loginRoutes()) ? isAuth(true): isAuth();

    const presentRoute = getRoute();
    //home
    if (homeRoutes()) {
        //loading
        await homePage();
    }

    if (signUpRoutes()) {
        //loading
        await signUp();
    }

    if (loginRoutes()) {
        //loading
        await login();
    }

    if (createRoutes()) {
        //loading
        await create();
    }

    if (readRoutes()) {
        //loading
        await read();
    }

    if (editRoutes()) {
        //loading
        await edit();
    }

    if (deleteRoutes()) {
        //loading
        await deletes();
    }

    if (logoutRoutes()) {
        //loading
        await logout();
    }

}

$(document).ready(async() => {
    (!$(".navbar-toggler").attr("class").includes("collapsed")) ? $(".navbar-toggler").click(): "";
    if (getRoute()) {
        hashChange();
    } else {
        //loading
        // home
        await homePage();
    }

    window.onhashchange = hashChange;
});