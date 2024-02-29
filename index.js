var searchParams = new URLSearchParams(window.location.search)
fetch(`https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects`).then(res => res.json()).then(data => console.log(data.find(pro => pro.uuid === searchParams.get(`id`))))

fetch(`https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects`).then(res => res.json()).then(data => document.querySelector(`#Simplifysection h1`).textContent = data.find(pro = pro.uuid === searchParams.get(`id`)).name)