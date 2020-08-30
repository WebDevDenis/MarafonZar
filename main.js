
const btn = document.getElementById('btn-kick');
const btnBig = document.getElementById('btn-kick-big');

const mainHero = {
    name:'Pika',
    defaultHP: 150,
    damageHP:150,
    elHP:document.getElementById('health-character'),
    elProgressBar:document.getElementById('progressbar-character'),
    attack:changeHP,
    update:function () {
       this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
       this.elProgressBar.style.width = this.damageHP / (this.defaultHP/100)  + '%';
    },
}
const enemyHero = {
    name:'Chamb',
    defaultHP: 200,
    damageHP:200,
    elHP:document.getElementById('health-enemy'),
    elProgressBar:document.getElementById('progressbar-enemy'),
    attack:changeHP,
    update:function () {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
        this.elProgressBar.style.width = this.damageHP / (this.defaultHP/100)  + '%';
    },

}
function damage(count) {
    mainHero.attack(random(count));
    enemyHero.attack(random(count));
}
btn.addEventListener('click',function () {
    damage(20);
});
btnBig.addEventListener('click',function () {
    damage(50);
});

function init() {
    mainHero.update();
    enemyHero.update();
}

function changeHP(count) {
    if (this.damageHP < count){
        this.damageHP =0;
        alert('Проиграл - '+this.name);
        btn.disabled = true;
        btnBig.disabled = true;
    }else{
        this.damageHP -=count;
    }
    this.update();
}
function random(num) {
    return Math.ceil(Math.random() * num);
}
init();
