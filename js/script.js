const studentsList = document.getElementsByClassName("student-item");
const $page = $('.page');
const anchor = document.getElementsByTagName('a');
const $pageHeader = $('.page-header');



// creates a list of the 10 relevant students for the page argument and displays them on the page
function showPage(pageNum,studentsList){
    students = document.getElementsByClassName("student-item"); // list of all students
    for(var i=0;i<students.length; i++){ //looping through the list of students
      students[i].style.display = 'none';// hiding all

      if (i>=((pageNum*10)-10) && i<(pageNum*10)){//if the students should be on the page - display them
        students[i].style.display = 'block';
    }
  }
}

function appendPageLinks(studentsList){
  let pageCount = Math.ceil(studentsList.length/10); // calculates the page number
  //dynamically creating pagination
  let pagination = document.createElement('div');//creating pagination div
  pagination.className = "pagination";//setting the classname to pagination
   //checking for old pagination and removes it
  if (document.querySelector(".pagination")) {
      let pageDiv = document.querySelector(".pagination");
      pageDiv.parentNode.removeChild(pageDiv);
  }

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

  $page.append(pagination);//appends pagination to the page
  showPage(1,studentsList)//displays the first Page
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

//calling appendPageLinks with the student list as argument
appendPageLinks(studentsList)


// function searchList(){
//     let $studentlist = $('.student-list')
//     $studentlist.hide()
//     const searchValue = document.getElementsByTagName('input')[0].value;//obtaining the input value
//     searchListA = [];//creating an empty array to hold the matched students
//
//     for(let i=0;i<studentsList.length;i++){
//       student = document.getElementsByClassName('student-item')[i];
//       studentName = document.getElementsByTagName('h3')[i].textContent.toLowerCase();//user name
//       studentEmail = document.getElementsByClassName('email')[i].textContent.toLowerCase();//user email
//
//       if (studentName.includes(searchValue) || studentEmail.includes(searchValue)){//checking if the the input value is in either email or name
//         console.log(student);
//         searchListA.push(student);// if the value is in either one , put the student in the searchListA array.
//      }
//    }
//    if (searchListA.length === 0){
//      console.log("0")
//    }else{
//      appendPageLinks(searchListA)
//      console.log(searchListA)
//
//
//
//    }
// }
//
// $('button').click(function(){
//     searchList()
// })
