function Pizza(type, size, crust, toppings) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function () {
    return this.SizePrice() + this.CrustPrice() + this.ToppingsPrice();
}
Pizza.prototype.getToppingsPrice() = function () {
    if (this.size === "large")
        if (this.toppings === "pepperoni") {
            return 7000
        } else if (this.toppings === "mushrooms") {
            return 5000
        } else if (this.toppings === "bacon") {
            return 5000
        } else if (this.toppings === "cheese") {
            return 6000
        } else {
            return 4000
        }


}
$(document).ready(function () {
    $("form#Choose").submit(function (event) {
        event.preventDefault();

        var pizzaSize = $(this).find(".size").val();
        var pizzaCrust = $(this).find(".crust").val();

        var newPizza = new Pizza(pizzaSize, pizzaCrust,);


        $("#for-toppings").each(function () {
            var pizzaToppingsLarge = $(this).find(".toppingsLarge").val();
            var pizzaToppingsMedium = $(this).find(".toppingsMedium").val();
            var pizzaToppingsSmall = $(this).find(".toppingsSmall").val();
            var toppingsPizza = new Toppings(pizzaToppingsLarge, pizzaToppingsMedium, pizzaToppingsSmall)
            newPizza.toppings.push(toppingsPizza);

        });
        $("ul#pizza").append("<li><span class='pizzalist'>" + newPizza.pizzaType() + "</span></li>")

        $(".pizzalist").last().click(function () {
            $("#show-pizza").show();
            $("#show-pizza h2").text(newPizza.size);
            $("#size").text(newPizza.size);
            $("#crust").text(newPizza.crust);
            $("ul#toppings").text("");
            newPizza.toppings.forEach(function (topping) {
                $("ul#toppings").append("<li>" + topping.pizzaToppings() + "</li>");
            });
        });

    })
})