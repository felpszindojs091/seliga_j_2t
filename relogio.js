
function clock(){
    let d = new Date();
    let h = d.getHours();    
    let m = d.getMinutes();
    let s = d.getSeconds();
    let hora = h + ":" + m + ":" + s;
    if (h < 10){
        let hora = "0" + h + ":" + m + ":" + s;
    }
if (m < 10){
    let hora = h + ":0" + m + ":" + s;
    if (s < 10){
        let hora = h + ":" + m + ":0" + s;
    }
}

}