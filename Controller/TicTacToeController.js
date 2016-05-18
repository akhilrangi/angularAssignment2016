/// <reference path="../Scripts/angular.min.js" />
var Gamingapp = angular.module("TicTac", [])
.controller("TicTacToe", ['$scope', function ($scope) {
    $scope.GameStart = true;
    $scope.startGame = function () {
        $scope.GameStart = true;
        $scope.winner = null;
        $scope.currentPlayer = 'O'
        $scope.player = 'O'
        $scope.IsFilled = false;
        $scope.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
        ]
    }
    $scope.endGame = function () {
        $scope.GameStart = false;
        $scope.currentPlayer = 'O'
        $scope.player = 'O'
        $scope.winner = null;
        $scope.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
        ]
    }
    $scope.board = [
       [null, null, null],
       [null, null, null],
       [null, null, null]
    ]
    $scope.currentPlayer = 'O'
    $scope.player = 'O'
    $scope.winner = null
    $scope.IsFilled = false;
    

    $scope.cellText = function (row, column) {
       
        var value = cell(row, column)
        return value ? value : '-'
    }
    $scope.cellClick = function (row, column, index) {

        if ($scope.winner) {
            alert('Game over.')
            return
        }       
        if ($scope.currentPlayer == 'O') {
            $scope.PlayerName = 'Player 1';
        }
        else {
            $scope.PlayerName = 'Player 2';
        }

        if ($scope.player != $scope.currentPlayer) {
            alert(' ' + $scope.PlayerName + ' ' + 'turn.')
            return
        }
        setCell(row, column, $scope.player)
        checkBoard()        
        if ($scope.IsFilled == false) {
            
            $scope.currentPlayer = nextPlayer($scope.currentPlayer)
        }
        debugger;
    }
    // returns the value of cell
    function cell(row, column) {
        return $scope.board[row][column]
    }
    function setCell(row, column, value) {
        debugger;
        if ($scope.board[row][column]) {
            alert("Already filled");
            $scope.IsFilled = true;
            //$scope.currentPlayer = $scope.player;
            return false;
        }
        else {
            $scope.board[row][column] = value
            $scope.IsFilled = false;
        }
    }
    // checks the board and declare winner
    function checkBoard() {
        var winner, empty = false

        // check board vertically and horizontally
        for (var i = 0; i < 3; i++) {

            if (cell(i, 0) != null && cell(i, 1) != null && cell(i, 2) != null) {

                if (cell(i, 0) == cell(i, 1) && cell(i, 1) == cell(i, 2)) {
                    winner = cell(i, 0)                    
                }
            }
            if (cell(0, i) != null && cell(1, i) != null && cell(2, i) != null) {
                if (cell(0, i) == cell(1, i) && cell(1, i) == cell(2, i)) {
                    winner = cell(0, i)
                }
            }
        }

        // check board diagonally
        if (cell(0, 0) != null && cell(1, 1) != null && cell(2, 2) != null) {
            if (cell(0, 0) == cell(1, 1) && cell(1, 1) == cell(2, 2)) {
                winner = cell(0, 0)
            }

        }
        if (cell(0, 2) != null && cell(1, 1) != null && cell(2, 0) != null) {
            if (cell(0, 2) == cell(1, 1) && cell(1, 1) == cell(2, 0)) {
                winner = cell(0, 0)
            }
        }

        if (winner) {

            $scope.winner = winner
        }        
    }
    // returns the next player
    function nextPlayer(player) {
        return {
            O: 'X',
            X: 'O'
        }
            [player]
    }    

}
]
)
;