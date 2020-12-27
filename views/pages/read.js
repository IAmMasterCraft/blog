const read = () => {
    /**
     * empty parent(s) DOM
     */
    $("#root").empty();

    /**
     * set nav
     */
    // activeNav(".create")

    /**
     * set content
     */
    const blogPostData = readToDom();
    console.log(blogPostData);
}