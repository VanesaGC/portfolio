var t, present;

function before() {
    if (present == 0) {
        select(galeria.length - 1);
    } else {
        select(present - 1);
    }

}

function next() {
    if (present == galeria.length - 1) {
        select(0);
    } else {
        select(present + 1);
    }


}

function generar_selector() {
    var selector = $("#select");

    selector.html("");

    galeria.forEach(function (elem, i) {
        selector.append("<a onClick='select(" + i + ")'><li><i class='material-icons select' id='select" + i + "'>panorama_fish_eye</i></li></a>");
    });


}

function select(i) {
    present = i;

    $("#photo").attr("src", "../images/" + galeria[i]);
    
    Materialize.fadeInImage('#photo');

    $("#photoModal").attr("src", "../images/" + galeria[i]);

    clearTimeout(t);
    t = setTimeout(function () {
        select((i + 1) % galeria.length);
    }, 3000);

    $(".select").text("panorama_fish_eye");

    $("#select" + i).text("lens");
}

$(function () {
    generar_selector();
    select(0);
    $("#photo").click(function () {
        clearInterval(t);
        
    });   

});