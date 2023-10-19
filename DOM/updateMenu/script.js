//exercise 1 add p1 to p1 then delete p1
const paragraps = document.querySelectorAll('p');
paragraps[1].insertAdjacentHTML('afterbegin', paragraps[0].innerText);
paragraps[0].remove();

// exercise 2
// reduce the font size of the paragraph text to be half the size of the menu

const menuItem = document.querySelector('.menu ul li');
const menuItemFontSize = parseInt(window.getComputedStyle(menuItem).getPropertyValue('font-size'));
document.querySelector('p').style['font-size'] = `${menuItemFontSize/2}px`;

// exercise 3
// swap menu items

const services = document.querySelector('.menu ul li:nth-child(3)');
const about = document.querySelector('.menu ul li:nth-child(2)');
about.insertAdjacentElement('beforebegin', services);

// exercise 4
// create the following new entries in the menu: FAQs , Pricing
const menu = document.querySelector('.menu ul');
const faqElem = document.createElement('li');
const pricingElem = document.createElement('li');
faqElem.innerText = 'FAQs';
pricingElem.innerText = 'Pricing';
menu.appendChild(faqElem);
menu.appendChild(pricingElem);

// exercise 5
// add a hover effect to the menu item, while hovering background should change

const hoverEffect = (event)=>{
    const elem = event.target;
    elem.style['background-color'] = '#f2f2f2';
    elem.style['font-size'] = '20px';

};

const normalEffect = (event)=>{
    const elem = event.target;
    elem.style['background-color'] = '#fff';
    elem.style['font-size']='16px';

};

Array.from(document.querySelectorAll('.menu ul li'))
 .forEach(elem=>{
    elem.addEventListener('mouseover', hoverEffect);
    elem.addEventListener('mouseleave', normalEffect);

 });
 