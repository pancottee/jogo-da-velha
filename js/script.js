//variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let finaljogo = false

// Click botão 1

function clickbtn1() {
    
    let btn = document.getElementById('btn1');

    if (btn.value == ' ' && !finaljogo) {
        jogadas++;

        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn1 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn1 = "O";
        }

    }
    verificaGanhador();
}


//click botão 2

function clickbtn2() {
    
    let btn = document.getElementById('btn2');
    jogadas++;


    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn2 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn2 = "O";
        }

    }
    verificaGanhador();
}

//click botão 3

function clickbtn3() {
    
    let btn = document.getElementById('btn3');
    jogadas++;

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn3 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn3 = "O";
        }

    }
    verificaGanhador();
}

//click botão 4

function clickbtn4() {
    
    let btn = document.getElementById('btn4');
    jogadas++;

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn4 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn4 = "O";
        }

    }
    verificaGanhador();
}

//click botão 5

function clickbtn5() {
    
    let btn = document.getElementById('btn5');
    jogadas++;

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn5 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn5 = "O";
        }

    }
    verificaGanhador();
}

//click botão 6

function clickbtn6() {
    
    let btn = document.getElementById('btn6');
    jogadas++;

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn6 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn6 = "O";
        }

    }
    verificaGanhador();
}

//click botão 7

function clickbtn7() {
    
    let btn = document.getElementById('btn7');
    jogadas++;

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn7 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn7 = "O";
        }

    }
    verificaGanhador();
}

//click botão 8

function clickbtn8() {
    
    let btn = document.getElementById('btn8');
    jogadas++;

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn8 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn8 = "O";
        }

    }
    verificaGanhador();
}

//click botão 9

function clickbtn9() {
    
    let btn = document.getElementById('btn9');
    jogadas++;

    if (btn.value == ' ' && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn9 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn9 = "O";
        }

    }
    verificaGanhador();
}

//GANHADOR X//

function verificaGanhador() {
    let lblJogador = document.getElementById("lblJogador");
    let lblJogadas = document.getElementById("lblJogadas");

    //Verifica se Jogador x Ganhou
    if (btn1 == 'X' && btn2 == 'X' && btn3 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
        //alert('0 jogador X ganhou!');
    }
    if (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
        //alert('0 jogador X ganhou!');
    }
    if (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
        // alert('0 jogador X ganhou!');
    }
    if (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
        //alert('0 jogador X ganhou!');
    }
    if (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
        //alert('0 jogador X ganhou!');
    }
    if (btn3 == 'X' && btn6 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
        //alert('0 jogador X ganhou!');
    } if (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
        //alert('0 jogador X ganhou!');
    }
    if (btn3 == 'X' && btn5 == 'X' && btn7 == 'X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
        //alert('0 jogador X ganhou!');
    }


    //GANHADOR O//

    if (btn1 == 'O' && btn2 == 'O' && btn3 == 'O') {
        finaljogo = true;
        lblJogador.innerText = 'O jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }


    if (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') {
        finaljogo = true;
        lblJogador.innerText = 'O jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }


    if (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') {
        finaljogo = true;
        lblJogador.innerText = 'O jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }


    if (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') {
        finaljogo = true;
        lblJogador.innerText = 'O jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }


    if (btn3 == 'O' && btn5 == 'O' && btn7 == 'O') {
        finaljogo = true;
        lblJogador.innerText = 'O jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }


    if (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') {
        finaljogo = true;
        lblJogador.innerText = 'O jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }

    if (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') {
        finaljogo = true;
        lblJogador.innerText = 'O jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }


    if (btn3 == 'O' && btn6 == 'O' && btn9 == 'O') {
        finaljogo = true;
        lblJogador.innerText = 'O jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }

    //verifica empate
    if (jogadas == 9) {
        finaljogo = true
        lblJogadas.innerText = 'Empate';
        lblJogador.innerText = '';
        return;
    }

if(controle==0){
    lblJogador.innerText = 'Jogador X';
} else{
    lblJogador.innerText = 'Jogador O';
}

    lblJogadas.innerText = '(' + (jogadas + 1) + 'ª Jogada)'
}

function clickReiniciar() {
    btn1 = 0;
    btn2 = 0;
    btn3 = 0;
    btn4 = 0;
    btn5 = 0;
    btn6 = 0;
    btn7 = 0;
    btn8 = 0;
    btn9 = 0;
    controle = 0;
    jogadas = 0;
    finaljogo = false

    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');

    b1.value = ' ';
    b2.value = ' ';
    b3.value = ' ';
    b4.value = ' ';
    b5.value = ' ';
    b6.value = ' ';
    b7.value = ' ';
    b8.value = ' ';
    b9.value = ' ';

    let lblJogador = document.getElementById('lblJogador');
    let lblJogadas = document.getElementById('lblJogadas');

    lblJogador.innerText = 'Jogador X';
    lblJogadas.innerText = ' 1ª Jogada';

}