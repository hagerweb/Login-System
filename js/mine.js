// >>>>>>>>>>>>>>>>>> Sign Up <<<<<<<<<<<<<<<<<<<<<<<<<<
var users = [];
var user;
var currrentUser;
var regiserName = document.getElementById("signinName")
var regiserEmail = document.getElementById("signinEmail")
var regiserPassword = document.getElementById("signinPassword")

if (localStorage.getItem("ourUsers") != null){
    users = JSON.parse(localStorage.getItem("ourUsers"));
    
}
function sign(){
    if(regiserName.value ==""&& regiserEmail.value =="" && regiserPassword == ""){
        document.getElementById("succss").classList.replace("d-block" , "d-none");
        document.getElementById("exist").classList.replace("d-block" , "d-none");
        document.getElementById("error").innerHTML = " Please Full All Inputs" ;
        document.getElementById("error").classList.replace("d-none" , "d-block");
        return;
    }else{
        if( emailExist()== "notexist"){
            document.getElementById("exist").classList.replace("d-block" , "d-none");
            document.getElementById("error").classList.replace("d-block" , "d-none");
            user = {
            name : regiserName.value ,
            email: regiserEmail.value,
            password : regiserPassword.value ,
    
        }
         users.push(user);
          localStorage.setItem("ourUsers" , JSON.stringify(users));
          document.getElementById("succss").innerHTML = " Success" ;
          document.getElementById("succss").classList.replace("d-none" , "d-block");
         clearInputs();

         console.log(users);
       
   
         
            
    
        
            
        }
          


    }
   

}
// =============== Clear 

function clearInputs(){
    document.getElementById("signinName").value = "";
    document.getElementById("signinEmail").value = "";
    document.getElementById("signinPassword").value = "";
}
// ================== Email Exist 
function emailExist(){

    for(var i=0 ; i<users.length ;i++){

        if(users[i].email == regiserEmail.value){
            
            document.getElementById("error").classList.replace("d-block" , "d-none");
            document.getElementById("exist").innerHTML = " Email already Exist " ;
            document.getElementById("exist").classList.replace("d-none" , "d-block");
            return "exist";
                  }
                  
     
    }
    return "notexist";
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>> Login <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

function login(){

    if(loginEmail.value!="" && loginPassword.value!=""){
        for(var i=0 ; i<users.length ; i++){
            if(users[i].email== loginEmail.value && users[i].password== loginPassword.value){
                document.getElementById("emailerror").classList.replace("d-block" , "d-none");
                document.getElementById("succss").classList.replace("d-none" , "d-block");
                document.getElementById("succss").innerHTML = " Success" ;
                 
                localStorage.setItem("currentUser" ,users[i].name)
                window.location.href = "./home.html"

            }else{
                document.getElementById("emailerror").classList.replace("d-none" , "d-block");
                document.getElementById("emailerror").innerHTML = " Email OR Password Not Correct" ;
                return;
                
            

            }

        }
        
    }else{
        document.getElementById("emailerror").classList.replace("d-none" , "d-block");
        document.getElementById("emailerror").innerHTML = "  All Inputs is Required" ;
        return;
       

    }
    
    
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ______________________ Home ____________________________________________

var userName =  document.getElementById("home") ;
if(userName!=null){
    userName.innerHTML = `Welcome  ${localStorage.getItem("currentUser")}`

}
// __________________________________________________________________________

// ----------------------------- Log Out ------------------------------------

function logOut(){
    
    localStorage.removeItem("currentUser");

}
// ---------------------------------------------------------------------------