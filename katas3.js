const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(resultado){
    const newDiv = document.createElement('div');
    newDiv.className = 'katas';

    const newText = document.createTextNode(resultado);
    newDiv.appendChild(newText);
 
    const destino = document.getElementById('principal');
    destino.appendChild(newDiv);
}



function kata1() {
    let numeros1 = []
    for (let i = 1; i <= 25; i++) {
        numeros1.push(i)
        }
    showResults(numeros1)
    return numeros1
}

kata1()

function kata2() {
    let numeros = []
    for (let i = 25; i >= 1; i--) {
        numeros.push(i)
        }
    showResults(numeros)
    return numeros
}

kata2()

function kata3() {
    let negative = []
    for (let i = -1; i >= -25 & i < 0; i--) {
        negative.push(i)
        }
    showResults(negative)
    return negative
}

kata3()

function kata4() {
    let negativeInv = []
    for (let i = -25; i <= -1 ; i++) {
        negativeInv.push(i)
        }
    showResults(negativeInv)
    return negativeInv
}

kata4()

function kata5() {
    let range = []
    for (let i = 25; i >= -25 ; i= i -2) {
        range.push(i)
    }
    showResults(range)
    return range
}

kata5()

function kata6() {
    let bythree =[]
    for (let i = 3; i < 100; i++){
        if ( i%3 === 0){
            bythree.push(i)
        }
    }
    showResults(bythree)
    return bythree
}

kata6()


function kata7() {
    let byseven =[]
    for (let i = 7; i < 100; i++){
        if ( i%7 === 0){
            byseven.push(i)
        }
    }
    showResults(byseven)
    return byseven
}

kata7()

function kata8() {
   let byboth=[]
   for (let i = 100; i > 0; i--){
       if ( i%3 === 0 || i%7 === 0){
           byboth.push(i)
       }
   }
   showResults(byboth)
   return byboth 
}

kata8()

function kata9() {
    let byfive =[]
    for (let i = 5; i < 100; i++){
        if ( i%5 === 0 && i%2 > 0){
            byfive.push(i)
        }
    }
    showResults(byfive)
    return byfive
}

kata9()

function kata10() {
    showResults(sampleArray)
}

kata10()

function kata11() {
    let pares =[]
    for (let i = 0; i < sampleArray.length ; i++){
        if ( sampleArray[i]%2 === 0){
            pares.push(sampleArray[i])
        }
    }
    showResults(pares)
    return pares
}

kata11()


function kata12() {
    let impares =[]
    for (let i = 0; i < sampleArray.length ; i++){
        if ( sampleArray[i]%2 !== 0){
            impares.push(sampleArray[i])
        }
    }
    showResults(impares)
    return impares
}

kata12()

function kata13() {
    let div8 =[]
    for (let i = 0; i < sampleArray.length ; i++){
        if ( sampleArray[i]%8 === 0){
            div8.push(sampleArray[i])
        }
    }
    showResults(div8)
    return div8
}

kata13()

function kata14() {
    let div8 =[]
    for (let i = 0; i < sampleArray.length ; i++){
        let sqrd = sampleArray[i]*sampleArray[i]
        div8.push(sqrd)
    }
    showResults(div8)
    return div8
}

kata14()


function kata15() {
    let sumTwenty = 0
    for (let i = 0; i < 21 ; i++){
        sumTwenty += i
    }
    showResults(sumTwenty)
    return sumTwenty
}

kata15()


function kata16() {
    let sumAll = 0
    for (let i = 0; i < sampleArray.length ; i++){
        sumAll += sampleArray[i]
    }
    showResults(sumAll)
    return sumAll
}

kata16()


function kata17() {
    let greater = 0
    for (let i = 0; i < sampleArray.length ; i++){
        if ( sampleArray[i]> greater){
            greater = sampleArray[i]
        }
    }
    showResults(greater)
    return greater
}

kata17()

function kata18() {
    let lower = sampleArray[0]
    for (let i = 0; i < sampleArray.length ; i++){
        if ( sampleArray[i] < lower){
            lower = sampleArray[i]
        }
    }
    showResults(lower)
    return lower
}

kata18()


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
