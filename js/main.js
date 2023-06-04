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
            Dzien.style.height = (post.amount+ "px");
            DaysList.appendChild(Dzien);

        })
    })
