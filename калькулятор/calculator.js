let container = document.querySelector('#container');

let picturesNumbers = ["картинки для калькуляторо/00.jpg", "картинки для калькуляторо/01.jpg", "картинки для калькуляторо/02.jpg", 
"картинки для калькуляторо/03.jpg", "картинки для калькуляторо/04.jpg", "картинки для калькуляторо/05.jpg", "картинки для калькуляторо/06.jpg", 
"картинки для калькуляторо/07.jpg", "картинки для калькуляторо/08.jpg", "картинки для калькуляторо/09.jpg"];

function pictures_Numbers_f(picture) {
    return picturesNumbers[picture];
}

let arithmeticSigns_Array = ["картинки для калькуляторо/Арифмет. знаки/plus.png", "картинки для калькуляторо/Арифмет. знаки/minus.png",
 "картинки для калькуляторо/Арифмет. знаки/multiplication.png", "картинки для калькуляторо/Арифмет. знаки/division.png"];

function arithmetic_Signs_f(picture) {
    return arithmeticSigns_Array[picture];
}

let array_sings = ["+", "-", "*", "/"];

function arithmetic_NumbSing_f(numbSing) {
    return array_sings[numbSing];
}

let intermediate_array = []; // массив для Промежуточного числа.

function Return_All_Value_f(array, Value) {   // Функция преобразует Промежуточный массив(intermediate_array) в одно значение. 
    for (let i = 0; i < array.length; i++) {                                                  
        Value = Value + array[i];        
    }    
firstNumbCalc = Value;                        
Value = "";   
return firstNumbCalc;     
}

function Replay_equally_f(array, sing_1, sing_2) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] == sing_1 || sing_2) {
            switch (array[j]) {
                case sing_1: 
                    let NumberOneMultiply = +array[j-1];
                    let NumberTwoMultiply = +array[j+1];
                    let resultMultiply;
                    if (sing_1 == "*") resultMultiply = NumberOneMultiply * NumberTwoMultiply;
                    else if (sing_1 == "/") resultMultiply = NumberOneMultiply / NumberTwoMultiply;
                    else if (sing_1 == "+") resultMultiply = NumberOneMultiply + NumberTwoMultiply;
                    else if (sing_1 == "-") resultMultiply = NumberOneMultiply - NumberTwoMultiply;
                    array.splice(array.indexOf(sing_1)-1, 3, resultMultiply);
                    console.log(array);
                    Replay_equally_f(array, sing_1, sing_2);
                break;

                case sing_2:
                    let NumberOneDivide = +array[j-1];
                    let NumberTwoDivide = +array[j+1];
                    let resultDivide;
                    if (sing_2 == "*") resultDivide = NumberOneDivide * NumberTwoDivide;
                    else if (sing_2 == "/") resultDivide = NumberOneDivide / NumberTwoDivide;
                    else if (sing_2 == "+") resultDivide = NumberOneDivide + NumberTwoDivide;
                    else if (sing_2 == "-") resultDivide = NumberOneDivide - NumberTwoDivide;                    
                    array.splice(array.indexOf(sing_2)-1, 3, resultDivide);
                    console.log(array);
                    Replay_equally_f(array, sing_1, sing_2);
                break;
            }
        }                    
    }
}
 
function data_preview_f(array) {
    let value = "";    
    for (let i = 0; i < array.length; i++) {         
        value; 
    }

    value = value + array;
    if (isNaN(value)) {
        value = value + "_";  // Добовляет на экран прочерк на место ввода значения.
    }

   return value.replace(/[\s.,%]/g, '');
}

function calculator_f(idElementaBody) {
    let memoryCalc = [];
    let array_data_preview = [];    
    let Value = "";
    let repetitionCounter = 0;    
    let table = document.createElement('table');        
    table.setAttribute("border", "1");
    table.setAttribute("cellspacing", "2"); 

    let button_equally = document.createElement('button');
    let img_button_equally = document.createElement('img');
    table.appendChild(button_equally);
    button_equally.appendChild(img_button_equally);
    img_button_equally.setAttribute("src", "картинки для калькуляторо/Арифмет. знаки/equally.png");
    img_button_equally.setAttribute("width", "20");
    img_button_equally.setAttribute("height", "40");

    let delete_last_element = document.createElement('button');    
    table.appendChild(delete_last_element);
    let img_delete = document.createElement('img');
    delete_last_element.appendChild(img_delete);
    img_delete.setAttribute("src", "картинки для калькуляторо/Арифмет. знаки/delete.png");
    img_delete.setAttribute("width", "20");
    img_delete.setAttribute("height", "40");

    delete_last_element.onclick = function () {
        console.log(memoryCalc + "  до if");        
        if (memoryCalc.length == 0){ 
        intermediate_array.pop();
        }  
        else 
        intermediate_array = [];
        memoryCalc = [];
        output_window.innerHTML = data_preview_f(array_data_preview);
    }   

    let output_window = document.createElement('div');
    container.appendChild(output_window);
    output_window.setAttribute("class", "output_window");   



        
    for (let j = 0; j < 3; j++) {
        let tr = document.createElement('tr');
        let k = 0;
        let ger = 3;
        if ( j == 1) { k = 3; ger = 6}
        if ( j == 2) { k = 6; ger = 10}

        for (k ; k < ger; k++) {
            let td = document.createElement('td');            
                    

   for (let i = k; i < ger; i++) { //Создает кнопки от 0 до 9. 
            
        let buttonNumbers = "button" + i;                          
        buttonNumbers = document.createElement('button');
        let img = document.createElement('img');                
        td.appendChild(buttonNumbers);
        if (i !=0 ) buttonNumbers.setAttribute("class", "buttonNumb");                 
        else buttonNumbers.setAttribute("class", "buttonNull");
        buttonNumbers.appendChild(img);
        td.setAttribute("width", "30");
        img.setAttribute("src", pictures_Numbers_f(i));
        img.setAttribute("width", "20");
        img.setAttribute("height", "40");
 
            
        buttonNumbers.onclick = function () { 
        array_data_preview.push(i);                                     
        output_window.innerHTML = data_preview_f(array_data_preview);  // выводит на экран введенное число.
         
        repetitionCounter = 0;
        intermediate_array.push(innerHTML = i);               
        console.log(intermediate_array + "  цифры");                                                                        
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
       
    }   
        button_equally.onclick = function () {
        memoryCalc.push(Return_All_Value_f(intermediate_array, Value));
        console.log(memoryCalc);
        Replay_equally_f(memoryCalc, array_sings[2], array_sings[3]);  // Вычисляет все числа со знаками "*" и "/" .
        Replay_equally_f(memoryCalc, array_sings[0], array_sings[1]);  // Вычисляет все числа со знаками "+" и "-" .
        if (memoryCalc.length == 1) {                                  
            output_window.innerHTML = memoryCalc;                      // Выводит на экран итог уравнения.
            }     
        }              
    //}    
    
    for (let i = 0; i < arithmeticSigns_Array.length; i++) {
        let buttonSigns = "button" + i;                          
        buttonSigns = document.createElement('button');
        let img = document.createElement('img');
        table.appendChild(buttonSigns);
        buttonSigns.setAttribute("class", "buttonSings");
        buttonSigns.appendChild(img);
        img.setAttribute("src", arithmetic_Signs_f(i));
        img.setAttribute("width", "20");
        img.setAttribute("height", "40");
        
        buttonSigns.onclick = function () {
                        
        if (repetitionCounter == 0) {   // Для ограничения подрядных арифметических знаков.
            array_data_preview.push(arithmetic_NumbSing_f(i));
            output_window.innerHTML = data_preview_f(array_data_preview); // выводит на экран введенное число.

            repetitionCounter++;
            intermediate_array.push(innerHTML = arithmetic_NumbSing_f(i));
            console.log(intermediate_array + "  знаки");

            //console.log(intermediate_array + "int"); 
               // if (intermediate_array.includes(innerHTML = arithmetic_NumbSing_f(i))) {   // Проверяет если ли в intermediate_array, один из элементов массива array_sings.
                intermediate_array.pop();  // Удаляет введенный знак который дублируется.
                //console.log(intermediate_array[i]);
                memoryCalc.push(Return_All_Value_f(intermediate_array, Value));
                //console.log(intermediate_array + "Number" + memoryCalc + "memor");                 
                intermediate_array = [];
                //firstNumbCalc = 0;
                //console.log(memoryCalc + "  mem");
                //}
            memoryCalc.push(innerHTML = arithmetic_NumbSing_f(i));                
            console.log(memoryCalc + "  - array memoryCalc после знака");
            } else {
                console.log("введите число или цифру!");
            }
        }
    }
              
    idElementaBody.appendChild(table);
}
calculator_f(container);

