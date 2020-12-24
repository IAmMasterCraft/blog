const apiGet = async(apiConfigObject, data = {}) => {
    try {
        // Default options are marked with *
        const response = await fetch(apiConfigObject.url, {
            method: apiConfigObject.method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
        return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
        console.log(error.message);
        return [{
            image: "https://iammastercraft.github.io/mobileFirstAid/svg/404.svg",
            title: "Error",
            content: "Couldn't communicate with API",
            author: "BackendService",
            dateGenerated: new Date(Date.now()),
            size: "12",
        }]
    }

}

const apiOthers = async(apiConfigObject, data = {}) => {
    try {
        // Default options are marked with *
        const response = await fetch(apiConfigObject.url, {
            method: apiConfigObject.method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
        console.log(error.message);
        return [{
            image: "https://iammastercraft.github.io/mobileFirstAid/svg/404.svg",
            title: "Error",
            content: "Couldn't communicate with API",
            author: "BackendService",
            dateGenerated: new Date(Date.now()),
            size: "12",
        }]
    }

}

const htmlGet = async(apiConfigObject, data = {}) => {
    try {
        // Default options are marked with *
        const response = await fetch(apiConfigObject.url, {
            method: apiConfigObject.method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
        return response.text(); // parses HTML text response into native JavaScript objects
    } catch (error) {
        console.log(error.message);
        return `<img src="https://iammastercraft.github.io/mobileFirstAid/svg/404.svg"/>`;
    }

}

const getAllBlogPost = async() => {
    const blogPost = await apiGet({
        url: "http://localhost:3000/api/blog-post/",
        method: "GET",
    });

    return blogPost;
}

const getSignUpPage = async() => {
    const signUp = await htmlGet({
        url: "./pages/signup.html",
        method: "GET",
    });
    return signUp;
}

const getLoginPage = async() => {
    const login = await htmlGet({
        url: "./pages/login.html",
        method: "GET",
    });
    return login;
}

const registration = async(data) => {
    const register = await apiOthers({
        url: "http://localhost:3000/api/signup/",
        method: "POST",
    }, data);
    return register;
}

const authorization = async(data) => {
    const login = await apiOthers({
        url: "http://localhost:3000/api/login/",
        method: "POST",
    }, data);
    return login;
}