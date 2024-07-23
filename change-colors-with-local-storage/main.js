document.body.classList.add(localStorage.getItem("pageColor") || 'red');

var el = document.querySelectorAll('.color-switcher li');
var classesList = [];

for (var i = 0; i < el.length; i++) {
    classesList.push(el[i].getAttribute("data-color"));

    el[i].addEventListener(
        "click",
        function(){
            document.body.classList.remove(...classesList);
            document.body.classList.add(this.getAttribute("data-color"));
.
            localStorage.setItem("pageColor",this.getAttribute("data-color"));
    }, false);....main hgf

}
//////
////////////
'''''''''''
..............
,,,,,,,,,,,,,
.............
///////////

.container {
    width: 375px;
    height: 525px;
    margin-left: 350px;
    margin-top: 65px;
    background-color: yellow;
    padding-left: 30px;
}
#height, #weight {
    width: 150px;
    height: 25px;
    margin-top: 30px;
}

#weight-guide{
    margin-left: 75px;
    margin-top: 25px;
}
///////////
///////////////////////////////////
/////////////////////////////////
//////////////////////
///////////////////////////
