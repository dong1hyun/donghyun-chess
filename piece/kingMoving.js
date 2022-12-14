const whiteKing = document.querySelectorAll('#whiteKing');
const blackKing = document.querySelectorAll('#blackKing');

function whiteKingMove() {
    for (i = 0; i < whiteKing.length; i++) {
        whiteKing[i].onclick = function () {
            if(whiteMessage()) return;  //백 차례가 아니면 종료
            movingTarget = this;
            const tileNum = +this.parentElement.getAttribute('value');

            secondClick(tileNum);
            if (clicked) {
                clicked = false;
                return;
            }

            clearMovingPoint();

            if (tileNum - 8 >= 0) {
                if (tiles[tileNum - 8].children[2] == null ||tiles[tileNum - 8].children[2] != null && tiles[tileNum - 8].children[2].getAttribute('class') == 'blackTeam') {
                    tiles[tileNum - 8].firstElementChild.style.display = 'block';
                }
            }
            if (tileNum + 8 < 64) {
                if (tiles[tileNum + 8].children[2] == null ||tiles[tileNum + 8].children[2] != null && tiles[tileNum + 8].children[2].getAttribute('class') == 'blackTeam') {
                    tiles[tileNum + 8].firstElementChild.style.display = 'block';
                }
            }
            if (tileNum % 8 != 0) {
                if (tiles[tileNum - 1].children[2] == null ||tiles[tileNum - 1].children[2] != null && tiles[tileNum - 1].children[2].getAttribute('class') == 'blackTeam') {
                    tiles[tileNum - 1].firstElementChild.style.display = 'block';
                }
            }
            if ((tileNum + 1) % 8 != 0) {
                if (tiles[tileNum + 1].children[2] == null ||tiles[tileNum + 1].children[2] != null && tiles[tileNum + 1].children[2].getAttribute('class') == 'blackTeam') {
                    tiles[tileNum + 1].firstElementChild.style.display = 'block';
                }
            }
            if (tileNum % 8 != 0 && tileNum - 9 >= 0) { 
                if (tiles[tileNum - 9].children[2] == null ||tiles[tileNum - 9].children[2] != null && tiles[tileNum - 9].children[2].getAttribute('class') == 'blackTeam') {
                    tiles[tileNum - 9].firstElementChild.style.display = 'block';
                }
            }
            if (tileNum % 8 != 0 && tileNum + 7 < 64) {
                if (tiles[tileNum + 7].children[2] == null ||tiles[tileNum + 7].children[2] != null && tiles[tileNum + 7].children[2].getAttribute('class') == 'blackTeam') {
                    tiles[tileNum + 7].firstElementChild.style.display = 'block';
                }
            }
            if ((tileNum + 1) % 8 != 0 && tileNum - 7 >= 0) {
                if (tiles[tileNum - 7].children[2] == null ||tiles[tileNum - 7].children[2] != null && tiles[tileNum - 7].children[2].getAttribute('class') == 'blackTeam') {
                    tiles[tileNum - 7].firstElementChild.style.display = 'block';
                }
            }
            if ((tileNum + 1) % 8 != 0 && tileNum + 9 < 64) {
                if (tiles[tileNum + 9].children[2] == null ||tiles[tileNum + 9].children[2] != null && tiles[tileNum + 9].children[2].getAttribute('class') == 'blackTeam') {
                    tiles[tileNum + 9].firstElementChild.style.display = 'block';
                }
            }
            if(this.dataset.firstMove == '-1' && tiles[tileNum + 1].children[2] == null && tiles[tileNum + 2].children[2] == null){
                tiles[tileNum + 2].children[1].style.display = 'block';   
            }
            if(this.dataset.firstMove == '-1' && tiles[tileNum - 1].children[2] == null && tiles[tileNum - 2].children[2] == null && tiles[tileNum - 3].children[2] == null){
                tiles[tileNum - 2].children[1].style.display = 'block';   
            }
            clickedNum = tileNum;
        }
    }
}


function blackKingMove() {
    for (i = 0; i < blackKing.length; i++) {
        blackKing[i].onclick = function () {
            if(blackMessage()) return;  //흑 차례가 아니면 종료
            movingTarget = this;
            const tileNum = +this.parentElement.getAttribute('value');

            secondClick(tileNum);
            if (clicked) {
                clicked = false;
                return;
            }

            clearMovingPoint();

            if (tileNum - 8 >= 0) {
                if (tiles[tileNum - 8].children[2] == null ||tiles[tileNum - 8].children[2] != null && tiles[tileNum - 8].children[2].getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum - 8].firstElementChild.style.display = 'block';
                }
            }
            if (tileNum + 8 < 64) {
                if (tiles[tileNum + 8].children[2] == null ||tiles[tileNum + 8].children[2] != null && tiles[tileNum + 8].children[2].getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum + 8].firstElementChild.style.display = 'block';
                }
            }
            if (tileNum % 8 != 0) {
                if (tiles[tileNum - 1].children[2] == null ||tiles[tileNum - 1].children[2] != null && tiles[tileNum - 1].children[2].getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum - 1].firstElementChild.style.display = 'block';
                }
            }
            if ((tileNum + 1) % 8 != 0) {
                if (tiles[tileNum + 1].children[2] == null ||tiles[tileNum + 1].children[2] != null && tiles[tileNum + 1].children[2].getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum + 1].firstElementChild.style.display = 'block';
                }
            }
            if (tileNum % 8 != 0 && tileNum - 9 >= 0) { 
                if (tiles[tileNum - 9].children[2] == null ||tiles[tileNum - 9].children[2] != null && tiles[tileNum - 9].children[2].getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum - 9].firstElementChild.style.display = 'block';
                }
            }
            if (tileNum % 8 != 0 && tileNum + 7 < 64) {
                if (tiles[tileNum + 7].children[2] == null ||tiles[tileNum + 7].children[2] != null && tiles[tileNum + 7].children[2].getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum + 7].firstElementChild.style.display = 'block';
                }
            }
            if ((tileNum + 1) % 8 != 0 && tileNum - 7 >= 0) {
                if (tiles[tileNum - 7].children[2] == null ||tiles[tileNum - 7].children[2] != null && tiles[tileNum - 7].children[2].getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum - 7].firstElementChild.style.display = 'block';
                }
            }
            if ((tileNum + 1) % 8 != 0 && tileNum + 9 < 64) {
                if (tiles[tileNum + 9].children[2] == null ||tiles[tileNum + 9].children[2] != null && tiles[tileNum + 9].children[2].getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum + 9].firstElementChild.style.display = 'block';
                }
            }

            if(this.dataset.firstMove == '-1' && tiles[tileNum + 1].children[2] == null && tiles[tileNum + 2].children[2] == null){
                tiles[tileNum + 2].children[1].style.display = 'block';   
            }
            if(this.dataset.firstMove == '-1' && tiles[tileNum - 1].children[2] == null && tiles[tileNum - 2].children[2] == null && tiles[tileNum - 3].children[2] == null){
                tiles[tileNum - 2].children[1].style.display = 'block';   
            }

            clickedNum = tileNum;
        }
    }
}


whiteKingMove();
blackKingMove();