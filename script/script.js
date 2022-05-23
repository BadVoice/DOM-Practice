    // создать элемент div 
    const div = document.createElement('div')

    //console.log(div)

    // добавить к нему класс wrapper 
    div.classList.add('wrapper')

    // Поместить его внутрь тега body 
    const body = document.querySelector('body')
    body.appendChild(div);
    console.log(body)

    //создать заголовок H1 "DOM (Document Object Model")
    const header = document.createElement('h1')
    header.textContent = ('DOM (Document Object Model)')

    // Добавить H1 перед div с классом wrapper 
    div.insertAdjacentElement('beforebegin', header)

    // Создать список <ul></ul> 
    // Добавить в него 3 элемента с текстом "один, два, три"
    const listItem = ` 
        <ul>
        <li>один</li>
        <li>два </li>
        <li>три</li>
        </ul>
    `;
    //поместить список внутрь элемента с классом wrapper

    div.innerHTML = (listItem)

    //==================================================
    // Создать изображение 
    const img = document.createElement('img')
        // Добавить атрибут src
    img.src = 'https://picsum.photos/240'
        // Добавить атрибут width со значением 240
    img.width = 240
        // добавить класс super 
    img.classList.add('super')
        // добавить свойство alt 
    img.alt = ('Super Man')
        // поместить изображение внутрь элемента с классом wrapper 
    div.appendChild(img);
    // Используя HTML строку, создать DIV c классом pDiv + с 2-мя параграфами
    const elemHTML = ` 
        
        <div class='pDiv'> 
        <p> параграф </p>
        <p> параграф </p>
        </div>

    `
        // Поместить этот DIV до элемента <ul></ul>
    const ullist = div.querySelector('ul')
    ullist.insertAdjacentHTML('beforebegin', elemHTML)
        // Добавить для 2-го параграфа класс text 
    const pDiv = document.querySelector('.pDiv')
    pDiv.children[1].classList.add('text')
        // Удалить 1-й параграф 
    pDiv.children[0].remove()


    // Создать функцию generateAutoCard



    const generateAutoCard = (brand, color, year) => {
        const curDate = new Date()
        const curYear = curDate.getFullYear()
        return ` 
        <div class='pDiv'> 
        <h2> ${brand} ${year}</h2>
        <p> Автомобиль ${brand} - ${year} года. Возраст авто - ${curYear - year} лет </p>
        <p> Цвет: ${color} </p>
        <button type='button' class='btn'>Удалить</button>
        </div> 
        
        `
    }


    // Создать новый div с классом autos 
    const carsDiv = document.createElement('div')
    carsDiv.classList.add('autos')

    // Создать 3 карточки авто, используя функцию generateAutoCard 

    const carsList = [
        { brand: 'Tesla', year: 2015, color: 'красный' },
        { brand: 'Lexus', year: 2016, color: 'Серый' },
        { brand: 'Nissan', year: 2012, color: 'Черный' }
    ]

    const carsHTML = carsList.map(car => {
        return generateAutoCard(car.brand, car.color, car.year)
    })

    // Поместить эти 3 карточки внтурь DIV с классом autos 

    carsDiv.innerHTML = carsHTML
        // Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper

    div.insertAdjacentElement('beforebegin', carsDiv)

    // При клике на кнопку - удалять карточку из структуры DOM 
    // 1. Выбрать все кнопки 
    // 2. Создать функцию удаления 
    // 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку 


    const buttons = document.querySelectorAll('.btn')

    function handleClick(e) {
        const currentButton = e.currentTarget
        currentButton.closest('.pDiv').remove()
    }

    buttons.forEach(button => {
        button.addEventListener('click', handleClick)


    })