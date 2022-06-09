window.addEventListener("load", sign("Canvas"));    

function sign(signMethod) {    
    if (signMethod == "Canvas") {        
        useCanvas();
    } else {        
        useText();
    }    
}

function useCanvas() {
    let painting = false;        
    const canvas = document.querySelector("#canvas");         
    const context = canvas.getContext("2d"); 

    canvas.height = 200;
    canvas.width = window.innerWidth;               
    context.lineCap = "round";
                           
    canvas.addEventListener("mousedown", () => {
        painting = true;
        context.lineWidth = document.querySelector("#fontWeight").value;
        context.strokeStyle = document.querySelector(".selectedColor").value == "Preto" ? "#101010" : "#000080";              
    });

    canvas.addEventListener("mousemove", (e) => {        
        if(!painting) return; 
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    });   
     
    window.addEventListener("mouseup", () => {
        painting = false;
        context.beginPath();
    });
    
    document.getElementById("clearButton").onclick = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };
}

function useText(){
    /* In creation */
    const text = document.querySelector().value;
}