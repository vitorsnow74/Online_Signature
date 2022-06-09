window.addEventListener("load", () => {
    let painting = false;        

    const canvas = document.querySelector("#canvas");
    canvas.height = 200;
    canvas.width = window.innerWidth;  

    const context = canvas.getContext("2d"); 
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
    });

    document.getElementById("clearButton").onclick = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    /* In creation */
    const text = document.querySelector("#text");
    text.display = 'none';
});