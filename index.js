let div = document.createElement("div");
let innerdiv = document.createElement("div");
let img = document.createElement("img");
let college = document.createElement("span");
let collegediv = document.createElement("div");
let college1 = document.createElement("span");
let college2 = document.createElement("span");
let namee = document.createElement("h2");
let namediv = document.createElement("div");
let csediv = document.createElement("div");
let cse = document.createElement("span");
let cse1 = document.createElement("span");
let cse2 = document.createElement("span");
let branch = document.createElement("h2");
let rollno = document.createElement("h1");

function addDiv() {
  div.style.height = "300px";
  div.style.width = "400px";
  div.style.border = "2px solid black";
  div.style.borderRadius = "10px";
  div.style.marginTop = "15px";
  div.style.backgroundImage =
    "url(https://www.solidbackgrounds.com/images/1920x1080/1920x1080-navy-blue-solid-color-background.jpg)";
  div.style.backgroundSize = "40%";
  div.style.backgroundPosition = "top";
  div.style.backgroundRepeat = "repeat-x";
  document.body.append(div);
  innerdiv.style.height = "150px";
  innerdiv.style.width = "130px";
  innerdiv.style.border = "2px solid black";
  innerdiv.style.marginLeft = "10px";
  innerdiv.style.marginTop = "120px";
  div.append(innerdiv);
  img.setAttribute("src", "./sumanthphoto.jpg");
  img.style.height = "150px";
  img.style.width = "130px";
  innerdiv.append(img);
  div.append(collegediv);
  college.innerHTML = "Vel Tech";
  college.style.fontSize = "22px";
  college.style.fontFamily = "calibri";
  college.style.margin = "5px";
  college.style.padding = "10px";
  college.style.textAlign = "center";
  college.style.color = "white";
  collegediv.append(college);
  div.append(collegediv);
  collegediv.style.marginTop = "-260px";
  collegediv.style.textAlign = "center";
  college1.innerHTML = "Rangarajan Dr.Sagunthala R&D Institute of Science and Technology";
  college1.style.fontSize = "18px";
  college1.style.fontFamily = "calibri";
  college1.style.margin = "5px";
  college1.style.textAlign = "center";
  college1.style.color = "white";
  college1.style.display = "block";
  collegediv.append(college1);
  college2.innerHTML = "Madhurawada Visakhapatnam-48";
  college2.style.fontSize = "12px";
  college2.style.fontFamily = "calibri";
  college2.style.margin = "5px";
  college2.style.textAlign = "center";
  college2.style.color = "white";
  college2.style.display = "block";
  collegediv.append(college2);
  namee.innerHTML = "G.SUMANTH";
  namee.style.fontFamily = "calibri";
  namee.style.fontSize = "25px";
  namee.style.marginTop = "50px";
  namee.style.marginLeft = "200px";
  div.append(namee);
  branch.innerHTML = "B.Tech";
  branch.style.fontFamily = "calibri";
  branch.style.fontSize = "25px";
  branch.style.marginTop = "20px";
  branch.style.marginLeft = "210px";
  div.append(branch);
  rollno.innerHTML = "VTU-17284";
  rollno.style.fontFamily = "calibri";
  rollno.style.fontSize = "25px";
  rollno.style.marginTop = "20px";
  rollno.style.marginLeft = "190px";
  div.append(rollno);
  csediv.append(cse);
  csediv.style.backgroundColor = "grey";
  csediv.style.height = "210px";
  csediv.style.width = "65px";
  csediv.style.marginLeft = "335px";
  csediv.style.marginTop = "-217px";
  csediv.style.borderBottomRightRadius = "10px";
  csediv.style.backgroundPosition = "right";
  csediv.style.backgroundRepeat = "repeat-y";
  div.append(csediv);
  cse.innerText = "C";
  cse.style.fontSize = "45px";
  cse.style.color = "white";
  cse.style.marginLeft = "15px";
  cse.style.marginTop = "20px";
  cse.style.fontFamily = "calibri";
  cse.style.fontWeight = "bold";
  csediv.append(cse1);
  cse1.innerText = "S";
  cse1.style.fontSize = "45px";
  cse1.style.color = "white";
  cse1.style.marginLeft = "15px";
  cse1.style.marginTop = "20px";
  cse1.style.display = "block";
  cse1.style.fontFamily = "calibri";
  cse1.style.fontWeight = "bold";
  csediv.append(cse2);
  cse2.innerText = "E";
  cse2.style.fontSize = "45px";
  cse2.style.color = "white";
  cse2.style.marginLeft = "15px";
  cse2.style.marginTop = "20px";
  cse2.style.display = "block";
  cse2.style.fontFamily = "calibri";
  cse2.style.fontWeight = "bold";
}