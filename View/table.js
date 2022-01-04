function draw_table() {
    $("#results").empty();
    $.getHTMLuncached = function (url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function (html) {
                $("#results").append(html);
                select_row();
            }
        });

    };
    $.getHTMLuncached("/get/html");
};

function add_movie(){
    $("body").on("click", ".insertRowBtn", function () {
        
    });
}

function delete_movie() {
    $("body").on("click", ".deleteBtn", function () {
        if(confirm("Are you sure you want to remove this?"))
        $(this).parents('tr').remove();
    });
};

$(document).ready(function () {
    draw_table();
    delete_movie();
});