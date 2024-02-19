function beforesubmit(){
    let inputdate = document.querySelector(".inputdate");  // Selects the first element with class "example"
    let outputdate = document.querySelector(".outputdate");
    console.log(inputdate.value);

    let formatdate = new Date(inputdate.value).toLocaleDateString("en-AU");
    outputdate.value = formatdate;
}