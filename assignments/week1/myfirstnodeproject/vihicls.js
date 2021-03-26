class Car {
    constructor(make, model, year, type,mpg, mileageMiles, tankSizeGallons, topSpeedMPH, vin) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = type;
        this.lastService = new Date();
        this.vin = vin;
        this.mileageMiles = mileageMiles;
        this.topSpeedMPH = topSpeedMPH;
        this.mpg = mpg;
        this.tankSizeGallons = tankSizeGallons;
        
    }

    travel(miles) {

        if (miles > this.tankSizeGallons * this.mpg) {
            console.log("You can not take this trip on a single tank of gas.")

            return;
        }

        this.milleageMiles = this.milleageMiles + miles;
        console.log(`${make} ${model} goes on a ${miles} trip!`)
    }
}


let car1 = new Car("honda", "Accord", 2010, "Sedan", 35, 110000, 14, 120, "23579d3l3");

console.log(car1);

car1.travel(10000000);
console.log(car1)