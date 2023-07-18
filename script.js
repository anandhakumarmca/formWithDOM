//Create FirstName Label
var label = createlabel("lable","for","firstname","First Name:");
document.body.append(label);
//Create space using space function
space();
//Create FistName input
var input = createInput("input","type","text","id","firstname","value","Enter your First Name");
document.body.append(input);
//Create 2 LineBreak using LineBreak function
lineBreak();
lineBreak();
//Create LastName Label
var label = createlabel("lable","for","lastname","Last Name:");
document.body.append(label);
//Create space using space function
space();
//Create LastName input
var input = createInput("input","type","text","id","lastname","value","Enter your Last Name");
document.body.append(input);
//Create 2 LineBreak using LineBreak function
lineBreak();
lineBreak();
//Create E-mail Label
var label = createlabel("lable","for","email","E-Mail:");
document.body.append(label);
//Create space using space function
space();
//Create E-mail input
var input = createInput("input","type","text","id","email","value","Enter your E-Mail Id");
document.body.append(input);
//Create 2 LineBreak using LineBreak function
lineBreak();
lineBreak();
//Create PhoneNumber Label
var label = createlabel("lable","for","phone","Phone Number:");
document.body.append(label);
//Create space using space function
space();
//Create PhoneNumber Input
var input = createInput("input","type","phone","id","phone","value","Enter your Phone Number");
document.body.append(input);
//Create 2 LineBreak using LineBreak function
lineBreak();
lineBreak();
//Create Submit Button
var submitButton = createButton("input","type","button","id","submit","value","Submit","onclick","display()");
document.body.append(submitButton);
//Create space using space function
space();
//Create Clear Button
var clearButton = createButton("input","type","button","id","clear","value","Clear","onclick","cleartext()");
document.body.append(clearButton);
//Create 2 LineBreak using LineBreak function
lineBreak();
lineBreak();
//Create createlable function
function createlabel(tagname,attrname,attrvalue,content){
    var label = document.createElement(tagname);
    label.innerHTML = content;
    label.setAttribute(attrname, attrvalue);
    return label;
}
//Create createInput function
function createInput(tagname,typename,typevalue,idname,idvalue,valueAttr,value){
    var input = document.createElement(tagname);
    input.setAttribute(typename, typevalue);
    input.setAttribute(idname, idvalue);
    input.setAttribute(valueAttr, value);
    return input;
}
//Create createButton function
function createButton(tagname,typename,typevalue,idname,idvalue,valueAttr,value,functionAttr,functionValue){
    var input = document.createElement(tagname);
    input.setAttribute(typename, typevalue);
    input.setAttribute(idname, idvalue);
    input.setAttribute(valueAttr, value);
    input.setAttribute(functionAttr, functionValue);
    return input;
}
//Create lineBreak function
function lineBreak(){
    var br = document.createElement("br");
    document.body.append(br);
    return br;
}
//Create space function
function space(){
    var sp = document.createTextNode(" ");
    document.body.append(sp);
    return sp;
}
//Create display function
function display(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let text = "Hello, "+firstname+" "+lastname+" you form is submitted with E-mail: "+email+" & Phone: "+phone+". Thank you!!!";
    var labelDisplay = createlabel("lable","id","text",text);
    document.body.append(labelDisplay);
    return labelDisplay;
}
//Create cleartext function
function cleartext(){
    labelClear = document.getElementById("text");
    let parentElement = labelClear.parentNode;
    parentElement.removeChild(labelClear);
}



