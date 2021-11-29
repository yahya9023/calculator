let boxOfresult = document.getElementById("ans")


let res = [];	
function button(a)
{	
	boxOfresult.value+=a;
}

function opperationButton(){	
		if(boxOfresult.value.includes("+")){
            res = boxOfresult.value.split('+');
            return parseInt(res[0]) + parseInt(res[1]);
		}
		else if(boxOfresult.value.includes("-")){
            res = boxOfresult.value.split('-');
            return parseInt(res[0]) - parseInt(res[1]);
		}
		else if(boxOfresult.value.includes("/")){
            res = boxOfresult.value.split('/');
            return parseInt(res[0]) / parseInt(res[1]);
		}
		else if(boxOfresult.value.includes("*")){
            res = boxOfresult.value.split('*');
            return parseInt(res[0]) * parseInt(res[1]);
		}
        else{
            boxOfresult.value = ""
        }
}


function calcButton(){	
    if (opperationButton() == undefined ) {
         boxOfresult.value = ""
    }
    else if(isNaN(opperationButton())){
        boxOfresult.value =  ""
    }
    else{
        boxOfresult.value =opperationButton(); 
    }
   
}
	
function clearButtonAll()
{
    boxOfresult.value=" ";	
}
function clearButton()
{
    boxOfresult.value=boxOfresult.value.slice(0, -1);	
}