function getDayWeek (data) { 
  let day = data.getDay()
    if (day == 0) day = 7
    return day -1;
} 

function getMonth (month) {       
  if (month == 1) {month = 0}
  else if ( 1 < month <= 12) {month = month - 1}
  return month;
}

Date.prototype.daysInMonth = function() {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
}

let today_year_array = [];
function date_Drum_f () {
  
  let today_year = new Date().getFullYear();
  for(let i = 5; i > 0; i--) {
    let cycle_down = today_year - i;
    // let create_cycle_down = document.createElement('div');
    // create_cycle_down.appendChild(modal_window);
    console.log(cycle_down);
    today_year_array.push(cycle_down);
  }
  
  today_year_array.push(today_year);
  console.log(today_year);
  // let create_today_year = document.createElement('div');
  // create_today_year.appendChild(modal_window);
  
  for(let i = 1; i < 6; i++) {
    let cycle_up = today_year + i;
    // let create_cycle_up = document.createElement('div');
    // create_cycle_up.appendChild(modal_window);
    console.log(cycle_up);
    today_year_array.push(cycle_up);
  }  
  return today_year_array;  
}


let button_Choose_Year = document.createElement('div'); // Выбор года
start_Choose_Year_f(button_Choose_Year);

function start_Choose_Year_f(button_Choose_Year) {  
    
  button_Choose_Year.setAttribute('type', 'button')
  button_Choose_Year.setAttribute('class', 'button_Choose_Year')  
  button_Choose_Year.innerHTML = "Choose Year" //new Date().getFullYear()    
  document.body.prepend(button_Choose_Year);  

  button_Choose_Year.onclick = function () {    
    button_Choose_Year.remove()
    let create_Window = document.createElement('div');
    create_Window.setAttribute('class', 'create_Window')
    let getFullYear = new Date().getFullYear();
    let array_Five_Nearest_Years = [getFullYear += 2, getFullYear -= 1, getFullYear -= 1, getFullYear -= 1, getFullYear -= 1]

    for (let i = 0; i < array_Five_Nearest_Years.length; i++) {
      let nearby_Year = document.createElement('div')
      nearby_Year.innerHTML = array_Five_Nearest_Years[i]      
      nearby_Year.setAttribute('id', 'year_' + i)
      nearby_Year.setAttribute('type', 'button')

      create_Window.prepend(nearby_Year)
      document.body.prepend(create_Window)

      nearby_Year.onclick = function () { // Выбор даты.          
        create_Window.remove()
        let select_Desir_Year = document.createElement('div')
        select_Desir_Year.setAttribute('class', 'select_Desir_Year')
        select_Desir_Year.innerHTML = array_Five_Nearest_Years[i]
        document.body.prepend(select_Desir_Year)       
       
        input_Year = array_Five_Nearest_Years[i];//+prompt("Введите нужный вам год", );

        createTable(input_Year, input_Month);        

        select_Desir_Year.onclick = function () {
          let button_Choose_Year = document.createElement('div')
          start_Choose_Year_f(button_Choose_Year)
          select_Desir_Year.remove();
          document.querySelector('table').remove();                             
        }
      }

      create_Window.onwheel = function (create_Window) {      // Поиск даты вращение колесиком вверх/вниз.
        let elem_0 = document.getElementById('year_0');
        let elem_1 = document.getElementById('year_1');
        let elem_2 = document.getElementById('year_2');
        let elem_3 = document.getElementById('year_3');
        let elem_4 = document.getElementById('year_4');
        if (create_Window.deltaY < 0) {          
          array_Five_Nearest_Years = [
            elem_0.innerHTML = +elem_0.innerHTML - 1,
            elem_1.innerHTML = +elem_1.innerHTML - 1,
            elem_2.innerHTML = +elem_2.innerHTML - 1,
            elem_3.innerHTML = +elem_3.innerHTML - 1,
            elem_4.innerHTML = +elem_4.innerHTML - 1
          ]          
        }
        else if (create_Window.deltaY > 0) {
          array_Five_Nearest_Years = [
            elem_0.innerHTML = +elem_0.innerHTML + 1,
            elem_1.innerHTML = +elem_1.innerHTML + 1,
            elem_2.innerHTML = +elem_2.innerHTML + 1,
            elem_3.innerHTML = +elem_3.innerHTML + 1,
            elem_4.innerHTML = +elem_4.innerHTML + 1
          ]
        }
      }
    }
  }
}

/*
let button_Choose_Month = document.createElement('div'); // Выбор года
start_Choose_Month_f(button_Choose_Month);

function start_Choose_Month_f(button_Choose_Month) {      
  button_Choose_Month.setAttribute('type', 'button')
  button_Choose_Month.setAttribute('class', 'Choose_Month')
  let get_Month_today = new Date().getMonth();
  let array_Nearest_Month = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"]  
  button_Choose_Month.innerHTML = array_Nearest_Month[get_Month_today]    
  document.body.prepend(button_Choose_Month);  

    button_Choose_Month.onclick = function () {
      button_Choose_Month.remove()
      let create_Window_Month = document.createElement('div');
      create_Window_Month.setAttribute('id', 'create_Window_Month')         
      for (let i = get_Month_today + 1; i >= get_Month_today - 1; i--) {
        let nearby_Month = document.createElement('div')
        nearby_Month.innerHTML = array_Nearest_Month[i]            
        nearby_Month.setAttribute('id', 'month_' + i)
        nearby_Month.setAttribute('type', 'button')

        create_Window_Month.prepend(nearby_Month)
        document.body.prepend(create_Window_Month)
        console.log(document.getElementById('month_' + i)) 
        
        create_Window_Month.onwheel = function (create_Window_Month) {      // Поиск даты вращение колесиком вверх/вниз.
          let elem_2 = document.getElementById('month_2');
          let elem_3 = document.getElementById('month_3');
          let elem_4 = document.getElementById('month_4');
          console.log(document.getElementById('month_2'))          
          if (create_Window_Month.deltaY < 0) {
            //console.log(array_Nearest_Month[i])
            array_Nearest_Month = [
              elem_2.innerHTML = +elem_2.innerHTML - 1,
              elem_3.innerHTML = +elem_3.innerHTML - 1,
              elem_4.innerHTML = +elem_4.innerHTML - 1             
            ]
          }
          else if (create_Window_Month.deltaY > 0) {
            array_Nearest_Month = [
              elem_2.innerHTML = +elem_2.innerHTML + 1,
              elem_3.innerHTML = +elem_3.innerHTML + 1,
              elem_4.innerHTML = +elem_4.innerHTML + 1              
            ]
          
        }
      }
    }
  }
}
*/
 let input_Month = 4//+prompt("Введите нужный вам месяц", );
 
//let calendar = document.querySelector('#calendar');
//function createTable (parent,setYear, setMonth) { ... }

function createTable (setYear, setMonth) {   
  let table = document.createElement('table');  
  table.setAttribute("class", "calendar");
  table.setAttribute("border", "1");
  table.setAttribute("cellpadding", "10"); 
  table.setAttribute("cellspacing", "0");
  
  let titleTable = document.createElement('caption');
  titleTable.setAttribute("class", "titleTable");
  table.appendChild(titleTable);
  titleTable.innerHTML = setMonth + ". " + setYear;
  
  let button_left = document.createElement('button');
  let img_button_left = document.createElement('img');
  img_button_left.setAttribute("src", "pictures/buttonLeft.png");
  button_left.appendChild(img_button_left);
  
  button_Choose_Year.onclick = function () {
    document.body.querySelector('table').remove()
    start_Choose_Year_f(button_Choose_Year);           
  } 

  button_left.onclick = function() { 
    document.querySelector('table').remove();
    input_Month--;
    if (input_Month == 0) {
      input_Year--;
      input_Month = 12;
    }    
    if (input_Year != setYear) {        
      if (document.querySelector('div.select_Desir_Year') != null) {
        document.querySelector('div.select_Desir_Year').remove()
      }        
        start_Choose_Year_f(button_Choose_Year);                
    }  
    createTable(input_Year, input_Month);
  } 

  let button_right = document.createElement('button'); 
  let img_button_right = document.createElement('img');
  img_button_right.setAttribute("src", "pictures/buttonRight.png");
  button_right.appendChild(img_button_right);
  
  button_right.onclick = function() {
      document.querySelector('table').remove();      
      if (input_Month == 12) {
        input_Year++;
        input_Month = 0;
      }
      if (input_Year != setYear /*&& input_Year == "Choose Year"*/) {
        if (document.querySelector('div.select_Desir_Year') != null) {               
        document.querySelector('div.select_Desir_Year').remove() 
        }       
          start_Choose_Year_f(button_Choose_Year);                
      }      
      input_Month++;     
      createTable(input_Year, input_Month);        
  }
     
  let valueDays = 0;
  let counter_Days_Last_Month = 0;
  for (let i = 0; i <= 7; i++) {
    let tr = document.createElement('tr');
     
    for (let j = 0; j < 7; j++) {
      let td = document.createElement('td');
      tr.appendChild(td);
      
      Date.prototype.daysInMonth = function() {
        return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
      };      
                
        if(i == 0) { 
          if (j == 0) td.appendChild(button_left);

          if (j>=1 && j<=5) {          
            let name = ["-", "CAL", "EN", "DAR", "-"];
            td.innerHTML = name[j-1];                          
          }
          
          if (j == 6) td.appendChild(button_right);                              
        }

        else if(i==1) {
          let nameDayWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];               
          td.innerHTML = nameDayWeek[j];             
        }            
        
        else if(i!=1) {                                     
          valueDays++;  
          let get__Month = getMonth(setMonth);                  
          let dat = new Date(setYear, get__Month, valueDays);                                    
          td.setAttribute("class", "days_this_Mounth");     
          td.innerHTML = dat.getDate(); 
            if(valueDays == new Date().getDate() && get__Month == new Date().getMonth() && setYear == new Date().getFullYear()) {
              td.innerHTML = dat.getDate();
              td.setAttribute("class", "today");
            }                       
                          
            else if (i==2 && j<getDayWeek(dat)) {              
              let result_days_Last_Mounth = 1 - getDayWeek(dat) + counter_Days_Last_Month;                                 
              let days_Last_Mounth = new Date(setYear, get__Month, result_days_Last_Mounth); 
              counter_Days_Last_Month++;             
              td.innerHTML = days_Last_Mounth.getDate();                             
              td.setAttribute("class", "days_Last_Mounth");                 
              valueDays--;                    
            }  
                          
            else if (valueDays > new Date(setYear, setMonth, 0).getDate()) {               
              td.setAttribute("class", "days_Next_Mounth");                
              td.innerHTML = dat.getDate();                                     
              i = 7;                               
            }               
        }               
      }    
    table.appendChild(tr);
  }  
  document.body.appendChild(table);
  //parent.appendChild(table);
}
  

//createTable(calendar, years_Choose_f(), input_Month);

