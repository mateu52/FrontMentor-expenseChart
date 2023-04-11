const Day = document.getElementsByClassName('div.Day');
console.log('hello');

const DaysList = document.querySelector('.Daysweek')
DaysList.style.background = "lightblue";
let Lista = ""
fetch('/data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            console.log(post.day)
            Lista += post.day + " "
            console.log(Lista);
            let Dzien = document.createElement('p');
            Dzien.classList.add('Day');
            Dzien.innerHTML = post.day;
            DaysList.appendChild(Dzien);

            // DaysList.style.height = (post.amount+ "px");
            //document.getElementsByClassName('.DaysList').appendChild(DaysList);

        })
    })