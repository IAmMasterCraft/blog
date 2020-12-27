const isAuth = (isHome = false) => {
    if (!doesHttpOnlyCookieExist("token") ||
        !localStorage.getItem("user_id") ||
        !localStorage.getItem("auth") ||
        !localStorage.getItem("name") ||
        !localStorage.getItem("email")
    ) {
        //remove nav routes
        $(".create").remove();
        $(".logout").remove();
        //set title and name
        $("#owner").text(`My`);
        $("title").text(`${$("#owner").text()} Blog`);
        (!isHome) ? window.location.replace("http://localhost/blog-management-system/views/#login"): "";
        return false;
    } else {
        $(".signup").remove();
        $(".login").remove();
        //set title and name
        $("#owner").text(`${localStorage.getItem("name").split(" ")[1]}'s`);
        $("title").text(`${$("#owner").text()} Blog`);
        return true;
    }
}