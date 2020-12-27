const signUp = () => {
    /**
     * empty parent(s) DOM
     */
    $("#root").empty();

    /**
     * set nav
     */
    activeNav(".signup")

    /**
     * set content
     */
    signUpToDom();
}


const registerUser = async() => {
    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const c_password = $("#confirm-password").val();
    if (!name || !email || !password || !c_password) {
        alert("All fields are required!");
        return false;
    }
    if (password !== c_password) {
        alert("Passwords do not match");
        return false;
    }
    const newUser = await registration({
        fullname: name,
        email,
        password,
    });
    if (!newUser.error) {
        localStorage.setItem("name", newUser.fullname);
        localStorage.setItem("email", newUser.email);
        window.location.href("http://localhost/blog-management-system/views/#login")
        return true;
    } else {
        console.log(newUser.error);
        window.location.href("http://localhost/blog-management-system/views/#signup")
        return false;
    }

}