function addval(val){
    let v = document.getElementById('scr')
    v.value += val;
}
function call(){
    let v = document.getElementById('scr')
    try{
        v.value = eval(v.value)
    }catch(e){
        alert('Invalid Expression')
    }
}
function clearScreen(){
    document.getElementById('scr').value='';
    
}