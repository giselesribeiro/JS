var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function eNumero(n){
   if(Number(n) >= 1 && Number(n) <= 100 ){
     return true
   }else{
      return false
   }
}
function naLista(n, l){
   if(l.indexOf(Number(n)) != -1){
     return true
   }else{
      return false
   }
}

function adicionar() {
   if(eNumero(num.value) && !naLista(num.value, valores)){
      
      valores.push(Number(num.value))
      var item = document.createElement('option')
      item.text = (`Valor ${num.value} adicionado.`)
      lista.appendChild(item)

   }else{
      window.alert('Numero inválido')
   }
}