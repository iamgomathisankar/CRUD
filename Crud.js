

var nrow = null;
var myarr = []
var counter = 1;



function add() {
  var uname;
  var age;
  var address;
  var email;
  var pnum;
  uname = document.getElementById("name").value
  console.log(uname)
  age = document.getElementById("age").value
  console.log(age)

  address = document.getElementById("address").value

  console.log(address)
  email = document.getElementById("email").value
  pnum = document.getElementById("pnum").value

  var obj1 = { username: uname, age: age, address: address, email: email, pnum: pnum }
  console.log(obj1)


  myarr.push(obj1)


  console.log(myarr)

  var table = document.getElementById("table");
  var addrow = table.insertRow(counter++);
  var namecell = addrow.insertCell(0);
  var emailcell = addrow.insertCell(1);
  var addresscell = addrow.insertCell(2);
  var agecell = addrow.insertCell(3);
  var pnumcell = addrow.insertCell(4);
  var action = addrow.insertCell(5);

  namecell.innerHTML = uname;
  emailcell.innerHTML = email;
  addresscell.innerHTML = address;
  agecell.innerHTML = age;
  pnumcell.innerHTML = pnum;

  action.innerHTML = "<button type='button' class='btn btn-secondary' onclick='edit(this)' id='test'>Edit</button>"



  document.getElementById("nform").reset();

}

function cancel() {
  document.getElementById("nform").reset();
}

function edit(td) {

  nrow = td.parentElement.parentElement;
  console.log(nrow)

  document.getElementById("name").value = nrow.cells[0].innerHTML;
  document.getElementById("email").value = nrow.cells[1].innerHTML;
  document.getElementById("address").value = nrow.cells[2].innerHTML;
  document.getElementById("age").value = nrow.cells[3].innerHTML;
  document.getElementById("pnum").value = nrow.cells[4].innerHTML;



  document.getElementById("add").style.visibility = 'hidden'
  document.getElementById("clr").style.visibility = 'hidden'

  document.getElementById("uplodebtn").innerHTML = "<button type='button' class='btn btn-secondary' onclick='upl()'>Update</button>" + " " + "<button type='button' class='btn btn-secondary' onclick='del()'>Delete</button>";
}


function upl() {

  document.getElementById("uplodebtn").innerHTML = "<button type='button' class='btn btn-secondary' onclick='add()' id='add'>Add</button>" + " " + "<button type='button' class='btn btn-secondary' onclick='clear()' id='clr'>Cancel</button>";

  nrow.cells[0].innerHTML = document.getElementById("name").value;
  nrow.cells[1].innerHTML = document.getElementById("email").value
  nrow.cells[2].innerHTML = document.getElementById("address").value
  nrow.cells[3].innerHTML = document.getElementById("age").value;
  nrow.cells[4].innerHTML = document.getElementById("pnum").value;
  nrow.cells[5].innerHTML = "<button type='button' class='btn btn-secondary' onclick='edit(this)' id='test'>Edit</button>"

  document.getElementById("nform").reset();

}


function del() {


  document.getElementById("uplodebtn").innerHTML = "<button type='button' class='btn btn-secondary' onclick='add()'>Add</button>" + " " + "<button type='button' class='btn btn-secondary' onclick='clear()'>Cancel</button>";

  document.getElementById("table").deleteRow(nrow.rowIndex);

  document.getElementById("nform").reset();

}






















