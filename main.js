
const btn = document.getElementById('btn-kick');
const btnBig = document.getElementById('btn-kick-big');

const mainHero = {
    name:'Pika',
    defaultHP: 150,
    damageHP:75,
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
    damageHP:100,
    elHP:document.getElementById('health-enemy'),
    elProgressBar:document.getElementById('progressbar-enemy'),
    changeHP:changeHP,
    renderHP:renderHP,
    renderHPLife:renderHPLife,
    renderProgressbarHP: renderProgressbarHP,

}
function damage(count) {
    mainHero.changeHP(random(count));
    enemyHero.changeHP(random(count));
}
btn.addEventListener('click',function () {
    damage(20);
});
btnBig.addEventListener('click',function () {
    damage(50);
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

function generateLog(first,second,damage) {
    const logs = [
        `${first.name} вспомнил что-то важное, но неожиданно ${second.name}, не помня себя от испуга, ударил в предплечье врага. Нанесено урона для ${second.name} - ${damage}, осталось ${second.damageHP}`,
        `${first.name}  поперхнулся, и за это ${second.name} с испугу приложил прямой удар коленом в лоб врага. Нанесено урона для ${second.name} - ${damage}, осталось ${second.damageHP}`,
        `${first.name}  забылся, но в это время наглый ${second.name}, приняв волевое решение, неслышно подойдя сзади, ударил. Нанесено урона для ${second.name} - ${damage}, осталось ${second.damageHP}`,
        `${first.name}  пришел в себя, но неожиданно ${second.name} случайно нанес мощнейший удар. Нанесено урона для ${second.name} - ${damage}, осталось ${second.damageHP}`,
        `${first.name} поперхнулся, но в это время ${second.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Нанесено урона для ${second.name} - ${damage}, осталось ${second.damageHP}`,
        `${first.name} удивился, а ${second.name} пошатнувшись влепил подлый удар. Нанесено урона для ${second.name} - ${damage}, осталось ${second.damageHP}`,
        `${first.name} высморкался, но неожиданно ${second.name} провел дробящий удар. Нанесено урона для ${second.name} - ${damage}, осталось ${second.damageHP}`,
        `${first.name} пошатнулся, и внезапно наглый ${second.name} беспричинно ударил в ногу противника Нанесено урона для ${second.name} - ${damage}, осталось ${second.damageHP}`,
        `${first.name} расстроился, как вдруг, неожиданно ${second.name} случайно влепил стопой в живот соперника. Нанесено урона для ${second.name} - ${damage}, осталось ${second.damageHP}`,
        `${first.name} пытался что-то сказать, но вдруг, неожиданно ${second.name} со скуки, разбил бровь сопернику. Нанесено урона для ${second.name} - ${damage}, осталось ${second.damageHP}`
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
