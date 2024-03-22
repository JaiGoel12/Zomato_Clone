let inputEmail=document.getElementById('Email');
let inputPassword=document.getElementById('Password');
let java=document.getElementById('signin');

let btnLogin=document.getElementById('btn');

btnLogin.addEventListener('click',()=>{
    let Email=userinput.value;
    let Password=passinput.value;
    if(Email==''||Password==''){
        alert('Please fill all the fields');
    }
    else{
        if(Email=='jai' && Password=='jai'){
            alert('Login Successfull');
            userinput.value='';
            passinput.value='';
            window.location.href='index.html';
            // loginForm.reset();
        }
        else{
            alert('Invalid Credentials');
            userinput.value='';
            passinput.value='';
            loginForm.reset();
            window.location.href='login.html';
        }
    }
})