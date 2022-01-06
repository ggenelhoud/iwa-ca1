//code taken from class
function draw_table() {
    $("#results").empty();
    $.getHTMLuncached = function (url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function (html) {
                $("#results").append(html);
            }
        });

    };
    $.getHTMLuncached("/get/html");
};

function add_movie() {
    $("body").on("click", ".insertRowBtn", function () {

    });
}

//https://hdtuto.com/article/jquery-delete-table-row-on-click-event-example
function delete_movie() {
    $("body").on("click", ".deleteBtn", function () {
        if (confirm("Are you sure you want to remove this?"))
            $(this).parents('tr').remove();
    });
};

//Insert function to add a new movie
//https://github.com/oshgodage/JavaScript-Crud-Operation/blob/main/script.js#L25-L38
function insertNewMovie() {
    //validation to make sure user fills in all the fields
    if (titleName.value == "" ||
        genreName.value == "" ||
        directorName.value == "" ||   
        studioName.value == "" ||
        yDate.value == "" )
    {
        alert("You MUST fill in ALL the fields!!!");
        document.formname.FirstName.focus();
        return false;
    }
    
    var table = document.getElementById("moviesTable").getElementsByTagName('tbody')[0];
    //Here we'll be getting the user input from each field, and we'll create an extra row and populate it with the user's input
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = titleName.value;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = genreName.value;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = directorName.value;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = studioName.value;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = yDate.value;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button class="deleteBtn">Delete</button>` //for each new row added, add the delete button too, giving delete button same class name so I don't have to duplicate code.


}

$(document).ready(function () {
    draw_table();
    delete_movie();
});