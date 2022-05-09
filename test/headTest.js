const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([11,12,14]), 11);
assertEqual(head(["Kelly", "Pam", "Jim"]), "Kelly");
assertEqual(head([]), 5);
