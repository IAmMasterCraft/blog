const create = () => {
    /**
     * empty parent(s) DOM
     */
    $("#root").empty();

    /**
     * set nav
     */
    activeNav(".create")

    /**
     * set content
     */
    createToDom();
}