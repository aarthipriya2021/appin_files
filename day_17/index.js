// upperLeftTriangle
function upperLeftTriangle(rows){
    let output = "";
    for(let i = 1; i <= rows; i++){
        let line = " ";
        for(let j = 0; j < i; j++){
            line += "* "
        }
        output += line + "<br />";
    }
    return output;
}

document.getElementById("pattern_01").innerHTML= upperLeftTriangle(5);


// lowerLeftTriangle
function lowerLeftTriangle(rows){
    let output = "";
    for(let i = rows; i >= 0; i--){
        let line = " ";
        for(let j = 0; j < i; j++){
            line += "* ";
        }
        output += line + "<br />";
    }
    return output;
}

document.getElementById("pattern_02").innerHTML= lowerLeftTriangle(5);


// lowerRightTriangle

function upperRightTriangle(rows){
    let output = "";
    for(let i = 1; i <= rows; i++){
        let line = " ";
        for(let j = 0; j < rows - i; j++){
            line += " ";
            for(let k = 0; k < i; k++){
                line += "* ";
            }
        }
        output += line + "<br />"
    }
    return output;
    
}

document.getElementById("pattern_03").innerHTML= upperRightTriangle(5);