$(document).ready(() => {
    $('.playBtn').click((e) => {
        const number = Math.floor(Math.random() * 6) + 1;
        $('#result').text(number);
        $(e.currentTarget).prop('disabled', true);
        
        let message = '';
        if (number === 6) {
            message = "hamplyo Waad baastey!🔥🎉";
        } else if (number === 1) {
            message = "sorry Waad dhacdey!😢";
        }
        
        $('#winner').text(message);
    });

    $('#resetBtn').click(() => {
        $('.playBtn').prop('disabled', false);
        $('#result').text('-');
        $('#winner').text('');
    });
});