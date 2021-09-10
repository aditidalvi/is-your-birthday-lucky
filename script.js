var date = document.querySelector('#date');

var number = document.querySelector('#number');

var check = document.querySelector('#check');

var output = document.querySelector('#output')

check.addEventListener("click",clickEventHandlers);

function clickEventHandlers(){
    if (date.value === "" || number.value === "" || number.value <= 0){
        output.innerText = "Please enter valid details"
    }
    else{
        clickEventHandler();
    }
}

function show1(){
    document.getElementById('privacy').style.display = "none";
}

function show2(){
    document.getElementById('privacy').style.display = "block";
}


function clickEventHandler(){

    console.log(number.value);
    console.log(date.value);
    var a =  date.value.replace("-", "");
    var b = a.replace("-","");
    var sum = 0;
    console.log(b);
    while (b!=0){
        console.log(b/10);
        console.log(b%10);
        c = b%10;
        b = Math.floor(b/10);
        sum = sum + c;
    }

    console.log(sum);
    
    if(number.value == sum){
        output.innerText = "Yayy!! Your birthday is lucky 🥳"
    }
    else{
        output.innerText = "Oops!! Your birthday is not lucky number!! ☹️"
    }
    
}

