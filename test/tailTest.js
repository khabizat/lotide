const tail = require('../tail');
const assertEqual = require('../assertEqual');

const fruits = ['apple', 'orange', 'pear', 'watermelon'];
tail(fruits);
assertEqual(fruits.length, 4);