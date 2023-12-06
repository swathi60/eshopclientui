function namecheck() {
    var ename = document.getElementById("name").value;

    if (!/^[a-zA-Z]+$/.test(ename)) {
        document.getElementById("nameerror").innerHTML = "For name only alphabets are allowed";
    } else {
        document.getElementById("nameerror").innerHTML = ""; // Clear any previous error message
    }
}

function mailcheck() {
    var ename = document.getElementById("mail").value;
    var emailpattern=/^[a-zA-z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;
    if(!emailpattern.test(ename)){
        document.getElementById("mailerror").innerHTML="Enter valid email";
    }else{
        document.getElementById("mailerror").innerHTML="";
    }
}

function pwcheck(){
    var pw= document.getElementById("pw").value;
    var password= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/;
    if(!password.test(pw)){
        document.getElementById("pwerror").innerHTML="poor password";
    } else{
        document.getElementById("pwerror").innerHTML="";
    }
}

function cpwcheck(){
    var pw= document.getElementById("pw").value;
    var cpw= document.getElementById("cpw").value;

    if(pw!==cpw){
        document.getElementById("cpwerror").innerHTML="confirm password mismatched";
    }else{
        document.getElementById("cpwerror").innerHTML="";
    }
}

function mbcheck(){
    var mobile= document.getElementById("phone").value;
    var num=/^[6-9][0-9]{9}$/;
    if(!num.test(mobile)){
        document.getElementById("mberror").innerHTML="invalid mobile number";
    }else
    {document.getElementById("mberror").innerHTML="";}
}

function register(){
    var n1=document.getElementById("name").value;
    var n2=document.getElementById("mail").value;
    var n3=document.getElementById("pw").value;
    var n4=document.getElementById("cpw").value;
    var n5=document.getElementById("phone").value;

    if(n1===""|| n2===""|| n3===""|| n4===""|| n5===""){
        alert("please fill all required * fields"); 
        document.getElementById("regis").disabled=true;
    } else{ var t1 = 1; }

    var ne1=document.getElementById("nameerror").textContent;
    var ne2=document.getElementById("mailerror").textContent;
    var ne3=document.getElementById("pwerror").textContent;
    var ne4=document.getElementById("cpwerror").textContent;
    var ne5=document.getElementById("mberror").textContent;

    if(ne1 || ne2 || ne3 || ne4 || ne5){
        alert("please correct the errors before register");
        document.getElementById("regis").disabled=true;
    }else {var t2 = 1; document.getElementById("regis").disabled=false;}

    
    var check= document.getElementById("check");
    if(!check.checked){
        document.getElementById("checkerror").innerHTML= '<span style="color:red;">you must agree for T&C</span>'; 
        document.getElementById("regis").disabled=true;
    }
    else{
        document.getElementById("checkerror").innerHTML=" "; var t3 = 1; 
        document.getElementById("regis").disabled=false;
    }

    if(t1 && t2 && t3){ console.log("r1 ok");
        document.getElementById("regis").disabled=false;
        console.log("r2 ok");
        
          alert("Registered successfully");
    }
    

}

