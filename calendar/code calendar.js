let daterwq = new Date(2023,12); 

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

let input_Year = +prompt("Введите нужный вам год", );
let input_Month = +prompt("Введите нужный вам месяц", );

let calendar = document.querySelector('#calendar');

function createTable (parent, setYear, setMonth) {   
  let table = document.createElement('table');
  table.setAttribute("border", "1");
  table.setAttribute("cellpadding", "10"); 
  table.setAttribute("cellspacing", "0");

  let titleTable = document.createElement('caption');
  table.appendChild(titleTable);
  titleTable.innerHTML = setMonth + ". " + setYear;
  
  let button_left = document.createElement('button');
  let img_button_left = document.createElement('img');
  img_button_left.setAttribute("src", "pictures/buttonLeft.png");
  button_left.appendChild(img_button_left);
  
  button_left.onclick = function() { 
    document.querySelector('table').remove();
    input_Month--;
    if (input_Month == 0) {
      input_Year--;
      input_Month = 12;
    }    
    createTable(calendar, input_Year, input_Month);
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
      input_Month++;     
      createTable(calendar, input_Year, input_Month);        
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
          if (j == 0)                                
          td.appendChild(button_left);  

          if (j>=1 && j<=5) {          
            let name = ["-", "CAL", "EN", "DAR", "-"];
            td.innerHTML = name[j-1];                          
          }
          // if (j>=1 && j<=4) {            
          //   if (j==1) {
          //   td.setAttribute("colspan", "5"); 
          //   let name = " CALENDAR " // ["-", "CAL", "EN", "DAR", "-"];
          //   td.innerHTML = name;
          //   }              
          // }

          if (j == 6) 
          td.appendChild(button_right);                              
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

            if (i==2 && j<getDayWeek(dat)) {
                let result_days_Last_Mounth = 1 - getDayWeek(dat) + counter_Days_Last_Month;                                 
                let days_Last_Mounth = new Date(setYear, get__Month, result_days_Last_Mounth); 
                counter_Days_Last_Month++;             
                td.innerHTML = days_Last_Mounth.getDate();
                td.setAttribute("class", "days_Last_Mounth"); 
                valueDays--;                    
              }  
                          
              else if (valueDays > new Date(setYear, setMonth, 0).getDate()) {               
                td.setAttribute("class", "days_Last_Mounth");                
                td.innerHTML = dat.getDate();                                     
                i = 7;                               
              }               
          }             
      }    
    table.appendChild(tr);
  }  
  parent.appendChild(table);
}
 
createTable(calendar, input_Year, input_Month);


/*
let data = new Date("2023-01-10");  
  
    function getDay (data) { 
        let day = data.getDay()
      if (day == 0) day = 7
        return day -1;
    }
    console.log("день" + data.getDay());
    console.log(getDay(data));

    function getMonth (data) { 
      let month = data.getMonth()    
      return month +1;
  }
  console.log("месяц" + getMonth (data));
  console.log(data.getMonth());

  function getFullYear (data) { 
    let year = data.getFullYear()    
    return year;
}
console.log("год" + getFullYear (data));
console.log(data.getFullYear());

var tableDiv = document.querySelector('tablers')

function calendar(element, valueString, valueColum) {
let table = document.createElement('table')
document.body.append(table)
table.setAttribute("border", "1")

for (let k = 0; k < valueString; k++) {
let trtr = document.createElement('tr')
table.append(trtr)
for (let j = 0; j < valueColum; j++) {
let tbtb = document.createElement('tb')
tbtb.innerHTML = j;
trtr.append(tbtb)
    }
  }
}

calendar(tableDiv, 7, 7);   */





/*
table.setAttribute("border", "-1");
table.setAttribute("cellpadding", "20"); 
table.setAttribute("cellspacing", "0");
for (let k = 0; k < 7; k++) {
  let trtr = document.createElement('tr')           
      for (let k = 0; k < 7; k++) {
          let tbtb = document.createElement('tb')
          tbtb.textContent =  getDay(data);  
      }
  }
}  
*/