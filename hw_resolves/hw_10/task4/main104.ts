
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// sessionsList.push(new Date());
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// index.ts
const sessionsList: string[] = JSON.parse(localStorage.getItem('sessionsList') || '[]');

// Додаємо дату відвідування у вигляді рядка
sessionsList.push(new Date().toISOString());

// Зберігаємо назад у localStorage
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
