function Pyramid_On_Left (meaningPyramid) {

    for (let i = 0; i < meaningPyramid; i++) { 
            let innerPartPyr = ""

        for (let j = 1; j < meaningPyramid - i; j++) {
            innerPartPyr += " "
        }  
        
        for (let k = 0; k < i + 1; k++) {
            innerPartPyr += "*"
        }     
        console.log(innerPartPyr)    
    }

    for (let i = 0; i < meaningPyramid-1; i++) {
            let innerPartPyr = ""

        for (let k = 0; k < i + 1; k++) {
            innerPartPyr += " "
        }

        for (let j = 1; j < meaningPyramid - i; j++) {
            innerPartPyr += "*"
        }
        console.log (innerPartPyr)
    }
}    

function Pyramid_On_Up (meaningPyramid) {

    for (let i = 0; i < meaningPyramid / 2; i++) {
            let innerPartPyr = ""

        for (let j = 1; j < meaningPyramid / 2 - i; j++) {
            innerPartPyr += " "
        }

        for (let k = 0; k < i * 2 + 1; k++) {
            innerPartPyr += "*" 
        }   
        console.log (innerPartPyr)     
    }
}

function Pyramid_On_Right (meaningPyramid) {

    let innerPartPyr = "";
    for (let i = 0; i < meaningPyramid; i++) {    
        innerPartPyr += "*"
        console.log(innerPartPyr)
    }

    for (let k = meaningPyramid - 1; k > 0; k--) {
        innerPartPyr = innerPartPyr.slice(0, k)
        console.log(innerPartPyr)
    }    
}          

function Pyramid_On_Down (meaningPyramid) {

    for (let i = 0; i < meaningPyramid / 2 ; i++) {   
            let innerPartPyr = ""  

        for (let k = 0; k < i; k++) {        
            innerPartPyr += " "
        }     
        
        if (meaningPyramid % 2 == 0) {
            meaningPyramid -= 1
        }

        for (let j = 0; j < meaningPyramid - i * 2; j++) {                        
            innerPartPyr += "*"                                          
        }                
        console.log (innerPartPyr)        
    }
}

Pyramid_On_Left(5);
Pyramid_On_Up(9);
Pyramid_On_Right(14); 
Pyramid_On_Down(9);

