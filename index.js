// * // ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []

// * // 1. Сохранить самый дорогой товар в переменную`max`*

// * // 2. Сохранить самый дешевый товар в переменную`min`*

// * // 3. Сохранить общую цену без скидок в переменную`total`*

// * // 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// * // 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// * // 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * // * Писать весь код в функции `setup()`*

// * // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
    // Task 1
    max = arr.reduce((a,b) => {
        if(a.price > b.price) {
            return a
        } else {
            return b
        }
    })
    
    // Task 2
    min = arr.reduce((a,b) => {
        if(a.price < b.price) {
            return a
        } else {
            return b
        }
    })

    for(let item of arr) {

        // Task 3 
        total += item.price


        // Task 4
        totalSale = Math.round((total * discount) / 100)


        // Task 5
        arr_sale.push({
            price: item.price - Math.round((item.price * discount) / 100),
            name: item.name 
        })
    }

    // Task 6
    average = Math.round(total / arr.length) 

    
    console.log(max); 
    console.log(min);
    console.log(total);
    console.log(totalSale);
    console.log(arr_sale);
    console.log(average);
}

setup()

