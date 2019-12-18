$(document).ready(function() {
    $.getJSON('/json/list.json', getList);
});

function getList(data) {
    console.log(data);
}
