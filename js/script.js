window.addEventListener("load", sign("Canvas"));    

function sign(signMethod){    
    if(signMethod == "Canvas"){
        const canvas = document.querySelector("#canvas");
        useCanvas(canvas);
    }
    if (signMethod == "Text"){
        const text = document.querySelector();
        useText();
    }    
}

function useCanvas(canvas){
    let painting = false;         
    const context = canvas.getContext("2d");        
    
    canvas.height = 200;
    canvas.width = 550;
    context.lineCap = "round";
                           
    canvas.addEventListener("mousedown", (e) => {
        painting = true;
        draw(e);
    });
    canvas.addEventListener("mouseup", () => {
        painting = false;
        context.beginPath();
    });
    canvas.addEventListener("mousemove", (e)=> {
        if(!painting) return;
        context.strokeStyle = document.querySelector(".selectedColor").value == "Azul" ? "#000080" : "#101010";
        context.lineWidth = document.querySelector("#fontWeight").value;;
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    });

    document.getElementById("clearButton").onclick = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };
}

function useText(){

}