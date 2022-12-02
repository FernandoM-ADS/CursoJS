function bomDia() {
    console.log('Bom dia!!')
}

const boaTarde = function () {
    console.log('Boa tarde!!!')
}


// Passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
       fn() 
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// Retornar uma função  partir de uma outra função

function potencia(base, exp) {
    return function(exp) {
        return Math.pow(base, exp)
    }    
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const pot34 = potencia(3)(4)
console.log(pot34)