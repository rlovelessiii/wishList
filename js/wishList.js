$(document).ready(function() {
    $.getJSON('./json/list.json', getList);
});

function getList(data) {
    $.each(data, (key, value) => {
        let divID = key;
        $('#wish_list').append(
            $('<ul id="itemGroup' + divID + '" class="container">#' + divID + '</ul>')
        )
        $.each(value, (key, item) => {
            $('#itemGroup' + divID).append(
                $('<li><a href="' + item.url + '">' + item.name + '</a></li>')
            )
        })
    })
}
