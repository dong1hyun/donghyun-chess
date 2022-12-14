let movingTarget;
let clickedNum = -1;  //클릭된 말의 번호 (클릭 되지 않았으면 -1)
let clicked = false;

function secondClick(curTileNum) {
    if (curTileNum == clickedNum) {  //현재 클릭한 말의 위치와 이전에 클릭한 말의 위치 비교
        clearMovingPoint();
        clickedNum = -1;
        clicked = true;
    }
}


function clearMovingPoint() {  //체스판에 있는 말의 이동 포인트를 모두 제거
    for (let i = 0; i < 64; i++) {
        tiles[i].children[0].style.display = 'none';
        tiles[i].children[1].style.display = 'none';
    }
}

for (i = 0; i < 64; i++) {
    const movingPoint = tiles[i].firstElementChild;
    movingPoint.onclick = function () {  //하늘색 원을 클릭 했을 때 말이 이동 + 상대 말이 있으면 제거
        movedPiece = movingTarget;
        movedLo = movingTarget.parentElement.getAttribute('value');
        diedPiece = null;
        undid = false;
        movementType = 4;
        ++count;
        clearMovingPoint();
        if (movingTarget.getAttribute('class') == 'whiteTeam' && this.parentElement.children[2] != null && this.parentElement.children[2].getAttribute('class') == 'blackTeam') {
            diedPiece = this.parentElement.children[2];
            diedLo = this.parentElement.getAttribute('value');
            undid = false;
            movingPoint.parentElement.removeChild(this.parentElement.children[2]);
        }
        if (movingTarget.getAttribute('class') == 'blackTeam' && this.parentElement.children[2] != null && this.parentElement.children[2].getAttribute('class') == 'whiteTeam') {
            diedPiece = this.parentElement.children[2];
            diedLo = this.parentElement.getAttribute('value');
            undid = false;
            movingPoint.parentElement.removeChild(this.parentElement.children[2]);
        }
        
        pawnMove(movingPoint);
        if (movingTarget.getAttribute('id') == 'whiteKing' || movingTarget.getAttribute('id') == 'blackKing' || movingTarget.getAttribute('id') == 'whiteRook' || movingTarget.getAttribute('id') == 'blackRook' && movingTarget.dataset.firstMove == '-1') {  //움직이는 말이 킹이나 룩일 때
            movingTarget.dataset.firstMove = '1';
        }
        this.parentNode.appendChild(movingTarget);
    }
}

for (i = 0; i < 64; i++) {
    const specialPoint = tiles[i].children[1];
    specialPoint.onclick = function () {   //특수 이동 (앙파상, 케슬링)
        movedPiece = movingTarget;
        movedLo = movingTarget.parentElement.getAttribute('value');
        diedPiece = null;
        undid = false;
        ++count;
        clearMovingPoint();
        if (movingTarget.getAttribute('class') == 'whiteTeam') {
            if (+this.parentElement.getAttribute('value') + 8 < 64) {
                diedPiece = tiles[+this.parentElement.getAttribute('value') + 8].children[2];
                diedLo = +this.parentElement.getAttribute('value') + 8
                tiles[+this.parentElement.getAttribute('value') + 8].removeChild(tiles[+this.parentElement.getAttribute('value') + 8].children[2]);
                undid = false;
                movementType = 1;
            }
        }
        if (movingTarget.getAttribute('class') == 'blackTeam') {
            if (+this.parentElement.getAttribute('value') - 8 >= 0) {
                diedPiece = tiles[+this.parentElement.getAttribute('value') - 8].children[2];
                diedLo = +this.parentElement.getAttribute('value') - 8;
                tiles[+this.parentElement.getAttribute('value') - 8].removeChild(tiles[+this.parentElement.getAttribute('value') - 8].children[2]);
                undid = false;
                movementType = 1;
            }
        }
        if (movingTarget.getAttribute('id') == 'whiteKing' || movingTarget.getAttribute('id') == 'blackKing' || movingTarget.getAttribute('id') == 'whiteRook' || movingTarget.getAttribute('id') == 'blackRook') {
            movingTarget.dataset.firstMove = '1';
            movementType = 0;
            const tileNum = specialPoint.parentElement.getAttribute('value');
            if (tileNum == 58) {  //퀸 사이드 케슬링
                diedPiece = tiles[56].children[2]
                diedLo = 56;
                undid = false;
                tiles[59].appendChild(tiles[56].children[2]);
            }
            else if (tileNum == 62) {  //킹 사이드 케슬링
                diedPiece = tiles[63].children[2]
                diedLo = 63;
                undid = false;
                tiles[61].appendChild(tiles[63].children[2]);
            }
            else if (tileNum == 6) {
                diedPiece = tiles[7].children[2]
                diedLo = 7;
                undid = false;
                tiles[5].appendChild(tiles[7].children[2]);
            }
            else {
                diedPiece = tiles[0].children[2]
                diedLo = 0;
                undid = false;
                tiles[3].appendChild(tiles[0].children[2]);
            }
        }
        this.parentNode.appendChild(movingTarget);
    }
}