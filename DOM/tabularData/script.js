//exercise 1
// add a new row to the table
const newRow = document.createElement('tr');;
['6','Sean','Reyes','@sreyes'].forEach(colText =>
    {
        const col = document.createElement('td');
        col.innerText = colText;
        newRow.appendChild(col);
    })

document.querySelector('table').appendChild(newRow);

// exercise 2

document.querySelector('table tr:nth-child(4) td:nth-child(4)')
.innerText = '@dixonl';

// exercise 3

const rosa = document.querySelector('table tr:nth-child(5)');
document.querySelector('table tr:nth-child(1)')
.insertAdjacentElement('afterEnd', rosa);

Array.from(document.querySelectorAll('table tr td:nth-child(1)'))
.forEach((col, index)=> col.innerText = index+1);

// exercise 4

Array.from(document.querySelector('table tr'))
.forEach(row=>{
    const handleCol = row.querySelector('td:nth-child(4),th:nth-child(4)');
    const indexCol = row.querySelector('td:nth-child(1), th:nth-child(1)');
    indexCol.insertAdjacentElement('afterEnd', handleCol);

})

// exercise 5
Array.from(document.querySelectorAll('table tr'))
.forEach((row,index)=>{
    if((index+1)%2 === 0){
        row.style['background-color']='#f2f2f2';
    }
})
// if u use bootstrap
//document.querySelector('table').classList.add('table-stripped');