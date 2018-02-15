const studentsList = document.getElementsByClassName("student-item");
const $page = $('.page');
const anchor = document.getElementsByTagName('a');
pageNum = 1
showPage(pageNum,studentsList)


function showPage(pageNum,studentsList){
    for(var i=0;i<studentsList.length; i++){
      studentsList[i].style.display = 'none';
      if (i>=((pageNum*10)-10) && i<(pageNum*10)){
        studentsList[i].style.display = 'block';
    }
  }
}

function appendPageLinks(studentsList){
  let pageCount = Math.ceil(studentsList.length/10);
  let pagination = document.createElement('div');
  pagination.className = "pagination";
  let paginationUl = document.createElement('ul');
  for(let i=1;i<=pageCount;i++){
    let paginationLi = document.createElement('li');
    let paginationA = document.createElement('a');
    paginationA.href = "#";
    paginationA.textContent = i;
    paginationLi.appendChild(paginationA);
    paginationUl.appendChild(paginationLi);
  }
  pagination.appendChild(paginationUl);
  $page.append(pagination);
  anchor[0].className = "active";

  for (let i=0;i<pageCount;i++){
    anchor[i].addEventListener("click",function(){
      showPage(parseInt(this.textContent),studentsList);

      for (let i=0;i<pageCount;i++){
        anchor[i].className = "";
      }
      this.className = "active";
    })
  }
}
appendPageLinks(studentsList)








// pageCount = ceil(studentsList/10);
// let newDiv = document.createElement('div');
// newDiv.className = "student-search";
// let newInput = document.createElement('input');
// newInput.placeholder = "Search for students...";
// let newButton = document.createElement('button');
// newButton.textContent = "Search";
