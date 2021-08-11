function select_id(id) {
    return document.getElementById(id)
}

function style(id) {
    return select_id(id).style
}

function readText(localRoute) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();

    if(xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }

    return texto;
}