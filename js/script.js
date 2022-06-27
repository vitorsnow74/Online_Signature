window.addEventListener("load", () => {                   
    let isPainting = false;  
    let isInDrawingMode = true;      
    
    //HTML items
    const canvas = document.querySelector("#canvas"); 
          canvas.height = 200;
          canvas.width = window.innerWidth;  
    const context = canvas.getContext("2d"); 
          context.lineCap = "round"; 
    const text = document.querySelector("#text");       
    const changeSignModeCheckbox = document.querySelector("#signModeCheckbox");
    const currentSignModeLabel = document.querySelector(".signModeText");    
    const warningMessage = document.querySelector("#warningMessage");
    const fontFamilySelector = document.querySelector("#fontFamilySelector");   
    const preSelectAllFonts = document.querySelectorAll(".fontFamily");
    const allFontsFromSelectorInArray = Array.prototype.slice.call(preSelectAllFonts);                                      
        
    changeSignMode();
    changeStyleFontsInFontSelector();

    //Event Listeners
    canvas.addEventListener("mousedown", () => {
        if (!isInDrawingMode) return;
        isPainting = true;             
    });
    canvas.addEventListener("mousemove", (e) => { 
        if(!isPainting) return; 
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    });  
    
    window.addEventListener("mouseup", () => {
        isPainting = false;
        context.beginPath();
    });
    window.addEventListener("resize", () => {
        canvas.height = 200;
        canvas.width = window.innerWidth;            
        context.lineCap = "round"; 
    });    

    document.getElementById("clearButton").onclick = () => { clearSignature(); };    

    document.querySelector("#selectedColor").addEventListener("input", () => {
        let selectedColor = document.querySelector("#selectedColor").value == "Preto" ? "#101010" : "#000080";
        context.strokeStyle = selectedColor;   
        text.style.color = selectedColor;
    });

    document.querySelector("#fontWeight").addEventListener("change", () => {
        context.lineWidth = document.querySelector("#fontWeight").value;   
        text.style.fontWeight = document.querySelector("#fontWeight").value < 6 ? "light" : "bold";
    });

    document.querySelector("#currentFontFamily").addEventListener("change" , () => {
        text.style.fontFamily = document.querySelector("#currentFontFamily").value;
    });    

    changeSignModeCheckbox.addEventListener("change", changeSignMode); 

    //Functions
    function clearSignature(){
        context.clearRect(0, 0, canvas.width, canvas.height);    
        text.value = "";        
    }

    function changeSignMode(){
        if(changeSignModeCheckbox.checked) { 
            isInDrawingMode = true;                     
            text.style.display = "none";              
            currentSignModeLabel.innerText = "Desenhar";
            currentSignModeLabel.style.color = "blue";
            warningMessage.style.display = "none"; 
            fontFamilySelector.style.display = "none";           
        } else {     
            clearSignature();      
            isInDrawingMode = false;
            text.style.display = "initial"; 
            currentSignModeLabel.innerText = "Digitar"; 
            currentSignModeLabel.style.color = "red";
            warningMessage.style.display = "block";   
            fontFamilySelector.style.display = "block"; 
        }    
    }
    
    function changeStyleFontsInFontSelector(){        
        allFontsFromSelectorInArray.forEach(element => {              
            element.style.fontFamily = element.value + ",cursive";                        
        });
    }                    
});
