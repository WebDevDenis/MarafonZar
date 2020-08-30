
const btn = document.getElementById('btn-kick');
const btnBig = document.getElementById('btn-kick-big');

const mainHero = {
    name:'Pika',
    defaultHP: 150,
    damageHP:150,
    elHP:document.getElementById('health-character'),
    elProgressBar:document.getElementById('progressbar-character'),
    changeHP:changeHP,
    renderHP:renderHP,
    renderHPLife:renderHPLife,
    renderProgressbarHP: renderProgressbarHP,

}
const enemyHero = {
    name:'Chamb',
    defaultHP: 200,
    damageHP:200,
    elHP:document.getElementById('health-enemy'),
    elProgressBar:document.getElementById('progressbar-enemy'),
    changeHP:changeHP,
    renderHP:renderHP,
    renderHPLife:renderHPLife,
    renderProgressbarHP: renderProgressbarHP,

}
function countClick() {
    let num = 0;

    return function (nameBtn) {
        num++;
        if(num >= 4){
            return false;
        }else {
            console.log(`осталось нажатий  на ${nameBtn} - ${(4-num)}`)
        }

    }
}
function damage(count) {
    mainHero.changeHP(random(count));
    enemyHero.changeHP(random(count));
}
const countBtn = countClick();
const countBigBtn = countClick();;
btn.addEventListener('click',function () {
    damage(20);
    if(countBtn('btn') === false){
        this.disabled = true;
    }


});

btnBig.addEventListener('click',function () {
    damage(50);

    if( countBigBtn('btnBig') === false){
        this.disabled = true;
    }

});



function init() {
    mainHero.renderHP();
    enemyHero.renderHP();
}
function  renderHP(){
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}
function renderProgressbarHP() {
    this.elProgressBar.style.width = this.damageHP / (this.defaultHP/100)  + '%';
}
function changeHP(count) {
    this.damageHP -=count;


    if (this.damageHP <= count){

        this.damageHP =0;
        alert('Проиграл - '+this.name);
        btn.disabled = true;
        btnBig.disabled = true;


    }
    const log = this === mainHero ? generateLog(this , enemyHero,count) : generateLog(this, mainHero,count);
    listLog(log);
    this.renderHP();
}
function random(num) {
    return Math.ceil(Math.random() * num);
}

function generateLog({name}=first,{name: secondName,damageHP} = second,damage) {
    const logs = [
        ` ${secondName} вспомнил что-то важное, но неожиданно ${name}, не помня себя от испуга, ударил в предплечье врага. Нанесено урона для ${secondName} - ${damage}, осталось ${damageHP}`,
        ` ${secondName}  поперхнулся, и за это ${name} с испугу приложил прямой удар коленом в лоб врага. Нанесено урона для ${secondName} - ${damage}, осталось ${damageHP}`,
        ` ${secondName}  забылся, но в это время наглый ${name}, приняв волевое решение, неслышно подойдя сзади, ударил. Нанесено урона для ${secondName} - ${damage}, осталось ${damageHP}`,
        ` ${secondName}  пришел в себя, но неожиданно ${name} случайно нанес мощнейший удар. Нанесено урона для ${secondName} - ${damage}, осталось ${damageHP}`,
        ` ${secondName} поперхнулся, но в это время ${name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Нанесено урона для ${secondName} - ${damage}, осталось ${damageHP}`,
        ` ${secondName} удивился, а ${name} пошатнувшись влепил подлый удар. Нанесено урона для ${secondName} - ${damage}, осталось ${damageHP}`,
        ` ${secondName} высморкался, но неожиданно ${name} провел дробящий удар. Нанесено урона для ${secondName} - ${damage}, осталось ${damageHP}`,
        ` ${secondName} пошатнулся, и внезапно наглый ${name} беспричинно ударил в ногу противника Нанесено урона для ${secondName} - ${damage}, осталось ${damageHP}`,
        ` ${secondName} расстроился, как вдруг, неожиданно ${name} случайно влепил стопой в живот соперника. Нанесено урона для ${secondName} - ${damage}, осталось ${damageHP}`,
        ` ${secondName} пытался что-то сказать, но вдруг, неожиданно ${name} со скуки, разбил бровь сопернику. Нанесено урона для ${secondName} - ${damage}, осталось ${damageHP}`
    ];

    return logs[random(logs.length)-1];
}
function listLog(log) {
    const p = document.createElement('p');
    p.innerText = log;
    const  divLogs = document.querySelector('#logs');
    divLogs.childElementCount ===0 ? divLogs.appendChild(p) : divLogs.insertBefore(p,divLogs.children[0]);
}

init();
