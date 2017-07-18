var sedan: {
        pricePerDay: 50,
        total: 100,
        rented: 100,
        available: false
    }
var suv: {
        pricePerDay: 100,
        total: 100,
        rented: 0,
        available: true,
    }
var sports: {
        pricePerDay: 100,
        total: 100,
        rented: 0,
        available: true,
    }
}

function rentCar(type) {
    if (carDealership(type)){
        if(carDealership(type).available==true) {
            console.log("The " + type + " is available. Do you want to rent it");
        }
    }
}

rentCar();