
const btn = document.getElementById('btn-kick');
const btnBig = document.getElementById('btn-kick-big');

const mainHero = {
    name:'Pika',
    defaultHP: 100,
    damageHP:100,
    elHP:document.getElementById('health-character'),
    elProgressBar:document.getElementById('progressbar-character'),

}
const enemyHero = {
    name:'Chamb',
    defaultHP: 100,
    damageHP:100,
    elHP:document.getElementById('health-enemy'),
    elProgressBar:document.getElementById('progressbar-enemy'),
}
function damage(count) {
    changeHP(random(count),mainHero);
    changeHP(random(count),enemyHero);
}
btn.addEventListener('click',function () {
    damage(20);
});
btnBig.addEventListener('click',function () {
    damage(50);
});



function init() {
    renderHP(mainHero);
    renderHP(enemyHero);
}
function  renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    console.log(person.elHP);
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}
function renderProgressbarHP(person) {
    person.elProgressBar.style.width = person.damageHP + '%';
}
function changeHP(count,person) {
    if (person.damageHP < count){
        person.damageHP =0;
        alert('Проиграл - '+person.name);
        btn.disabled = true;
        btnBig.disabled = true;
    }else{
        person.damageHP -=count;
    }

    renderHP(person);
}
function random(num) {
return Math.ceil(Math.random() * num);
}
init();
