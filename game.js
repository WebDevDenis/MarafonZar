import {countBtn, generateLog, random, randomInteger} from "./utils";
import Pokemon from "./pokemon";
import Query from "./query";

const query = new Query();
class Game {

    start = async () =>{

        const pokemons = await query.getPockemons()

        const pokemonPlayer = pokemons[randomInteger(0, 14)];

        const pokemonServer = pokemons[randomInteger(0, 14)];


        let player1 =  this.initPlayer(pokemonPlayer,'player1');
        let player2 = this.initPlayer(pokemonServer,'player2');

        this.initBtn(player1,player2);
    }
    initBtnStart() {
        const $start = document.getElementById('start');
        $start.addEventListener('click',()=>{
            const allButtons = document.querySelectorAll('.control .button');
            allButtons.forEach($item => $item.remove());
            this.start();
        })
    }
    gameOver() {
        const allButtons = document.querySelectorAll('.control .button');
        allButtons.forEach($item => $item.remove());

        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $btn.innerText ="New Game";
        $btn.id ='start';
        $control.appendChild($btn);
        this.initBtnStart();
    }



    initBtn(player1,player2) {

        player1.attacks.forEach(item=>{
            const $btn = document.createElement('button');
            $btn.classList.add('button');

            $btn.innerText = item.name;
            const btnCount = countBtn(item.maxCount,$btn);
            $btn.addEventListener('click', async () => {

                btnCount();
                player2.changeHP(random(item.maxDamage,item.minDamage),function (count) {
                    console.log('after change HP',count)
                    console.log(generateLog(player1,player2,count));

                });
                if (player2.hp.current == 0){
                    const pokemonServer = await query.getPockemons()
                    const pokemon = pokemonServer[randomInteger(0, 14)];
                    player2 = this.initPlayer(pokemon,'player2');
                }

                const attackServer =player2.attacks[0];
                player1.changeHP(random(attackServer.maxDamage,attackServer.minDamage));
                if (player1.hp.current == 0){
                    this.gameOver();
                }
            });
            $control.appendChild($btn);


        })
    }
    initPlayer(player,selector) {
        return  new Pokemon({
            ...player,
            selectors:selector,
        });
    }


}

export default Game;