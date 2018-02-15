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

// I cant figure out how to display the student/s on the page
// function searchList(){

//     const searchValue = document.getElementsByTagName('input')[0].value; //obtaining the input value
//     console.log(searchValue)
//     searchListA = []; //creating an empty array to hold the matched students
//     studentone = document.getElementsByClassName('student-item')[0];
//     console.log(studentone)

//     for(let i=0;i<studentsList.length;i++){ //looping trough the student list
//       student = document.getElementsByClassName('student-item')[i];//
//       studentName = document.getElementsByTagName('h3')[i].textContent.toLowerCase();// user name
//       studentEmail = document.getElementsByClassName('email')[i].textContent.toLowerCase();// user email

//       if (studentName.includes(searchValue) || studentEmail.includes(searchValue)){ //checking if the the input value is in either email or name
//         searchListA.push(student); // if the value is in either one , put the student in the searchListA array.
//      }
//    }
//    if (searchListA.length === 0){
//      console.log("0")
//    }else{
//      searchList = searchListA[0]
//      appendPageLinks(searchListA)
//      showPage(pageNum,searchList)
//      console.log(searchList)
//      console.log(searchList.length)


//    }
// }


// $('button').click(function(){
//     let $pagination = $('.pagination');
//     let $studentlist = $('.student-list')
//     $pagination.hide()
//     $studentlist.hide()
//     searchList()
// })
