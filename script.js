// CRUD => Create, Read, Update, Delete

//Global variables
var row = null;

function Submit(){
    var dataEnter = retrieveData();
    let readData = readDataFromLocalStorage(dataEnter);

    if(dataEnter == false){
        msg.innerHTML = `<h3 style="color:red">Please Enter Data🙄</h3>`
    }
    else {
        if(row == null){
            insert(readData);
            msg.innerHTML = `<h3 style="color:rgb(31, 215, 55)">Data Inserted👍</h3>`
        } else {
            update();
            msg.innerHTML = `<h3 style="color:orange">Data Updated👌</h3>`
        }
    }
    document.getElementById("form").reset();
    
}

 //CREATE
// retrieving data from form
function retrieveData(){
    var name1 = document.getElementById("name").value;
    var job = document.getElementById("job").value;
    var exp = document.getElementById("exp").value;

    var arr = [name1, job, exp];
    if(arr.includes("")){
        return false;
    }
    else{
        return arr;
    }
    
}

//Data in localStorage
function readDataFromLocalStorage(dataEnter){
    // String data from local storage 
    var n = localStorage.setItem("Name",dataEnter[0]);  //Name[0]
    var j = localStorage.setItem("Job",dataEnter[1]);   //Job[1]
    var e = localStorage.setItem("Experience",dataEnter[2]); //Exp[2]

    //getting data from table

    var n1 = localStorage.getItem("Name", n)
    var j1 = localStorage.getItem("Job", j)
    var e1 = localStorage.getItem("Experience", e)

    var arr = [n1, j1, e1]
    return arr;
}

//Insert the data in Table
function insert(readData){
    // let table = document.getElementById("table");
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onclick="edit(this)">Edit</button>
                                   <button onclick="remove(this)">Delete</button>`;
}

//Edit
function edit(td){
 row = td.parentElement.parentElement;
 document.getElementById("name").value = row.cells[0].innerHTML;
 document.getElementById("job").value = row.cells[1].innerHTML;
 document.getElementById("exp").value = row.cells[2].innerHTML;
}

//UPDATE 
function update(){
    row.cells[0].innerHTML =  document.getElementById("name").value;
    row.cells[1].innerHTML =  document.getElementById("job").value;
    row.cells[2].innerHTML =  document.getElementById("exp").value;
    row = null;
}

//Delete
function remove(td){
 var ans = confirm(`Are you sure to delete this record`);
 if(ans == true) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
 }
 
}
