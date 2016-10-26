$(document).ready(function () {
    $('.room').each(function () {
        doInput($(this));
        updateRoom($(this), $(this).html().match(/\d+\d+/)[0]);
    });

    $('.inputButton').click(function () {
        var input = $(this).closest("tr").children().children()[0];
        input.placeholder = "Temp " + input.value + "\xB0C";
        roomId = input.id.slice(0, input.id.length - 6);
        room = $('#' + roomId);
        updateRoom(room, input.value);
    });

    navigator.geolocation.getCurrentPosition(function (position) {
        var startPos = position;
        var pos = {
            latitude: startPos.coords.latitude,
            longitude: startPos.coords.longitude
        };
        var apiKey = "";

        $.ajax({
            'url': 'http://api.openweathermap.org/data/2.5/weather',
            'type': 'GET',
            'data': {
                'lat': pos.latitude,
                'lon': pos.longitude,
                'units': 'metric',
                'appid': apiKey,
            },
            'success': function (data) {
                var city = data.name;
                var temp = data.main.temp;
                var desc = data.weather[0].description;

                $('#city').append(" "+city);
                $('#temp').append(" "+temp);
                $('#desc').append(" "+desc);

            },

        });
    });
});

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
    room.html("Temp " + temp + "\xB0C")
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