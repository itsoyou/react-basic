# React
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
  );
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

