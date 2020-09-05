function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
Pizza.prototype.pizzaType = function () {
    return this.size + " " + this.crust + "" + this.toppings;
}

$(document).ready(function () {

})