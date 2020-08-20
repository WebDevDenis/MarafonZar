const firstRow = prompt('Введите первую строку');
const secondRow = prompt('Введите вторую строку строку');
let firstCount = 0;
let secondCount = 0;
function getRow(firstRow, secondRow) {
    for(let i=0;i<firstRow.length;i++){
        if(firstRow.charAt(i) === 'а'){
            firstCount++;
        }
    }
    for(let i=0;i<secondRow.length;i++){
        if(secondRow.charAt(i) === 'а'){
            secondCount++;
        }
    }
    if(firstCount>secondCount){
        return 'в первой строке больше - '+firstCount+', а во второй - '+secondCount;
    }
    return 'во второй строке больше - '+secondCount+', а в первой - '+firstCount;

}

alert(getRow(firstRow, secondRow));

