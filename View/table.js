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

function delete_movie() {
    $("body").on("click", ".deleteBtn", function () {
        if (confirm("Are you sure you want to remove this?"))
            $(this).parents('tr').remove();
    });
};

function insertNewMovie() {
    
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
    // event.preventDefault();
    var table = document.getElementById("moviesTable").getElementsByTagName('tbody')[0];
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
    cell6.innerHTML = `<button class="deleteBtn">Delete</button>`

}

$(document).ready(function () {
    draw_table();
    delete_movie();
});