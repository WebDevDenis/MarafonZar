
class Game{
    constructor() {

    }

    startGame = (player1,player2) =>{

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
                const attackServer =player2.attacks[0];
                player1.changeHP(random(attackServer.maxDamage,attackServer.minDamage));
            });
            $control.appendChild($btn);
        })






    }
    resetGame = (player) =>{
    }

}
export default Game;