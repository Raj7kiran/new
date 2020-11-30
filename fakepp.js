var faker = require('faker');

var randomName = faker.address.zipCode(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
console.log(randomName);