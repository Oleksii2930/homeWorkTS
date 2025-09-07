const table = document.getElementById('table') as HTMLTableElement;
//@ts-ignore
const tableGeneratorFrom = document.forms['tableGeneratorFrom'] as HTMLFormElement;

tableGeneratorFrom.onsubmit = function (e:SubmitEvent):void {
    table.innerText = '';
    e.preventDefault();
    const linesValue:number = +tableGeneratorFrom.lines.value ;
    const cellsValue:number = +tableGeneratorFrom.cells.value;
    const dataValue:string = tableGeneratorFrom.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        const tr:HTMLTableRowElement = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td:HTMLTableCellElement = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }

        table.appendChild(tr);

    }

};