// FIRST TASK: create an object with properties for their full name, mass, and height(Mark Miller and John Smith).
// SECOND TASK: create a method to calculate the BMI Store the BMI value to a property, and also return it from the method.
// LAST TASK: Log to the console who has the higher BMI, together with the full name and therespective BMI.
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;

    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi)

console.log(`${john.fullName}  BMI${john.bmi} is higher then Mark's ${mark.bmi}!`)