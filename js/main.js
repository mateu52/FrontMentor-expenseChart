const ChartElements = document.querySelector("chartEl");
const DaysList = document.querySelector('div.daysList');
let Lista = "";
fetch('/data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            console.log(post.day);Lista += post.day + " ";console.log(Lista);
            let Dzien = document.createElement('p');
            Dzien.classList.add('Day');
            //Dzien.innerHTML = post.day;
            
            Dzien.style.height = (post.amount+ "px");
            DaysList.appendChild(Dzien);
            
            // let Chart  = document.createElement('p');
            // Chart.classList.add('chart');
            // Chart.innerHTML = "HAHHAH"
            // // DaysList.style.height = (post.amount+ "px");
            // ChartElements.appendChild(Chart);

            //document.getElementsByClassName('.DaysList').appendChild(DaysList);

        })
    })