let userForm = document.getElementById("user-form");
let userData = document.getElementById("user-data");

userForm.addEventListener("submit", function (event) {

  event.preventDefault();
  let form = event.target;
  let userId = form.userinfo.value;
  
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((users) => {

  let user = users.find((item) => item.id == userId);
  
  if (user) {
    userData.innerHTML = `
    <b>User Id:  ${user.id}</b>
    <b> User Name:  ${user.username}</b> 
    <b> User Email:  ${user.email}</b>
    <button onclick = "userDetaile(${userId});"> Get Post </button>
    `;
    
  } else {
   userData.innerHTML = `<b class = 'color-red'> User Data is Not Found </b>`
  }

});
 
});

function userDetaile(currentId) {

  let posts = document.getElementById('user-detaile');

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((usersPosts) => {
  let filterusers = usersPosts.filter((user => user.userId === currentId));

  let newHTML = '';
for (let i = 0; i < filterusers.length; i++) {
  let {id, title, body} = filterusers[i]
   newHTML += `<div class = "post"> 
   <h3>Id : ${JSON.stringify (id)}</h3>
   <h4> <b>Titile</b> : ${JSON.stringify (title)}</h4>
   <h5><b>Post </b>: ${JSON.stringify (body)}</h5>
   </div>
   `;
   
  }  
  
  posts.innerHTML = newHTML;  
});

}