

console.log("Frontend JS ishga tushdi");


function itemTemplate(item) {
    return `<li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text"> ${item.reja} </span>
    <div>
        <button 
        data-id="${item._id}" 
        class="edit-me btn btn-secondary btn-sm mr-1">
            Edit
        </button>
        <button 
        data-id="${item._id}"
        class="delete-me btn btn-danger btn-sm">Delete</button>
    </div>
</li>`;
}


let createField = document.getElementById("create-field");

document.getElementById('create-form').addEventListener("submit", function (e){
    e.preventDefault();
    axios
    .post("/create-item",{ reja : createField.value })
    .then((response) => {
        document
        .getElementById('item-list')
        .insertAdjacentHTML("beforeend",itemTemplate(response.data));
        createField.value = '';
        createField.focus();
    })
    .catch((err) => {
        console.log('Please, try again');

    });
}); 

document.addEventListener('click', function(e) {
    
    //delete
    
    if (e.target.classList.contains('delete-me')) {
        if(confirm('are u sure ?'))  {
            axios
            .post('delete-item',{ id : e.target.getAttribute('data-id') })
            .then((respose) => {
                console.log(respose.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) =>{
                console.log('Please, try again');

            });
        }
    }
    //edit
    if (e.target.classList.contains('edit-me')) {
        let userInput = prompt(
            "Edit",
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
        );
        if (userInput) {
            axios
            .post("/edit-item",{
                id: e.target.getAttribute("data-id"),
                new_input : userInput,
            })
            .then((responce) => {
                console.log(responce.data);
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            })
            .catch((err) => {
                console.log("Please, try again");

            });
        }
        
    }

});

document.getElementById('clean-all').addEventListener("click",function(){
    axios
    .post('/delete-all', {delete_all: true}).then(response=>{
        alert(response.data.state);
        document.location.reload();
    })
});