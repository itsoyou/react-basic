# Learn React Basic

This is a simple app for learning react basic.

## React
open source project created by Facebook.
One of the most popular JavaScript libraries to build SPA(Single Page Applications)
alternatives: Angular, VueJS
Component-Based
can also be used to create native apps for android, iOS(React Native)

# Create react app
need latest version of NodeJS

# NodeJS

## node

## npm
package manager. install, delete, and update JS packages
like maven, gradle in Java world.

## npx
package executor. Executes JS package directly, without installing

https://github.com/facebook/create-react-app/issues/13717

```
npm install -g yarn
yarn create react-app my-app
```
use this instead of
```
npx create-react-app myapp
```

`npm start`: This command runs app in development mode.

`npm test`: This command tests the project. This enters to the Watch mode.: press w to see the commands

`npm run build`: builds a production deployable unit in /build folder. Minified and optimized for performance.

`npm install --save react-router-dom`: adds a dependency to your project.

`public/index.html` is the first thing that loaded to the browser. This contains root div.

`src/index.js` this initializes React App and loads App component.

`index.css` contains general styles for entire application.

You can also have component specific css. e.g. App.css for App component.

`App.test.js` is unit tests for App component. Unit test is right along side production code.(different to Java approach)

# Why do we need React Components?

Web applications have complex structure. e.g. Menu, Header, Footer, Login, Logout..
Components help you "modulerize" react apps. Creates separte components for each page element. e.g. Menu Component, Footer component..
You can reuse the components.

# Understanding react components

## App component
the first component typically loaded in react app.

## Parts of a component
- View(JSX or JavaScript): like html.
- Logic(JavaScript)
- Styling(css)
- State(internal data store): built-in react object to store data/info about the component.
- Props(to pass data to component): properties

Name of the Component must start with upper case letter.

# Understanding State in React

## function component vs class component

State: built-in react object used to contain data or information about the component.
In the earlier versions of React, only class components can have state.
However, "Hooks" were introduced from React 16.8, Hooks allow adding states to function components.(useState Hook)

That's why no real need for class components anymore, it is recommended to use function components.

# Getting started with JSX(JavaScript XML) - Views with React

Most react projects use JSX for presentation.
JSX is stricter than HTML.
- close tags are mandatory
- only one top-level tag allowed.(Only return one tag!) if you have multiple top-level JSX tags, you have to wrap into a shared parent.
    ```
    render() {
        return (
        <>
            <div className="FourthComponent">Fourth Component</div>
            <div className="FourthComponent">Fourth Component</div>
        </>
        )
    }
    ```
- Custom Components should start with Upper case
- specify css class with `className`

## How is JSX enabled in a React App?
different browsers have different support levels of modern JS features
There are number of ECMA standards: ES2022, ES2015, ...
How to ensure backward compatibility for JS code and browser?
Solution: Babel
Babel allows to run modern JS code in older browsers. Supports JSX(Converts JSX to JS so that old browser can also understand.)

### The parenthesis
```
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThridComponent />
      <FourthComponent/>
    </div>
  )
```
or
```
  return <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThridComponent />
      <FourthComponent/>
    </div>
```
If you don't have the first element in the line of return, use parenthesis

# JavaScript Best Practices

1. Each component in its own file(or module)

# Define css in JSX
Options for styling your React components

1. style: `<button style={{borderRadius:"30px"}}>`
2. className + css file

# Understanding State in React
State is built-in react object to store data/info about the component.
In earlier verions of React, only class components can have state. (implementation was complex)
Hooks were introduced in React 16.8.
- easy to use
- useState hook allows adding state to function components
- useState returns 2 things: 1. current state 2. a function to update state
To share state between components, move state "upwards"(to parent component)

# What's happening in the background with React?

we update state -> react update the view

How can you update a HTML element?
- a HTML page is represented by DOM(Document Object Model)
- each element in a HTML page is a node in a DOM
- you need to update the DOM to update the element
- writing code to update DOM is complex and slow

React takes a different approach:
Virtual Dom / Dom / App

- Virtual DOM: virtual representation of a UI(kept in memory)
- React code updates Virtual DOM
- React identifies changes and sync them to HTML page
    1. React creates Virtual DOM v1 on load of page
    2. You perform an action
    3. React creates Virtual DOM v2 of your action
    4. React performs a diff between v1 and v2
    5. React sync changes (update HTML page)

We are not updating DOM directly, instead react identifies changes and efficiently updates the DOM.

# Exploring React props

You can pass "props"(properties) object to a react component.
props is used for thing that remain a CONSTANT during lifetime of a component.

# Controlled Component vs Uncontrolled Component

In Log in component, If you hardcode value like this in input text
```
<div>
    <label>User Name</label>
    <input type="text" name="username" value="random-id"/>
</div>
```
You get this warning: A component is changing an uncontrollerd input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.

solution: You must set initial state first. If you don't set initial state react will treat that as an uncontrolled component. Or use `defaultValue`


Whenever you're playing with "form" elements with React, there are 2 different things that come into picture.

1. React State: you can hold the value of the form variable in React State.

2. Value in the Form element itself. -> DOM value

When you use Form with React, make sure these two values are synchronized!

When you set up the sync for speicific component, the component is "Controlled" component.

How to make a component Controlled component?

1. create a state. e.g.useState()
2. add onChange to update value every time user input something

# JavaScript Syntax

## String and boolean

```
true && "some string"
```
returns "some string"

```
false && "some string"
```
returns nothing

You can do
```
{showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
```
instead of `<SuccessMessageComponent />`

## variable in String

Use backtick for string if it has variable in it.
Variable should be wrapped with `${}` sign.
```
navigate(`/welcome/${username}`)
```

## {} makes object super easy!
```
const val1 = 10
const val2 = "som"
const obj = { val1, val2 }
```
obj => {val1: 10, val2: "som"}


## forEach and map

for an array object, you can loop through it with forEach.
```
const todos = [
        { id: 1, description: "Learn AWS" },
        { id: 2, description: "Learn Full Stack" },
        { id: 3, description: "Learn DevOps" },
    ]
```

```
todos.forEach (element => console.log(element) )
```

This returns an array of the id. `[1, 2, 3]`
```
todos.map(element => element.id)
```

```
todos.map(element => element.description)
```

## `setInterval` hook
Set up test environment where state is updated dynamically.
`setInterval(function f, int n)` execute given function f every n milliseconds.

# Hooks from `react-router-dom`

- `useNavigate`: This hook is used to redirect user to certain url. Naviagte to the different page.
- `useParams`: this allows to use params. returns an object of key-value pairs of the param form the current URL

## `a href` and `Link to`

```
<div >
    Manage your todos. <a href='/todos'>Go here</a>
</div>
```
This refresh the ENTIRE page every time user clicks the link.

```
<div >
    Manage your todos. <Link to='/todos'>Go here</Link>
</div>
```
By using `Link` here, we don't refresh the whole page, rather just the part of the page.

## Shared Context in React

e.g. sharing login information

How?
1. Create a Context via `createContext()` hook.
2. Put some state in the context
3. Share the created context with other components

## `useEffect`

if you want to load data as soon as the initial version of the component is ready.

```
useEffect(
        () => refreshTodos(), []
    )
```
`useEffect` takes 2 arguments, (effect: EffectCallback, deps?: DependencyList).
if you don't pass the second element, it will be triggered number of times. It tells the effect when it has to render.
`[]` -> we don't have specific dependencies here, just load it at the start.


The `useEffect` hook in React performs side effects in function components. It is used when you need to

1. Fetching data from an API
2. Listening for changes (e.g., window size, authentication state)
3. Updating the document title
4. Cleaning up (e.g., removing event listeners, clearing intervals)

Basic Logic is like below:
```
useEffect(() => {
  // Side effect logic (e.g., fetch data, modify DOM)
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);
```
Effect Function runs when the component mounts or when dependencies change.
Dependency Array controls when useEffect runs.
Cleanup Function runs when the component unmounts or before re-running the effect.

## `useCallback`

useCallback is a React Hook that memoizes (caches) a function definition between re-renders. It's particularly useful when:

1. You're passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
2. You have a function that's used as a dependency in other hooks like useEffect

```
function DataFetcher({ userId }) {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    const response = await fetch(`/api/data/${userId}`);
    const result = await response.json();
    setData(result);
  }, [userId]); // Depends on userId

  useEffect(() => {
    fetchData();
  }, [fetchData]); // fetchData is a dependency of useEffect

  return <div>{/* render data */}</div>;
}
```

# Axios

One of the most popular frameworks which is used along with React to call rest API.
When you make a API call using axios, there are 3 things you can do.

1. then: for successful results
2. catch: for errors
3. finally: irrespective of whether it's a success or a failure. for cleanup.

In all of these, we defines something called `callback methods`.

```
axios.get("http://localhost:8080/hello-world-bean"
).then(
    (response) => successfulResponse(response)
).catch(
    (error) => errorResponse(error)
).finally(
    () => console.log("cleanup")
)
```
In this code, `axios.get()` will return a `Promise`.
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

It has three states:
- Pending – The initial state, before the operation completes.
- Fulfilled – The operation completed successfully.
- Rejected – The operation failed.

# Dependencies

Formik: library for building forms easily

Moment

# JWT Token(Json Web Token)

Basic authentication had limits like this:
- No expiration time
- No user Details
- Easily decoded(no use in production)

How about creating a custom token system?
- possible security flows
- different structure -> service provider/consumer cannot understand

That's why JWT is introduced.
Open, industry standard for representing cliams securely between two parties.
It can contain User Details and Authorizations.

## What does a JWT contain?
* Header
 - typ(Type): JWT
 - alg(Hashing algorithm): HS256
* Payload
 - Standard attributes
    - iss(issuer)
    - sub(subject)
    - aud(audience)
    - exp(token expiration time)
    - iat(token issued time)
 - Custom attributes
* Signature
 - includes a secret

