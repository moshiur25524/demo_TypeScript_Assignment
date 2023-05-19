//3. Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

const reverseArr = <T>(...arryelements: Array<T>): Array<T> => {
    const reversedArray = arryelements.reverse();
    return reversedArray
}

const arrayOfStrings = [];

console.log(reverseArr<string>('nahid', 'Roni', 'Sujon', 'Hafiz', 'abdullah'));