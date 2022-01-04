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


function delete_movie() {

    $("body").on("click", ".deleteBtn", function () {
        $(this).parents('tr').remove();
    });
};

$(document).ready(function () {
    draw_table();
    delete_movie();
});