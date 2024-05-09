// console.log('comments');
const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
}

const loadComments1 = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();
    console.log(data);
}

const mark = async() =>{
    const res = await fetch('url')
    const data = await res.json()
    console.log(data)
}