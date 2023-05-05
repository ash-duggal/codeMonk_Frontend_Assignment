const params = new URLSearchParams(window.location.search)
let n = 1;
if(params.has('level')){
    n = Number(params.get('level'));
}
const canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");c.beginPath();
let rect = [];
switch(n){
    case 1:{
        rect.push([0,0,500,500]);
        break;
    }   
    case 2:{
        rect.push([0,0,250,500])
        rect.push([250,0,500,500])
        break;
    }
    case 3:{
        rect.push([0,0,250,250])
        rect.push([250,0,500,250])
        rect.push([0,250,250,500])
        rect.push([250,250,500,500])
        break;
    }
    default:{
        throw new Error("N should be in between 1-3")
    }
}
document.addEventListener("mousemove", function(event){
    var arrx = [];
    var arry = [];
    var x = event.clientX;
    var y = event.clientY;
    c.beginPath();
    c.clearRect(0, 0, 500, 500);
    switch(n){
        case 1:{
            arrx.push(event.clientX);
            arry.push(event.clientY);
            break;
        }   
        case 2:{
            arrx.push(event.clientX);
            arry.push(event.clientY);
            arrx.push(500 - event.clientX);
            break;
        }
        case 3:{
            arrx.push(event.clientX);
            arry.push(event.clientY);
            arry.push(500 - event.clientY);
            arrx.push(500 - event.clientX);
            break;
        }
        default:{
            throw new Error("N should be in between 1-3")
        }
    }
    for(let i=0;i<rect.length;i++){
    c.strokeRect(...rect[i]);
    }
    for(let i=0;i<arrx.length;i++){
        for(let j=0;j<arry.length;j++){
            let tempx = arrx[i];
            let tempy = arry[j];
    c.moveTo(tempx + 30, tempy);
    c.arc(tempx, tempy ,30,0,2*Math.PI, true);
        }
    }
    c.stroke();
 });
