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

const loadImage = (imageFile) => {
    if (imageFile.files && imageFile.files[0]) {
        const readImage = new FileReader();
        readImage.onload = (e) => {
            $("#image-preview").attr("src", e.target.result).show();
            $('textarea#image').val(e.target.result);
        }
        readImage.readAsDataURL(imageFile.files[0]);
    }
}

const newBlogPost = async() => {
    const title = $("#title").val();
    const content = $("#content").val();
    const image = $("#image").val();
    if (!title || !content) {
        alert("All fields are required!");
        return false;
    }
    const blogPost = await createPost({
        title,
        content,
        image,
    });

    if (!blogPost.error) {
        localStorage.setItem("auth", true);
        window.location.href = "http://localhost/blog-management-system/views/#home";
        return true;
    } else {
        console.log(blogPost.error);
        localStorage.setItem("auth", false);
        window.location.href = "http://localhost/blog-management-system/views/#create";
        return true;
    }
}