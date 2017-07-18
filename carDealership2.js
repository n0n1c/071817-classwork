function car(category, rental_price, available) {
    this.category = category;
    this.rental_price = rental_price;
    this.available = available;
}

var sedan = new car("sedan", 50, "yes");
var suv = new car("suv", 100, "yes");
var sports = new car("sports", 150, "no");

function rentCar(type) {
    if (type.available === "yes") {
        console.log("Congrats, the " + type.category + " is available, do you want to rent it");
    }
    else {
        console.log("Uh ooh, no car for you!!!");
    }
}

rentCar(sports)