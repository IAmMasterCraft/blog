const manageLikes = async(options) => {
    //if auth
    if (isAuth()) {
        //{id: id, like: like}
        const filteredOptions = options.likes.filter(id => id === localStorage.getItem(user_id));
        //if user_id is not in likes then send new like
        if (filteredOptions.length) {
            //increase likes by 1 and queue job
            const todo = [{
                url: "http://localhost:3000/api/blog-post/like/new/",
                method: "PUT",
            }, { "post_id": filteredOptions.id }];
            try {
                const oldTodo = localStorage.getItem("todo");
                oldTodo.push(todo);
                localStorage.setItem("todo", oldTodo);
            } catch (error) {
                localStorage.setItem("todo", todo);
            }

        }
        //else remove like
        else {}
    }
    //else
    else {
        //redirect to login
    }
}