const logout = async() => {
    /**
     * empty parent(s) DOM
     */
    $("#root").empty();

    /**
     * set nav
     */
    activeNav(".logout")

    /**
     * set content
     */
    logoutToDom();
}