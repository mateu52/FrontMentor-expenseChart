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
            let textTool = document.createElement('span')
            textTool.classList.add('textHover')
            textTool.innerHTML = (post.amount)
            //DaysList.appendChild(textTool)
            //Dzien.classList.add('tooltext')
            DaysList.appendChild(Dzien);

        })
    })