const shop = {
    id: 1,
    name: 'laptop',
    brand: 'hp',
    price: 45000
}
console.log(shop);

// JSON = JavaScript Object Notation.
const shopJson = JSON.stringify(shop);
console.log(shopJson);

const restaurant = {
    owner: 'Rakib',
    address: {
        street: 'west shewrapara',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    menuItems : ['Burger', 'Pizza', 'Fried chicken', 'Soup'],
    isOpen: true,
    isNew: true
}
console.log(restaurant);
const restaurantJson = JSON.stringify(restaurant);
console.log(restaurantJson);
const restaurantObject = JSON.parse(restaurantJson);
console.log(restaurantObject);
