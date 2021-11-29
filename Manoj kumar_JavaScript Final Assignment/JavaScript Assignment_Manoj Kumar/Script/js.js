function validation()
{
    var username = document.getElementById("name");
    var usernamev=document.getElementById("lbuser");
    var lastname=document.getElementById("father");
    var lastnamev=document.getElementById("lastname");
    var email=document.getElementById("email");
    var emailv=document.getElementById("emailid");
    var dob=document.getElementById("dob");
    var dobv=document.getElementById("DOB");
    var mobilenumber=document.getElementById("num");
    var contactnumberv=document.getElementById("mobile");
    var address1=document.getElementById("add");
    var addressv=document.getElementById("address");
    var address2=document.getElementById("add1");
    var address2v=document.getElementById("adress1");
    var city=document.getElementById("city");
    var cityv=document.getElementById("CITY");
    var zip1=document.getElementById("zip");
    var zip1v=document.getElementById("pincode")
    var pincode2=document.getElementById("zip2");
    var zipcode2v=document.getElementById("PINCODE")
   
    if(username.value.trim()==""){
        username.style="border:2px solid red";
        usernamev.style.visibility="visible";

    }
    else{
        username.style="border:2px solid black";
        usernamev.style.visibility="hidden";
    }
    if(lastname.value.trim()==""){
        lastname.style="border:2px solid red";
        lastnamev.style.visibility="visible";

    }
    else{
        lastname.style="border:2px solid black";
        lastnamev.style.visibility="hidden";

    }
    if(email.value.trim()==""){
        email.style="border:2px solid red";
        emailv.style.visibility="visible";

    }
    else{
        email.style="border:2px solid black";
        emailv.style.visibility="hidden";
    }
    if(dob.value.trim()==""){
        dob.style="border:2px solid red";
        dobv.style.visibility="visible";

    }
    else{
        dob.style="border:2px solid black";
        dobv.style.visibility="hidden";
    }
    if(mobilenumber.value.trim()==""){
        mobilenumber.style="border:2px solid red";
        contactnumberv.style.visibility="visible";

    }
    else{
        mobilenumber.style="border:2px solid black";
        contactnumberv.style.visibility="hidden";
    }
    if(address1.value.trim()==""){
        address1.style="border:2px solid red";
        addressv.style.visibility="visible";

    }
    else{
        address1.style="border:2px solid black";
        addressv.style.visibility="hidden";
    }
    if(address2.value.trim()==""){
        address2.style="border:2px solid red";
        address2v.style.visibility="visible";

    }
    else{
        address2.style="border:2px solid black";
        address2v.style.visibility="hidden";
    }
   
    if(city.value.trim()==""){
        city.style="border:2px solid red";
        cityv.style.visibility="visible";

    }
    else{
        city.style="border:2px solid black";
        cityv.style.visibility="hidden";
    }
    if(zip1.value.trim()==""){
        zip1.style="border:2px solid red";
        zip1v.style.visibility="visible";

    }
    else{
        zip1.style="border:2px solid black";
        zip1v.style.visibility="hidden";
    }
    if(pincode2.value.trim()==""){
        pincode2.style="border:2px solid red";
        zipcode2v.style.visibility="visible";

    }
    else{
        pincode2.style="border:2px solid black";
        zipcode2v.style.visibility="hidden";
    }    
}
function numberfunction(){
    var mobilenumber=document.getElementById("num");
    var contactnumberv=document.getElementById("mobile");
    var regx=/^[7-9]([0-9]{9})$/;
    if(regx.test(mobilenumber.value)){
        contactnumberv.innerHTML="Mobile number should be 10 numbers"
        contactnumberv.style.visibility="visible";
        mobilenumber.style.border="1px solid red";
        numberfunction();
    }
    else{
        contactnumberv.innerHTML="vaild";
        contactnumberv.style.visibility="hidden";
        mobilenumber.style.border="1px solid black";
    }
}
    

function pincodefunction(){
    var pinregx=/^[6-9]([0-9]{5})$/
    var zip1=document.getElementById("zip");
    var zip1v=document.getElementById("pincode")
    
    if(pinregx.test(zip1)){
        zip_valid.innerHTML="";
        zip_valid.style.visibility="hidden";
        zip.style.border="1px solid black";
    }
    else{
     zip_valid.innerHTML="invalid zipcode";
    zip_valid.style.visibility="visible";
    zip.style.border="1px solid red";
}
}
function DOBfunction(){
    var dobregx=/^([0-9]{2})([0-9]{2})([0-9]{4})$/
    var dob=document.getElementById("dob");
    var dobv=document.getElementById("DOB");
    
    if(dobregx.test(dob.value)){
        zip_valid.innerHTML="invalid zipcode";
        zip_valid.style.visibility="visible";
        zip.style.border="1px solid red";
    }
        
    else{
    zip_valid.innerHTML="";
    zip_valid.style.visibility="hidden";
    zip.style.border="1px solid black";
}
}
function photofunction(){
    var photo=document.getElementById("photo");
    console.log(photo);
}
