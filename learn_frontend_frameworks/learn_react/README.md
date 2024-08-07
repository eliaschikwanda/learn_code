
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

## Managing Component State
### State Hook
- React updates state asynchronously (meaning not immediately).
- State is stored outside of a component. React keeps the state as long as the componet shows
  on the screen.
- You can only use at the top level of a component.
- We cannot use inside the `for` loops and `if` statements because it the constructs impact the order in which the
  state hook is called.

### Keeping components Pure.
- A pure function is a function such that given the same input it produces the same result.
- To keep components pure, keep changes out of the render phase.

### Updating logic with Immer.
- To install immer use `npm i immer@"version"`.
- The component that hold the state is the responsible for updating it.

### Building Forms
- You can write global styles in `index.css`.
- When starting a project on a computer that has run it before and the other computer added dependencies use the following commands
   `rm -rf node_modules package-lock.json`
   `npm install` 
   `npm start`

### Connecting to the Backend
- React components should be pure functions (should return the same results if given the same inputs"
- To keep components pure, keep changes out of the render phase.
- We can use the effect hook `useEffect( () => {} )` to execute a piece of code after a component is rendered.
- The arrow function passed in the effect hook will be called after rendering.
- When we have multiple effects React will apply them in order after each render
- You can also have more control when the function executes.
- To avoid going into an infinity loop when using the effect hook. You may pass in the array of dependencies as a second argument to
  ensure that the arrow function passed in the effect is executed once. It will execute again when the dependencies in the array changes.

- Sending HTTP REQUESTS can be done using `fetch()` or a library called axios, to install axios you can use `npm i axios@1.3.4`
- The effect hook can be used to call the server. Because calling the server doesn't happen immediately calling `axios.get("target-endpoint")` returns a promise.
- A promise is an object that holds the eventual result or failure of an asynchronous operation. All promises has a method called `then()` where a callback function
is passed (that takes a response object), the function that  will be executed when the promise is resolved.

### Handling Errors
- While calling the server many things can go wrong. `axios` have a method called `catch()` that can be used to catch errors.
- You pass in a call back function (that takes an error function) in a `catch()` method when something goes wrong.
- Calling the server is asynchronous, which means it's non-blocking.
- All promises has a finally method, and you can pass in a call back function, that is called resolved whether our promised is resolved or rejected.


### Deleting a user
- When deleting data we can do an `optimistic update`: 1. Update the UI then Call the server to make changes.
- We can also use a `pessimistic update`, used when there is a chance the deletion will fail, 1. Call the server then Update the UI.
- To make the UI faster you may wanna use the `optimistic update`.

