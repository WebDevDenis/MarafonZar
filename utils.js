export const random = (max,min=0) => {
    const  num = max - min;
    return Math.ceil(Math.random() * num)+min;
}
export  const randomInteger = (min, max) => {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
export const countBtn = (count=6,el) => {
    const innerText = el.innerText;
    el.innerText = `${innerText} (${count})`;

    return function () {
        count--;
        if(count === 0){
            el.disabled=true;
        }
        el.innerText = `${innerText} (${count})`;
        return count;

    }
}

export const generateLog = ({name} = player1,{name: secondName,damageHP} = player2 ,damage) => {
    const logs = [
        ` ${secondName} вспомнил что-то важное, но неожиданно ${name}, не помня себя от испуга, ударил в предплечье врага. Нанесено урона для ${secondName} - ${damage}`,
        ` ${secondName}  поперхнулся, и за это ${name} с испугу приложил прямой удар коленом в лоб врага. Нанесено урона для ${secondName} - ${damage}`,
        ` ${secondName}  забылся, но в это время наглый ${name}, приняв волевое решение, неслышно подойдя сзади, ударил. Нанесено урона для ${secondName} - ${damage}`,
        ` ${secondName}  пришел в себя, но неожиданно ${name} случайно нанес мощнейший удар. Нанесено урона для ${secondName} - ${damage}`,
        ` ${secondName} поперхнулся, но в это время ${name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Нанесено урона для ${secondName} - ${damage}`,
        ` ${secondName} удивился, а ${name} пошатнувшись влепил подлый удар. Нанесено урона для ${secondName} - ${damage}`,
        ` ${secondName} высморкался, но неожиданно ${name} провел дробящий удар. Нанесено урона для ${secondName} - ${damage}`,
        ` ${secondName} пошатнулся, и внезапно наглый ${name} беспричинно ударил в ногу противника Нанесено урона для ${secondName} - ${damage}`,
        ` ${secondName} расстроился, как вдруг, неожиданно ${name} случайно влепил стопой в живот соперника. Нанесено урона для ${secondName} - ${damage}`,
        ` ${secondName} пытался что-то сказать, но вдруг, неожиданно ${name} со скуки, разбил бровь сопернику. Нанесено урона для ${secondName} - ${damage}`
    ];

    return logs[random(logs.length)-1];
}