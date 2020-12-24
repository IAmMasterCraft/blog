const singlePostCard = (size, blogObject) => {
    return `
    <div class="col-lg-${size}">
                                <div class="blog-post">
                                    <div class="blog-thumb">
                                        <img src="${blogObject.image}" alt="">
                                    </div>
                                    <div class="down-content">
                                        <!-- <span>Lifestyle</span> -->
                                        <a href="#">
                                            <h4>${blogObject.title}</h4>
                                        </a>
                                        <ul class="post-info">
                                            <li><a href="#">${blogObject.author}</a></li>
                                            <li><a href="#">${blogObject.dateGenerated}</a></li>
                                            <!-- <li><a href="#">12 Comments</a></li> -->
                                        </ul>
                                        <p>
                                            ${blogObject.content}
                                            ${(blogObject.content.length > 200) ? "<br><a href='#'>Continue Reading...</a>" : ""}
                                        </p>
                                        <!-- <div class="post-options">
                                            <div class="row">
                                                <div class="col-6">
                                                    <ul class="post-tags">
                                                        <li><i class="fa fa-tags"></i></li>
                                                        <li><a href="#">Beauty</a>,</li>
                                                        <li><a href="#">Nature</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-6">
                                                    <ul class="post-share">
                                                        <li><i class="fa fa-share-alt"></i></li>
                                                        <li><a href="#">Facebook</a>,</li>
                                                        <li><a href="#"> Twitter</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
    `;
}




const activeNav = (newClass) => {
    $(".nav-item").removeClass("active");
    $(newClass).addClass("active");
}

const blogPostToDom = async() => {
    const availablePost = await getAllBlogPost();
    availablePost.map(post => {
        const blogObject = post;
        blogObject.content = (post.content.length > 200) ? post.content.substr(0, 200) : post.content;
        $("#root").append(singlePostCard((blogObject.size) ? blogObject.size : "6", blogObject));
    });
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