window.addEventListener("load", () => {    
    let painting = false;        
    const text = document.querySelector("#text");
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
    window.addEventListener("resize", () => {
        canvas.height = 200;
        canvas.width = window.innerWidth;            
        context.lineCap = "round";                 
    });

    document.getElementById("clearButton").onclick = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };
    
    /* In creation */    
    const signModeCheckbox = document.querySelector("#signModeCheckbox");
    const signModeText = document.querySelector(".signModeText");
    signModeCheckbox.addEventListener("change", () => {        
        if(signModeCheckbox.checked) {
            // Checkbox está selecionado.            
            text.style.display = "none";              
            signModeText.innerText = "Desenhar";
            signModeText.style.color = "blue";            
        } else {
            // Checkbox não está selecionado.
            text.style.display = "initial"; 
            signModeText.innerText = "Digitar"; 
            signModeText.style.color = "red";
        }              
    });    
});