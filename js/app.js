const studentsList = document.getElementsByClassName("student-item");
const $page = $('.page');
const anchor = document.getElementsByTagName('a');
const $pageHeader = $('.page-header');
let pageNum = 1

showPage(pageNum,studentsList)
appendPageLinks(studentsList)

// creates a list of the 10 relevant students for the page argument and displays them on the page
function showPage(pageNum,studentsList){
    for(var i=0;i<studentsList.length; i++){
      studentsList[i].style.display = 'none';

      if (i>=((pageNum*10)-10) && i<(pageNum*10)){
        studentsList[i].style.display = 'block';
    }
  }
}

function appendPageLinks(studentsList){
  let pageCount = Math.ceil(studentsList.length/10); // calculates the page number
  //dynamically creating pagination
  let pagination = document.createElement('div');
  pagination.className = "pagination";
  let paginationUl = document.createElement('ul');
  pagination.appendChild(paginationUl);

  for(let i=1;i<=pageCount;i++){

    let paginationLi = document.createElement('li');
    let paginationA = document.createElement('a');

    paginationA.href = "#";
    paginationA.textContent = i;

    paginationLi.appendChild(paginationA);
    paginationUl.appendChild(paginationLi);

  }

  $page.append(pagination);
  anchor[0].className = 'active';

  //looping through the pageCount and creating an event listener for the page selected
  for (let i=0;i<pageCount;i++){
    anchor[i].addEventListener("click",function(){
      showPage(parseInt(this.textContent),studentsList);// parseInt(this.textContent) returns the value of the button pressed as integer

      for (let i=0;i<pageCount;i++){ //looping again and setting the classnames of the buttons to none
        anchor[i].className = "none";
      }
      this.className = "active";//setting the classname of the used button(this) to active
    })
  }
}

//dynamically creating the search bar
let newDiv = document.createElement('div');
newDiv.className = "student-search";

let newInput = document.createElement('input');
newInput.placeholder = "Search for students...";

let newButton = document.createElement('button');
newButton.textContent = "Search";

newDiv.appendChild(newInput);
newDiv.appendChild(newButton);
$pageHeader.append(newDiv);


function searchList(){

    const searchValue = document.getElementsByTagName('input')[0].value;
    console.log(searchValue)
    searchListA = [];

    for(let i=0;i<studentsList.length;i++){
      student = document.getElementsByClassName('student-item')[i];
      studentName = document.getElementsByTagName('h3')[i].textContent.toLowerCase();
      studentEmail = document.getElementsByClassName('email')[i].textContent.toLowerCase();

      if (studentName.includes(searchValue) || studentEmail.includes(searchValue)){
        searchListA.push(student);
     }
   }
   if (searchListA.length === 0){
     console.log("0")
   }else{
     console.log(searchListA)

   }
}


$('button').click(function(){
    searchList()
})
