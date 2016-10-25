$(document).ready(function () {
    $('.room').each(function () {
        doInput($(this));
        updateRoom($(this), $(this).html().match(/\d+\d+/)[0]);
    })

    $('.inputButton').click(function () {
        var input = $(this).closest("tr").children().children()[0];
        input.placeholder = "Temp "+input.value+"\xB0C";
        roomId = input.id.slice(0, input.id.length - 6);
        room = $('#'+roomId);
        updateRoom(room, input.value);
    })
})

function doInput(room) {
    inputTemplate =
        '<tr>' +
            '<td>' +
                '<input id=' + room.attr('id') + 'input" type="number" placeholder="' + room.text() + '">' +
            '</td>' +
            '<td>' +
                '<button class="inputButton">Change</button>' +
            '</td>' +
        '</tr>';
    $("#inputContainer").append(inputTemplate);
}

function updateRoom(room, temp) {
    room.html("Temp "+temp+"\xB0C")
    if (temp > 25) {
        room.css('backgroundColor', 'rgba(255, 0, 0, .7)');
    }
    if (temp <= 25 && temp >= 18) {
        room.css('backgroundColor', 'rgba(0, 255, 0, .7)');
    }
    if (temp < 18) {
        room.css('backgroundColor', 'rgba(0, 0, 255, .5)');
    }
}