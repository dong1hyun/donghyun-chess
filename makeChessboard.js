const $wrapper = document.querySelector('#wrapper');

function boardInit() {
    for (i = 1; i <= 8; i++) {  //행
        for (j = 1; j <= 8; j++) {  //열
            const $div = document.createElement('div')

            if (i % 2 != 0) {  //홀수 행일 때
                if (j % 2 != 0) {  //홀수 열만 
                    $div.setAttribute('id', 'greyTile');
                }
            }
            else {  //짝수 행일 때
                if (j % 2 == 0) {
                    $div.setAttribute('id', 'greyTile');
                }
            }
            $wrapper.appendChild($div);
        }
    }
}

const tiles = $wrapper.children;

function pawnInit() {
    for (i = 8; i < 16; i++) {  //흑 폰 세팅
        const pawn = document.createElement('img');
        pawn.setAttribute('src', 'images/black/pawn.jpg')
        pawn.setAttribute('id', 'blackPawn');
        tiles[i].appendChild(pawn);
    }
    for (i = 48; i < 56; i++) {  //백 폰 세팅
        const pawn = document.createElement('img');
        pawn.setAttribute('src', 'images/white/pawn.jpg')
        pawn.setAttribute('id', 'whitePawn');
        tiles[i].appendChild(pawn);
    }
}

function rookInit(n) {
    const blackRook = document.createElement('img');
    blackRook.setAttribute('src', 'images/black/rook.jpg')
    blackRook.setAttribute('id', 'blackRook');
    tiles[n].appendChild(blackRook);

    const whiteRook = document.createElement('img');
    whiteRook.setAttribute('src', 'images/white/rook.jpg')
    whiteRook.setAttribute('id', 'blackRook');
    tiles[n + 56].appendChild(whiteRook);
}

function knightInit(n) {
    const blackKnight = document.createElement('img');
    blackKnight.setAttribute('src', 'images/black/Knight.jpg')
    blackKnight.setAttribute('id', 'blackKnight');
    tiles[n].appendChild(blackKnight);

    const whiteKnight = document.createElement('img');
    whiteKnight.setAttribute('src', 'images/white/knight.jpg')
    whiteKnight.setAttribute('id', 'whiteKnight');
    tiles[n + 56].appendChild(whiteKnight);
}

function bishopInit(n) {
    const blackBishop = document.createElement('img');
    blackBishop.setAttribute('src', 'images/black/bishop.jpg')
    blackBishop.setAttribute('id', 'blackBishop');
    tiles[n].appendChild(blackBishop);

    const whiteBishop = document.createElement('img');
    whiteBishop.setAttribute('src', 'images/white/bishop.jpg')
    whiteBishop.setAttribute('id', 'whiteBishop');
    tiles[n + 56].appendChild(whiteBishop);
}

function queenInit(n) {
    const blackQueen = document.createElement('img');
    blackQueen.setAttribute('src', 'images/black/queen.jpg')
    blackQueen.setAttribute('id', 'blackQueen');
    tiles[n].appendChild(blackQueen);

    const whiteQueen = document.createElement('img');
    whiteQueen.setAttribute('src', 'images/white/queen.jpg')
    whiteQueen.setAttribute('id', 'whiteQueen');
    tiles[n + 56].appendChild(whiteQueen);
}

function kingInit(n) {
    const blackKing = document.createElement('img');
    blackKing.setAttribute('src', 'images/black/king.jpg')
    blackKing.setAttribute('id', 'blackKing');
    tiles[n].appendChild(blackKing);

    const whiteKing = document.createElement('img');
    whiteKing.setAttribute('src', 'images/white/king.jpg')
    whiteKing.setAttribute('id', 'whiteKing');
    tiles[n + 56].appendChild(whiteKing);
}

function pieceInit() {
    pawnInit();
    rookInit(0), rookInit(7);
    knightInit(1), knightInit(6);
    bishopInit(2), bishopInit(5);
    queenInit(3);
    kingInit(4);
}

boardInit();
pieceInit();