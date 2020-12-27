const edit = () => {
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
    const blogPostData = editToDom();

    console.log(blogPostData);
}

const dataToForm = (blogPost) => {
    $("#image-preview").attr("src");
    $("#title").val();
    $("#content").val();
    $("#image").val();
}

const updateBlogPost = (postId) => {
    const presentRoute = getRoute().split("/");
    const id = presentRoute[presentRoute.length - 1];
    const title = $("#title").val();
    const content = $("#content").val();
    const image = $("#image").val();
    if (!title || !content) {
        alert("All fields are required!");
        return false;
    }
    const blogPost = await updatePost({
        id,
        title,
        content,
        image,
    });

    if (!blogPost.error) {
        localStorage.setItem("auth", true);
        window.location.href = `http://localhost/blog-management-system/views/#read/${id}`;
        return true;
    } else {
        console.log(blogPost.error);
        localStorage.setItem("auth", false);
        window.location.href = "http://localhost/blog-management-system/views/#create";
        return true;
    }
}