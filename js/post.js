function displayPost (){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => loadDataPost(data))
}
function loadDataPost (data){
    const postContainer = document.getElementById('post-list')
    for (const post of data){
        // console.log(post);
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = ` <h4>User-id:${post.userId} </h4>
                            <h2>Title:${post.title} </h2>
                            <p>Description:${post.body} </p>`;
            postContainer.appendChild(div)
    }

}