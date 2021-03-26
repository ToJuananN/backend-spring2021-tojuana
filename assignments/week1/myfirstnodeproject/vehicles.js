class Car {
    constructor(make,model, year, type, mileageMiles, tankSizeGallons, mpg, topSpeedMPH, vin) {
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

        if(miles > this.tankSizeGallons + this.mpg) {
            console.log("You can not make this trip on a single tank of gas.")
        }

        this.mileageMiles = this.mileageMiles + miles;
        console.log(`${this.make} ${this.model} goes on a ${miles} trip!`)
    }
}


let car1 = new Car("Honda", "Accord", 2010, "Sedan", 35, 110000, 14, 120, "23579d3l3");

console.log(car1);

car1.travel(1000000);
console.log(car1);