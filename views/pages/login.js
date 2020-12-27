const login = () => {
    /**
     * empty parent(s) DOM
     */
    $("#root").empty();

    /**
     * set nav
     */
    activeNav(".login")

    /**
     * set content
     */
    loginToDom();
}

const loginUser = async() => {
    const email = $("#email").val();
    const password = $("#password").val();
    if (!email || !password) {
        alert("All fields are required!");
        return false;
    }
    const authUser = await authorization({
        email,
        password,
    });
    if (!authUser.error) {
        localStorage.setItem("name", authUser.fullname);
        localStorage.setItem("email", authUser.email);
        localStorage.setItem("user_id", authUser._id);
        localStorage.setItem("auth", true);
        window.location.href = "http://localhost/blog-management-system/views/#home";
    } else {
        console.log(authUser.error);
        alert("Omoooo something don happen you no fit login!");
        localStorage.setItem("auth", false);
        window.location.href = "http://localhost/blog-management-system/views/#signup";
    }
}