let form=document.getElementById("form");
let input=document.getElementById("input");
let msg=document.getElementById("msg");
let posts=document.getElementById("posts")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidator();
})
let formValidator=()=>{
    if(input.value===""){
        msg.innerHTML="Post cannot be empty!"
    }
    else{
        msg.innerHTML="";
        acceptData();
    }
}

let data={};
let acceptData=()=>{
    data["text"]=input.value;
    createPost();
}
let createPost=()=>{
    posts.innerHTML +=` <div>
    <p>${data.text}</p>
    <span>
        <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
    </span>
   
</div>
`
input.value=""
}

let deletePost=(e)=>{
    e.parentElement.parentElement.remove();
}
let editPost=(e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}