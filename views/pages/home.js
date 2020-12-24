const homePage = () => {
    /**
     * empty parent(s) DOM
     */
    $("#root").empty();

    /**
     * set nav
     */
    activeNav(".home")

    /**
     * set content
     */
    blogPostToDom();
}