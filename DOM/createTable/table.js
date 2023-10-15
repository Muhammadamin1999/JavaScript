function generateTable(){
    // create <table> element and a <tbody> element
    const tbl = document.createElement('table');
    const tblBody = document.createElement('tbody');

    //creating all cells

    for(let i = 0; i < 2; i++){
        // create a table row
        const row = document.createElement('tr');
        for(let j=0; j<2; j++){
            const cell= document.createElement('td');
            const cellText = document.createTextNode(`cell in row ${i}, column ${j}`)
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
      tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to 2
    tbl.setAttribute('border','2');

}
