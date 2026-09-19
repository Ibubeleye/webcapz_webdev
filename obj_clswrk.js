let Cars = [
    {
        Image: "",
        name: "Audi",
        model: "R8",
        year: 2021,
        color: "Black",
        price: 200000 
    },
    {
        Image: "",
        name: "Porsche",
        model: "Turbo S",
        year: 2024,
        color: "Black",
        price: 310000
    },
    {
        Image: "",
        name: "Dodge",
        model: "Challenger",
        year: 2014,
        color: "Blue",
        price: 40000
    },
    {
        Image: "",
        name: "BMW",
        model: "M3 Competition",
        year: 2024,
        color: "White",
        price: 87000
    },
    {
        Image: "",
        name: "Ferarri",
        model: "Purosangue",
        year: 2026,
        color: "Black",
        price: 650000
    },
    {
        Image: "",
        name: "Range Rover",
        model: "Evoque",
        year: 2019,
        color: "White",
        price: 45000
    },
    {
        Image: "",
        name: "Cadilac",
        model: "Escalade",
        year: 2022,
        color: "Black",
        price: 70000
    },
    {
        Image: "",
        name: "Mercedes Benz",
        model: "C300",
        year: 2019,
        color: "White",
        price: 35000
    },
    {
        Image: "",
        name: "Lexus",
        model: "ES 350",
        year: 2017,
        color: "Silver",
        price: 45000
    },
    {
        Image: "",
        name: "Lexus",
        model: "RX 350",
        year: 2019,
        color: "Grey",
        price: 45000
    },
    {
        Image: "",
        name: "Range Rover",
        model: "Evoque",
        year: 2019,
        color: "White",
        price: 45000
    },
    {
        Image: "",
        name: "Range Rover",
        model: "Evoque",
        year: 2019,
        color: "White",
        price: 45000
    },
]


Cars.forEach((car)=>{
    let carsdiv = document.querySelector('.carsdiv')
    // create a div that will hold the object
    let div1 = document.createElement('div');
    div1.classList.add('cars')

    div1.innerHTML = `
    <img src = " {car.name}">
    <h3>Name: ${car.name}</h3>
    <p>Model: <b>${car.model}</b></p>
    <p>Year: ${car.year}</p>
    <p>Color: ${car.color}</p>
    <p>Price: $${car.price.toLocaleString()}</p>
    `
    carsdiv.appendChild(div1)


})
