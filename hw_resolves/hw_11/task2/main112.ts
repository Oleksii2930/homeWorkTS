// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    image: string;
    [key: string]: string | number | string[];
};
const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '2');

//@ts-ignore
const target = document.getElementsByClassName('target')[0] as HTMLDivElement;
fetch(url)
    .then(value => value.json())
    .then((recipesObject: { recipes: Recipe[] }) => {
        const {recipes} = recipesObject;
        for (const recipe of recipes) {
            console.log(recipe);
            const recipeDiv:HTMLDivElement = document.createElement('div');
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])) {
                    const arrayAndTitleDiv:HTMLDivElement = document.createElement('div');
                    const title:HTMLDivElement = document.createElement('div');
                    title.innerText = `${recipeKey}:`;
                    const ol:HTMLOListElement = document.createElement('ol');
                    const array:string[] = recipe[recipeKey];
                    for (const item of array) {
                        const li:HTMLLIElement = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    arrayAndTitleDiv.append(title, ol);
                    recipeDiv.appendChild(arrayAndTitleDiv);
                } else {
                    if (recipeKey !== 'image') {

                        const keyDiv:HTMLDivElement = document.createElement('div');
                        keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                        recipeDiv.appendChild(keyDiv);
                    }
                }
            }

            const img:HTMLImageElement = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);


            target.appendChild(recipeDiv);
        }


    });



