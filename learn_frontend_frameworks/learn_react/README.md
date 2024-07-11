# We gonna be learning React
- React is a JS library not a framework and I will be using this README to document my progress.
- I am using the codewithmosh react course to kick start my learning of react.

## Important notes and points below
- You can start the react app using either `Create Virtual App` or `Vite`
- In the directory you want your file you can use vite in the cmd as follows `npm create vite@"version"` or 
  you can use `npm create vite@latest`.
- Using vite you can create a lot of javascript apps, but in this case select React.
- To run the web app we use `npm run dev`.

### Creating components
- You can use a javascript class or a function. Functions are preferred to classes.
- It is advisable to put all components in a folder named `components` in the `src` directory.
- When you have variables that are in a function component and they want to be updated; you can use the react 
  `useState`. This function is called a Hook which is used to tap into built in features of react.
- `useState` takes an initial argument as the variable that is changings and returns an array `arr` where
   `arr[0]` is the variable that is changing and `arr[1]` is the updator function.
- For icons you can use a react library. You can instal it using `npm i react-icons@"version"`