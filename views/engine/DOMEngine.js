const singlePostCard = (size, blogObject) => {
        return `
    <div class="col-lg-${size}">
                                <div class="blog-post">
                                    <div class="blog-thumb">
                                        <img src="${blogObject.image}" alt="">
                                    </div>
                                    <div class="down-content">
                                        <!-- <span>Lifestyle</span> -->
                                        <a href="#read/${blogObject._id}">
                                            <h4>${blogObject.title}</h4>
                                        </a>
                                        <ul class="post-info">
                                            <li><a href="#">${blogObject.author}</a></li>
                                            <li><a href="#">${blogObject.dateGenerated}</a></li>
                                            <!-- <li><a href="#">12 Comments</a></li> -->
                                        </ul>
                                        <p>
                                            ${blogObject.content}
                                            ${(blogObject.content.length > 200) ? `<br><a href='#read/${blogObject._id}'>Continue Reading...</a>` : ""}
                                        </p>
                                        ${
                                            (isAuth(blogObject.path) && blogObject.author === localStorage.getItem("name") && blogObject.user_id === localStorage.getItem("user_id")) ? `<div class="post-options">
                                            <div class="row">
                                                <div class="col-6">
                                                    <ul class="post-tags">
                                                        <li><a href="#edit/${blogObject._id}"><i class="fa fa-edit"></i>&nbsp;Edit</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-6">
                                                    <ul class="post-share">
                                                        <li><a href="#delete/${blogObject._id}"><i class="fa fa-trash-o"></i>&nbsp;Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>` : ""
                                        }
                                        
                                    </div>
                                </div>
                            </div>
    `;
}

const navItem = () => {
    return `
    <li class="nav-item active home">
                            <a class="nav-link" href="#home">Home
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item create">
                            <a class="nav-link" href="#create">Create</a>
                        </li>
                        <li class="nav-item signup">
                            <a class="nav-link" href="#signup">Sign Up</a>
                        </li>
                        <li class="nav-item login">
                            <a class="nav-link" href="#login">Login</a>
                        </li>
                        <li class="nav-item logout">
                            <a class="nav-link" href="#logout">Logout</a>
                        </li>
    `;
}




const activeNav = (newClass) => {
    $(".nav-item").removeClass("active");
    $(newClass).addClass("active");
}

const blogPostToDom = async() => {
    const availablePost = await getAllBlogPost();
    try {
        availablePost.map(post => {
            const blogObject = post;
            blogObject.path = true,
            blogObject.content = (post.content.length > 200) ? post.content.substr(0, 200) : post.content;
            $("#root").append(singlePostCard((blogObject.size) ? blogObject.size : "6", blogObject));
        });
    } catch (error) {
        console.log(error.message);
        const errorObject = [{
            image: "https://iammastercraft.github.io/mobileFirstAid/svg/404.svg",
            title: "Error",
            content: "Couldn't communicate with API",
            author: "BackendService",
            dateGenerated: new Date(Date.now()),
            size: "12",
            path: true,
        }];
        errorObject.map(post => {
            const blogObject = post;
            blogObject.content = (post.content.length > 200) ? post.content.substr(0, 200) : post.content;
            $("#root").append(singlePostCard((blogObject.size) ? blogObject.size : "6", blogObject));
        });
    }
    
}

const signUpToDom = async() => {
    const signUpPage = await getSignUpPage();
    $("#root").html(signUpPage);

}

const loginToDom = async() => {
    const loginPage = await getLoginPage();
    $("#root").html(loginPage);
}

const createToDom = async() => {
    const createPage = await getCreatePage();
    $("#root").html(createPage);
}

const readToDom = async () => {
    const presentRoute = getRoute().split("/");
    const readPage = await getReadPage();
    const onePost = await getOneBlogPost(presentRoute[presentRoute.length - 1]);
    $("#root").html(readPage);
    return onePost;
}

const editToDom = async () => {
    const presentRoute = getRoute().split("/");
    const editPage = await getEditPage();
    const onePost = await getOneBlogPost(presentRoute[presentRoute.length - 1]);
    $("#root").html(editPage);
    return onePost;
}

const logoutToDom = async() => {
    const logOutNow = await validateLogout();
    if (logOutNow.success) {
        const username = localStorage.getItem("name");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("user_id");
        localStorage.removeItem("auth");
        alert(`${username} has logged out successfully`);
        window.location.href = "http://localhost/blog-management-system/views/#home";
    }
}