let captchacheck = false;
function beforesubmit(event){
    if(captchacheck){
        let inputdate = document.querySelector(".inputdate");  // Selects the first element with class "example"
        let outputdate = document.querySelector(".outputdate");
        console.log(inputdate.value);
    
        let formatdate = new Date(inputdate.value).toLocaleDateString("en-AU");
        outputdate.value = formatdate;
    } else {
        alert("plz chk recaptcha");
        event.preventDefault(); //this immediately stop submission of form
    }
    }


function timestamp() 
{ var response = document.getElementById("g-recaptcha-response"); 
if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
        document.getElementsByName("captcha_settings")[0].value
        );
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = 
        JSON.stringify(elems); 
    } 
} 
setInterval(timestamp, 500); 

function captchasuccess(){
    captchacheck = true;
}