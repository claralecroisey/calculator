export function add(numbers: string) {
    if (numbers.length === 0) {
        return 0;
    } 

    let delimiter: string | RegExp = new RegExp('\[\n,\t;\]');
    if (numbers.startsWith('//')) {
        const regex = /\/\/\[(.*)\]/gm;
        delimiter = regex.exec(numbers)[1];
        numbers = numbers.split('\n')[1];
    }
    
    return numbers.split(delimiter).map(val => parseInt(val)).reduce((sum, value) => {
        if (value < 0) {
            // negative numbers should raise an Error
            throw new Error("negatives not allowed");
        } else if (value > 1000) {
            return sum;
        } else {
            return sum + value; 
        }
    }, 0);
}