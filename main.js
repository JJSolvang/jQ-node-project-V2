let noteArray = [];
let selectedType = "";

// define a constructor to create note objects
let NoteObject = function (pTitle, pYear, pType) {
    this.title = pTitle;
    this.year = pYear;
    this.type = pType;
}



document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {

        noteArray.push(new NoteObject(document.getElementById("title").value, document.getElementById("year").value, selectedType));
        console.log(noteArray);
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
    });
    

});



function createList() {
    
    // clear prior data


    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    noteArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.title + ":  " + element.year + "  " + element.type;
        myul.appendChild(li);
    });
};