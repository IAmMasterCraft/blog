const hashChange = async() => {
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

    (!$(".navbar-toggler").attr("class").includes("collapsed")) ? $(".navbar-toggler").click(): "";

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