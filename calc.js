function whenClicked(val){
     document.getElementById("new").value+=val
}
function clrScrn(){
     document.getElementById("new").value=""
}
function ans()
{
let text=document.getElementById("new").value
let result=eval(text)
document.getElementById("new").value=result
}