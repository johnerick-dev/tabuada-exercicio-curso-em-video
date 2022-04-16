function soma (){
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltabadi')
    if (num.value.length == 0){
        alert('Por favor, difite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }       
    }    
}
function sub (){
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltabsub')
    if (num.value.length == 0){
        alert('Por favor, difite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }       
    }    
}
function multi (){
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltabmulti')
    if (num.value.length == 0){
        alert('Por favor, difite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }       
    }    
}
function divis (){
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltabdivis')
    if (num.value.length == 0){
        alert('Por favor, difite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${(n/c)}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }       
    }    
}
