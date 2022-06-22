$(document).ready(() => {


    $('#staticBackdrop').modal('show');

    //$('#resultGame').modal('show');

    $('#start-game').click(() => {
        getPlayersData();
    });

    $('td').click(function() {
        if ($(this).html() == '') {
            fillColumnTicTacToe(this);
        }
    });

    $('#button_player1_win').click(function() {
        addToScore('one')
    });

    $('#button_player2_win').click(function() {
        addToScore('two')
    });

    $('#button_player0_win').click(function() {
        addToScore('none')
    });

    $('#resultGame').on('show.bs.modal', function(event) {
        numberOfMoves = 0;
    });

});

function getPlayersData() {
    const playerOne = $('input[name="input_player_one"]').val();
    const playerTwo = $('input[name="input_player_two"]').val();

    let startGame = true;

    if (playerOne == "" & playerTwo == "") {
        alert("Don't forget the name of the players!")
        return startGame = false;
    };

    if (playerOne == "") {
        alert("Don't forget the name of the player 1!")
        return startGame = false;
    };

    if (playerTwo == "") {
        alert("Don't forget the name of the player 2!")
        return startGame = false;
    };

    if (startGame == true) {
        if (confirm(`${playerOne} is the Player 1 and ${playerTwo} is the Player 2! Is that correct?`)) {
            $('#staticBackdrop').modal('hide');
            $('.game').show(1000);
            fillPlayerName();
        } else {
            alert("So fix the player's names and try again!")
            return startGame == false
        }
    };

};

function fillPlayerName() {
    const playerOne = $('input[name="input_player_one"]').val();
    const playerTwo = $('input[name="input_player_two"]').val();

    $('#span_player_one').html(playerOne + " ");
    $('#span_player_one').css('color', '#dc3545');
    $('#span_player_two').html(playerTwo + " ");
    $('#span_player_two').css('color', '#0d6efd');
    $('#button_player1_win').html(playerOne);
    $('#button_player2_win').html(playerTwo);

};

let lastMove = "";
let numberOfMoves = 0;

function fillColumnTicTacToe(column) {
    let currentMove;
    if (lastMove == "") {
        currentMove = "x"
    }
    if (lastMove == "o") {
        currentMove = "x";
    }
    if (lastMove == "x") {
        currentMove = "o";
    }
    lastMove = currentMove;

    $(column).html(currentMove);

    if ($(column).html() == "x") {
        $(column).css('color', '#dc3545')
    } else { $(column).css('color', '#0d6efd') };

    numberOfMoves += 1;
    if (numberOfMoves == 9) {
        $('#resultGame').modal('show');
        numberOfMoves = 0;
        if (lastMove == "o") {
            lastMove = x;
        };
    }
};

let scorePlayerOne = 0;
let scorePlayerTwo = 0;

function addToScore(winner) {
    if (winner == 'one') {
        scorePlayerOne += 1;
    } else if (winner == 'two') {
        scorePlayerTwo += 1;
    }
    $('#span_player_one_score').html(scorePlayerOne);
    $('#span_player_two_score').html(scorePlayerTwo);
    $('#resultGame').modal('hide');
    $('td').html("");
};