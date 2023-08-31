//---------caluc
function insert(num){
    document.form.output.value = document.form.output.value+num
}
function equal(){
    var exp = document.form.output.value;
    if(exp){
        document.form.output.value = eval(exp)
    }
}
function c(){
    document.form.output.value = '';
}
//----------------------------//
function closeInfo(){
    document.getElementById("info-back-box").style.display='none';
    document.getElementById("info-back-box").style.opacity='0';
}
function opInfo(){
    document.getElementById("info-back-box").style.display='block';
    document.getElementById("info-back-box").style.opacity='1';
}
function hamBtn(){
    document.getElementById("v-hidden-main").classList.toggle("v-v-m");
}