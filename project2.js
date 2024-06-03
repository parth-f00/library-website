function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type
}
let libraryForm=document.getElementById('libraryForm');
let tableBody=document.getElementById('tableBody');

function Display(){

}
Display.prototype.validate=function(book){
    if(book.name.length<2||book.author.length<2){
      return false;
    }
    else{
        return true;
    }
}

Display.prototype.show=function(type, displayMessage){
let message=document.getElementById('message');
message.innerHTML= `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>Messge:</strong> ${displayMessage}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">×</span>
</button>
</div>`;
setTimeout(function() {
    message.innerHTML=''
}, 2000);

}

Display.prototype.add=function(book){
let newString=`<tr>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.type}</td>
</tr>`;
tableBody.innerHTML+=newString
}

Display.prototype.clear=function(){
libraryForm.reset();
}


libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('successfull');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let computerProgramming = document.getElementById("cp");
    let superHeroes = document.getElementById('sh');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }

    else if (computerProgramming.checked) {
        type = computerProgramming.value;
    }

    else {
        type = superHeroes.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    let display=new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','your book has been successfully added')
    }
    else{
        display.show('danger',"can't be added");
    }
   e.preventDefault();
}