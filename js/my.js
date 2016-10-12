rooms = $(".room");

for (i = 0; i < rooms.length; i++) {
    console.log(rooms[i].style.height)
    temp = rooms[i].innerHTML.match(/\d+\d+/)[0];
    console.log()
    if (temp > 25) {
        rooms[i].style.backgroundColor = 'rgba(255, 0, 0, .7)';
    }
    if (temp <= 25 && temp >= 18) {
        rooms[i].style.backgroundColor = 'rgba(0, 255, 0, .7)';
    }
    if (temp < 18) {
        rooms[i].style.backgroundColor = 'rgba(0, 0, 255, .5)';
    }
}


$(document).ready(function () {
    $('.room').each(function () {
        doInput($(this));
    })
})

function doInput(room) {
    inputTemplate = '<div><input id=' + room.attr('id') + 'input" type="number" placeholder="' + room.text() + '"><button>Change</button></div>';
    inputContainer = $("#inputContainer");
    inputContainer.append(inputTemplate);
    inputContainer.children('div').each(function () {
            $(this).click(function () {
                $(this).fadeOut('slow').fadeIn('slow');
            })
        }
    );
    console.log()
}
