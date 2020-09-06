function Pizza(type, size, crust, toppings) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function () {
    return this.sizePrice() + this.crustPrice() + this.toppingsPrice();
}
Pizza.prototype.toppingsPrice() = function () {
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
    else if (this.size === "medium")
        if (this.toppings === "pepperoni") {
            return 5000
        } else if (this.toppings === "mushrooms") {
            return 4500
        } else if (this.toppings === "bacon") {
            return 4500
        } else if (this.toppings === "cheese") {
            return 5000
        } else {
            return 4000
        }
    else {

        if (this.toppings === "pepperoni") {
            return 4000
        } else if (this.toppings === "mushrooms") {
            return 3500
        } else if (this.toppings === "bacon") {
            return 3500
        } else if (this.toppings === "cheese") {
            return 4000
        } else {
            return 2000
        }
    }


}
Pizza.prototype.sizePrice() = function () {
    if (this.size === "large") {
        return 9000
    } else if (this.size === "medium") {
        return 7000
    } else {
        return 5000
    }
}
Pizza.prototype.crustPrice() = function () {
    if (this.size === "large")
        if (this.crust === "crispy") {
            return 3000
        } else if (this.crust === "stuffed") {
            return 4000
        } else {
            return 2000
        }
    else if (this.size === "medium") {
        if (this.crust === "crispy") {
            return 2500
        } else if (this.crust === "stuffed") {
            return 3000
        } else {
            return 1500
        }
    }
    else {
        if (this.crust === "crispy") {
            return 2000
        } else if (this.crust === "stuffed") {
            return 2500
        } else {
            return 1000
        }
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