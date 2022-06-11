window.addEventListener("load", () => {    
    //Page conditions
    let painting = false;  
    let enableDrawing = true; 
    
    //HTML items
    const canvas = document.querySelector("#canvas"); 
            canvas.height = 200;
            canvas.width = window.innerWidth;  
    const context = canvas.getContext("2d"); 
            context.lineCap = "round"; 
    const text = document.querySelector("#text");       
    const signModeCheckbox = document.querySelector("#signModeCheckbox");
    const signModeText = document.querySelector(".signModeText");
    const warningMessage = document.querySelector("#warningMessage");
    const fontFamilySelector = document.querySelector("#fontFamilySelector");                             
       
    //Start the page with drawing mode by default
    selectSignMode();

    //Rules
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", (e) => { keepDrawing(e) });  
    
    window.addEventListener("mouseup", stopDrawing);
    window.addEventListener("resize", resize);

    signModeCheckbox.addEventListener("change", selectSignMode); 

    document.getElementById("clearButton").onclick = () => { clearSignature(); };            

    //Functions
    function startDrawing(){
        if (!enableDrawing) return;
        painting = true;
        context.lineWidth = document.querySelector("#fontWeight").value;
        context.strokeStyle = document.querySelector(".selectedColor").value == "Preto" ? "#101010" : "#000080";          
    };        

    function keepDrawing(e){
        if(!painting) return; 
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }

    function stopDrawing(){
        painting = false;
        context.beginPath();
    }

    function resize(){
        canvas.height = 200;
        canvas.width = window.innerWidth;            
        context.lineCap = "round"; 
    }

    function clearSignature(){
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function selectSignMode(){
        if(signModeCheckbox.checked) { 
            enableDrawing = true;                     
            text.style.display = "none";              
            signModeText.innerText = "Desenhar";
            signModeText.style.color = "blue";
            warningMessage.style.display = "none"; 
            fontFamilySelector.style.display = "none";           
        } else {     
            clearSignature();       
            enableDrawing = false;
            text.style.display = "initial"; 
            signModeText.innerText = "Digitar"; 
            signModeText.style.color = "red";
            warningMessage.style.display = "block";   
            fontFamilySelector.style.display = "block"; 
        }    
    }                          
});