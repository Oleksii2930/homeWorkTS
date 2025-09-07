// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом



const someForm = document.forms.namedItem('someForm') as HTMLFormElement;
//@ts-ignore
const target = document.getElementById('target') as HTMLDivElement;

someForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // отримуємо значення з полів форми
    const nameInput = someForm.elements.namedItem('name') as HTMLInputElement;
    const surnameInput = someForm.elements.namedItem('surname') as HTMLInputElement;
    const ageInput = someForm.elements.namedItem('age') as HTMLInputElement;

    const nameValue: string = nameInput.value;
    const surnameValue: string = surnameInput.value;
    const ageValue: number = parseInt(ageInput.value);

    const obj = { nameValue, surnameValue, ageValue };
    console.log(obj);

    // вивід у div
    target.innerText = `${obj.nameValue} ${obj.surnameValue} ${obj.ageValue}`;
});