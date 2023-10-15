function setBackground(){
    // now get all elements in the document
    const paragraphs = document.getElementsByTagName('p');

    // get the second p from the list
    const firstParagraph = paragraphs[0];
    const secondParagraph = paragraphs[1];

    // set the inline style
    firstParagraph.style.background = "yellow"
    secondParagraph.style.background = "red";
}
