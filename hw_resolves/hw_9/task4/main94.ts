// – Є масив
type CoursesAndDurationArrayType = {
    title: string,
    monthDuration: number,
}
let coursesAndDurationArray:CoursesAndDurationArrayType[] = [

 {title: 'JavaScript Complex', monthDuration: 5},

 {title: 'Java Complex', monthDuration: 6},

 {title: 'Python Complex', monthDuration: 6},

 {title: 'QA Complex', monthDuration: 4},

 {title: 'FullStack', monthDuration: 7},

 {title: 'Frontend', monthDuration: 4}

];
//
//
//
// // За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// //
// //     Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
const div:HTMLDivElement = document.createElement('div');
const h2:HTMLHeadingElement = document.createElement('h2');
h2.innerText = course.title;
const p:HTMLParagraphElement = document.createElement('p');
p.innerText = course.monthDuration.toString();
div.append(h2, p);
//
document.body.appendChild(div);
}