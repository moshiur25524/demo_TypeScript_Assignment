1. What is TypeScript, and how is it different from JavaScript?
Ans: 
    TypeScript: TypeScript is the static typed and superset of JavaScript. 
    JavaScript is difference from TypeScript for many purposes like:
    1)  TypeScript check the type of veriable very stricktly. but JavaScript don't strickt about variable type. javaScritpt is a dynamic typed programing language.
    2) TypeScript catch the error in compile type but javaScript catch the error in runtime.
    3) some more features are added with the TypeScript then javaScript.

2. Can you explain the difference between "interface" and "type" in TypeScript?
Ans: 
    interface: interface is a keyword for making a explicit type of a variable. It mainly create the object typed variable type like function, object, array types can be created with interface.
    type: type is a keyword for making a explicit type of a variable also. but any kind of types of javaScript features can be created with type keyword like string, number, boolean, array, object, function, union type , intersection type etc. 

3. Can you give an example of how to use generics in TypeScript?
Ans: 
```typescript
    type mygenericArray<T> = Array<T>
    const myArr:mygenericArray<string> = ['Khaled', 'Tanvir', 'nahid','sujon'];
```
    It is a simple example of generic type. <> symble is the symble of generic type. inside <>, we can set any variable name Like T as I mentioned. we can call it generic declaration. And we will use it in any variable type and set the variable type inside <> like, string or number or boolean etc.

4. What is the difference between an "unknown" and "any" type in TypeScript?
Ans:
    There has some difference between unknown and any type: 
    1) explicitly we can set unknown as a variable type when we are not sure about the type of variable. such as a field of a value where any type of text can be set. that time we will use unknown and any type is the default type of type for all veriable;
    2) unknown type means the type is not sure to apply but any means any type can be set for variable type.

6. What is the "as" keyword used for in TypeScript?
Ans: 
    "as" keyword is used for assertion type in TypeScript . when the variable declaration type is any, after then we will use any value of that variable. explicitly we may use as for the type of variable. A simple example is show below: 
```typescript
    let fakeName;
    fakeName = 'Sujon' // still its type any
    fakeName as string = 'shikder';    // now it is string typed
```
