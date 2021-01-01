const edit = async() => {
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
    const blogPostData = await editToDom();

    dataToForm(blogPostData);
}

const dataToForm = (blogPost) => {
    blogPost.map(post => {
        $("#image-preview").attr("src", post.image).show();
        $("#title").val(post.title);
        $("#content").val(post.content);
        $("#image").val(post.image);
        $("#form-submit").attr("onclick", `updateBlogPost("${post._id}")`);
    });

}

const updateBlogPost = async(postId) => {
    // const presentRoute = getRoute().split("/");
    const id = postId;
    const title = $("#title").val();
    const content = $("#content").val();
    const image = $("#image").val();
    if (!title || !content || !id) {
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
        window.location.href = `http://localhost/blog-management-system/views/#read/${blogPost.title.replace(/ /g, "-").toLowerCase()}-${blogPost._id}`;
        return true;
    } else {
        console.log(blogPost.error);
        // localStorage.setItem("auth", false);
        window.location.href = `http://localhost/blog-management-system/views/#edit/${blogPost.title.replace(/ /g, "-").toLowerCase()}-${blogPost._id}`;
        return true;
    }
}