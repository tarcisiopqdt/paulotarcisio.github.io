//MENU
function openNav() {
    var x = document.getElementById("navigation");
    if (x.className ==="navigation"){
        x.className += " menujs";
        document.getElementById("threeline").src = '../img/fechar.png';
    }
    else{ 
        x.className ="navigation";
        document.getElementById("threeline").src = "../img/menu.png";

    }

}
