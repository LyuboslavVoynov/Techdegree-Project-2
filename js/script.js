//creating constants
const studentsL = document.getElementsByClassName("student-item");
const page = document.querySelector('.page');
const anchor = document.getElementsByTagName('a');
const pageHeader = document.querySelector('.page-header');



// creates a list of the 10 relevant students for the page argument and displays them on the page
function showPage(pageNum,studentsList){
    for(var i=0;i<studentsL.length; i++){ //looping through the list of students
      studentsL[i].style.display = 'none';// hiding all
   }
   for(var i=0;i<studentsList.length;i++){//looping through the studentsList
     if (i>=((pageNum*10)-10) && i<(pageNum*10)){//checking the studentsList argument and displays relevant stdents
       studentsList[i].style.display = 'block';
    }
  }
}

function appendPageLinks(studentsList){

  let pageCount = Math.ceil(studentsList.length/10); // calculates the page number
 // checks for old pagination and deletes it
 let pageDiv = document.querySelector(".pagination");
  if (pageDiv) {
      pageDiv.parentNode.removeChild(pageDiv);
  }
  //dynamically creating pagination
  let pagination = document.createElement('div');//creating pagination div
  pagination.className = "pagination";//setting the classname to pagination
   //checking for old pagination and removes it
  let paginationUl = document.createElement('ul');// creating pagination ul element
  pagination.appendChild(paginationUl);

  for(let i=1;i<=pageCount;i++){//creating the relevent number of  pagination buttons

    let paginationLi = document.createElement('li');
    let paginationA = document.createElement('a');

    paginationA.href = "#";
    paginationA.textContent = i;

    paginationLi.appendChild(paginationA);
    paginationUl.appendChild(paginationLi);

  }
  page.appendChild(pagination);//appends pagination to the page

  showPage(1,studentsList)

  //looping through the pagnation buttons and creating an event listener for the page selected
  for (let i=0;i<pageCount;i++){
    anchor[0].className = 'active';
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
newButton.setAttribute("id","button");
newButton.textContent = "Search";

newDiv.appendChild(newInput);
newDiv.appendChild(newButton);
pageHeader.appendChild(newDiv);


function searchList(){
    const searchValue = document.getElementsByTagName('input')[0].value;//obtaining the input value
    searchListA = [];//creating an empty array to hold the matched students

    for(let i=0;i<studentsL.length;i++){
      student = document.getElementsByClassName('student-item')[i];// student information
      studentName = document.getElementsByTagName('h3')[i].textContent.toLowerCase();//user name
      studentEmail = document.getElementsByClassName('email')[i].textContent.toLowerCase();//user email

      if (studentName.includes(searchValue) || studentEmail.includes(searchValue)){//checking if the the input value is in either email or name

        searchListA.push(student);// if the value is in either one , put the student in the searchListA array.

     }
   }

   if (searchListA.length === 0) {//if searchListA is empty, call appendPageLinks with an empty array
       appendPageLinks([]);
       // creating the "no students found " text and displaying it on the page
       let emptySearch = document.createElement("h2");
       emptySearch.textContent = "Sorry, no students were found ...";
       emptySearch.className = "empty"
       page.appendChild(emptySearch);

   } else {
     // call appendPageLinks with the stduents found
     appendPageLinks(searchListA)
     //checks for old empty search paragraphs and removes them
     let empty = document.querySelector('.empty');
     if(empty){
       empty.parentNode.removeChild(empty);
     }


   }

}

//creating event listener
document.getElementById("button").addEventListener("click", searchList);

//calling appendPageLinks with the student list as argument
appendPageLinks(studentsL);
