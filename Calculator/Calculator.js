 /*jshint esversion: 6 */
 
 function firstValue() {
        let value_1 = Number (prompt(" Введите число: "));
        if (Number.isInteger(value_1)) {                           
               return value_1;    
        }
        else {  
                alert("Вы ввели неправельное! Введите число!");
                let otherValue_1 = firstValue();
                return otherValue_1;                     
        }        
}

function arithmeticSign() {
        let sing = prompt (" Введите один арифметический знак( +, -, *, / ): "); 

        switch (sing) {
                case "+":
                        return sing;

                case "-":
                        return sing;

                case "*":
                        return sing;

                case "/":
                        return sing;                  

                default:

                        alert("Вы ввели неправельно, введите один из арифметических знаков( +, -, *, / ): ");
                        let otherSing = arithmeticSign();
                        return otherSing; 
        }
}        


function secondValue() {
        let value_2 = Number (prompt (" Введите 2-ое число: "));
        if (Number.isInteger(value_2)){  
                return value_2;         
        }
        else {
                alert("Вы ввели неправельно! Введите число!");
                let otherValue_2 = secondValue();
                return otherValue_2; 
        }
}

let calculateValue_1 = firstValue();

let computingSign = arithmeticSign();

let calculateValue_2 = secondValue();

let calc_Result;

switch (computingSign) {

        case "+":                 
           calc_Result = calculateValue_1 + calculateValue_2;            
            break;

        case "-": 
            calc_Result = calculateValue_1 - calculateValue_2;            
            break;
            
        case "*": 
            calc_Result = calculateValue_1 * calculateValue_2;            
            break;

        case "/": 
            calc_Result = calculateValue_1 / calculateValue_2;   
            break; 
        
}


alert("Ответ: " + calc_Result);

/* Леха как вывести через document.write чтобы валидатор не ругался на document.write??? 

Или расскажи как ты выводишь?

document.write("Ответ: " + calc_Result);
*/

