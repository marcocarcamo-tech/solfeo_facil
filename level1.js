let data_base = readText("./level1.json")
let interpreter_bp = JSON.parse(data_base)


chooseSheet(0);


let totalElements = [];
let sheetCounter = 0;
let isLastEement;


totalElements = Object.keys(interpreter_bp["explanation"]).length;
console.log(totalElements)

function changeSheet(elementId) {
    

    if (document.getElementById("button1").id == elementId) {
        sheetCounter++;
          
    } else if (document.getElementById("button2").id == elementId) {
        sheetCounter--;
    }

    if(sheetCounter === totalElements-1) {
        
        isLastEement = true;
        select_id("button1").style.display = "none";
        select_id("button3").style.display = "block";
        
        console.log("You are on the last element")
    } else if (sheetCounter <= totalElements){
        select_id("button1").style.display = "block";
        select_id("button3").style.display = "none";
    }
    chooseSheet(sheetCounter);
    
    
}

function chooseSheet(n) {
    
    sheet = interpreter_bp["explanation"][n]
    select_id("container__title").innerHTML = sheet.title
    select_id("container__explanation").innerHTML = sheet.explanation
    select_id("container__image--explanation").setAttribute("src", sheet.image)
    style("container__image--explanation").objectFit = sheet.object_fit;
    
    
    
}


function select_id(id) {
    return document.getElementById(id)
}

function style(id) {
    return select_id(id).style
}

function readText(localRoute) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", localRoute, false);
    xmlhttp.send();

    if(xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }

    return texto;
}