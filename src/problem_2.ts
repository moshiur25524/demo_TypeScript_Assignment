// 2. Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,

type PersonType = {
    name: string,
    age: number
}

function getYoung(persons: PersonType[]): PersonType[] {
    const youngGuy = persons.filter(person => person.age >= 18)
    return youngGuy
}

const persons: PersonType[] = [
    {
        name: 'Sujon',
        age: 27
    },
    {
        name: 'Mahim',
        age: 17
    },
    {
        name: 'Mishu',
        age: 20
    },
    {
        name: 'Nahid',
        age: 28
    },
    {
        name: 'Nirob',
        age: 16
    },
];

console.log(getYoung(persons))