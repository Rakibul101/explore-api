// console.log('connected');
function dataLoad(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

function userData(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => display(data))
}

function display(data){
    console.log(data)
}