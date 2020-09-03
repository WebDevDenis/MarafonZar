import {random,countBtn,generateLog,randomInteger} from  "./utils.js";
import Pokemon from "./pokemon.js";
import Game from "./game.js";
import  {pokemons} from "./pokemons.js";

const $Game = new Game(); // на этом классы меня победили((
initBtnStart();

function initBtnStart() {
    const $start = document.getElementById('start');
    $start.addEventListener('click',()=>{
        const allButtons = document.querySelectorAll('.control .button');
        allButtons.forEach($item => $item.remove());
        startGame();
    })
}
function gameOver() {
    const allButtons = document.querySelectorAll('.control .button');
    allButtons.forEach($item => $item.remove());

    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText ="New Game";
    $btn.id ='start';
    $control.appendChild($btn);
    initBtnStart();
}
const $control = document.querySelector('.control');
function startGame() {
    const pokemonPlayer =  getPockemon()

    const pokemonServer = getPockemon()


    let player1 =  initPlayer(pokemonPlayer,'player1');
    let player2 = initPlayer(pokemonServer,'player2');

    initBtn(player1,player2);
}
function getPockemon() {
    return pokemons[randomInteger(0, 5)];
}
function initBtn(player1,player2) {

    player1.attacks.forEach(item=>{
        const $btn = document.createElement('button');
        $btn.classList.add('button');

        $btn.innerText = item.name;
        const btnCount = countBtn(item.maxCount,$btn);
        $btn.addEventListener('click', () => {

            btnCount();
            player2.changeHP(random(item.maxDamage,item.minDamage),function (count) {
                console.log('after change HP',count)
                console.log(generateLog(player1,player2,count));

            });
            if (player2.hp.current == 0){
                const pokemonServer = getPockemon();
                player2 = initPlayer(pokemonServer,'player2');
            }

            const attackServer =player2.attacks[0];
            player1.changeHP(random(attackServer.maxDamage,attackServer.minDamage));
            if (player1.hp.current == 0){
                gameOver();
            }
        });
        $control.appendChild($btn);


    })
}
function initPlayer(player,selector) {
    return  new Pokemon({
        ...player,
        selectors:selector,
    });
}
