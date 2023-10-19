// exercise 1 add 3 additional jobs

const job1 = document.querySelector('.jobs .jobs-card');
const job2 = job1.cloneNode(true);
const job3 = job1.cloneNode(true);
const job4 = job1.cloneNode(true);

job1.insertAdjacentElement('afterEnd', job2);
job1.insertAdjacentElement('afterEnd', job3);
job1.insertAdjacentElement('afterEnd', job4);

// exercise 2 
job2.querySelector('h3').innerText = 'Python Developer';
job3.querySelector('h3').innerText = 'Java Developer';
job4.querySelector('h3').innerText = 'JS Developer';


// exercise 3 

const jobs = document.querySelectorAll('.jobs .jobs-card')
document.querySelector('#jobs-listed span')
.innerText = jobs.length;

// exercise 4

document.querySelector('#search')
 .addEventListener('keyup',(event)=>{
    const elem = event.target;
    Array.from(document.querySelectorAll('.jobs .job-card'))
    .forEach(job=>{
        const jobTitle = job.querySelector('h3').innerText;
        if(!jobTitle.toLowerCase().includes(
            elem.value.toLowerCase()
        )){
            job.style.display = 'none';
        }else{
            job.style.display = 'block';
        }
    })
 })

 // exercise 5

 document.querySelector('#show-all')
 .addEventListener('click',()=>{
    Array.from(document.querySelectorAll('.jobs .job-card'))
    .forEach(job=> job.style.display = 'block');
    document.querySelector('#search').value = '';
 })