# My First React App: Components and Props

### Learning goals
1. Learn what a _component_ is, and the advantages it offers over vanilla html.
1. Learn what _props_ are, and how to pass them into our components.
1. Put multiple components together using different props to create something cool.

### Getting started
First, let's install `yarn` like so:
```
npm install --global yarn
```
Note that this can be run from any directory because it is a global install.

We will use the tool `create-react-app` to (you guessed it) create out react app. `create-react-app` is a node package that we install using:
```
npm install --global create-react-app
```
From this project directory, run `create-react-app components-and-props`.

### Exploring our out-of-the-box react app
`cd` into your new app dir, and start a server with `yarn start`. Visit localhost.com:3000 to see our new app. As it suggests, we will start exploring the code by going to `src/App.js`.

The first thing we're going to look at is the `import` statements at the top of the file, and the `export` statement at the bottom of the file. These are analogous to the `require` and `module.exports = ` statements that we're used to. There are some technical differences between these two tools, but ultimately we will use `import` and `export` in a remarkably similar way.

The next thing we'll look at is everything in the `return` statement in the center of the page. This looks a lot like familiar html: it's got tags like div, header, img, p, and a. However, it's living in a javascript file, and what's more it's living right inside the return statement of a javascript function. This is called JSX, and it's a fusion of html and js. Rather than explaining everything it can do up front, we will start working with it and learn by experience.

### (A) Writing our own JSX
Let's prune some of the fluff from this file so we can start writing our own code: delete the return value of the App function, and for the moment let's just return "hello". (While we're at it, let's delete the contents of App.css, because later we will put our own in there.) Note that you can visit localhost:3000 and see the changes without refreshing the page.

This experiment demonstrates that we can return a string from our App function. But of course we want to return some html! Let's put this into the return statement of our App function:
```
<h1></h1>
<div>
  Here is why react is awesome:
  <ol>
    <li>1. It can help you get a job</li>
    <li>2. Ummm I've been learning it for like 5 minutes</li>
  </ol>
</div>
```
We should get an error that reveals something important about how JSX works: our return statements must always have a single top-level component, not multiple sibling components.

### (B) Components
Ok we've had our fun writing old-fashioned html in our App function. It's time to use the real power of react, and write some additional components. Components are functions that return a JSX expression, and can be called inside the return statement of another component.

Let's make this new component before our App function:
```
function Box() {
  return (
    <div className="box">
      I'm text in a box!
    </div>
  )
}
```
Note that in JSX, the familiar class attribute of html elements is replaced by className, to avoid a name collision with the javascript keyword class. Also, note that all your components should start with a capital letter. In JSX, ordinary non-component html tags start with a lowercase letter, while user-defined components start with an uppercase letter.

In our App.css:
```
.box {
  width: 150px;
  height: 150px;
  display: inline-block;
  border: solid black 2px;
  text-align: center;
  margin: 10px;
  font-size: 8em;
}
```
Now we can call our Box component as many times as we want inside our App component:
```
function App() {
  return (
    <Box />
    <Box />
    <Box />
  )
}
```
Before writing it in, predict what might go wrong with the above code? What can we do about it?

One big advantage of components is reusability (similar to reusing ejs partials!) Remember tic-tac-toe? You might have written some html like this:
```
<div class="row">
  <div class="cell" />
  <div class="cell" />
  <div class="cell" />
</div>
<div class="row">
  <div class="cell" />
  <div class="cell" />
  <div class="cell" />
</div>
<div class="row">
  <div class="cell" />
  <div class="cell" />
  <div class="cell" />
</div>

```
Let's create a layout like this together using components. This is also a good time to learn about the react dev tools extension for chrome!

### (C) A departure to the land of class components
All the components we've written so far are what we call _functional components_. This is 1 of the 2 commonly used ways to write components, but both are used frequently in real code bases. Both ways can accomplish all the same things! The other way is called _class components_, which look like this:
```
import React from 'react'

class Cell extends React.Component {
  render() {
    return (
      <div className="cell" />
    )
  }
}

class Row extends React.Component {
  render() {
    return (
      <div className="row">
        <Cell />
        <Cell />
        <Cell />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Row />
        <Row />
        <Row />
      </div>
    )
  }
}
```
Here are the important differences:
1. Each of our components is not a function, it's a class. And that class must extend React.Component.
2. Instead of just returning our jsx, we have to define a method called `render` that returns the jsx.

### (D) Mixing up X's and O's
We're going to populate our board with a mix of X's and O's, starting with our functional component version, and then again for the class component version.

In our Cell function, we will randomly pick either X or O
```
 const letter = ['X', 'O'][Math.floor(Math.random() * 2)]
```
In our jsx, we can use simple curly braces to inject the values of any javascript expression into our html. It's similar to how `<%= %>` works in an ejs file. Let's insert our letter into the jsx of our Cell class.

Once we have this working in our functional component version, let's adapt it for our class component version. There are a few different ways to do this: picking the letter inside our render method before the return statement, or defining an instance method on the class and calling it inside a jsx interpolation

### (E) Props
Have you wondered: if our component are functions, can we pass arguments into them? Yes, yes we can. In react, the information that we pass to our components are called _props_, and they are passed in from the component's parent component. Using props allows you have several instances of the same component, but with different attributes. Note that right now our Cells have different letters, but we don't have any control over it! We want to be able to control what our component show, and this is done in a hierarchical way, ie from parent to child.

We will do this first for our functional components, then again for our class component version. First let's set up our Cell to receive props:
```
function Cell(props) {
  return (
    <div className="cell">
      {props.letter}
    </div>
  )
}
```

Then, we set up our parent component (the Row) to pass props to the children.
```
function Row() {
  const firstLetter = ['X', 'O'][Math.floor(Math.random() * 2)]
  const secondLetter = ['X', 'O'][Math.floor(Math.random() * 2)]
  const thirdLetter = ['X', 'O'][Math.floor(Math.random() * 2)]

  return (
    <div className="row">
      <Cell letter={firstLetter}/>
      <Cell letter={secondLetter}/>
      <Cell letter={thirdLetter}/>
    </div>
  )
}
```

It's that time again, let's learn to use props in a class component version. Similarly to w/ functional components, we want to set up our child to receive props:
```
class Cell extends React.Component {
  render() {
    return (
      <div className="cell">{this.props.letter}</div>
    )
  }
}
```

And then pass those props in from the parent:
```
class Row extends React.Component {
  randomLetter() {
    return ['X', 'O'][Math.floor(Math.random() * 2)]
  }

  render() {
    return (
      <div className="row">
        <Cell letter={this.randomLetter()}/>
        <Cell letter={this.randomLetter()}/>
        <Cell letter={this.randomLetter()}/>
      </div>
    )
  }
}
```

Note that this is a great chance to use an instance method in this class! Instance methods on react component classes work just like instance methods on js classes that we've written so far, notably that they have to be called with `this` inside the class.

Finally, look at your Cell components in the react dev tools, and note that you can see what props are being passed into it.

### Mini-lab!
In your groups, you're going to build out a menu from this mockup:

![menu mockup](./assets/menu.jpg)

Before we get started, we want to identify which components we will need, much like how when we do HTML/CSS mockup exercises, we scan the structure of the page before writing code. This process is mostly drawing boxes over the mockup to represent the various components.

Style the menu to look as much like the mockup as you can, but don't worry about getting the fonts or background image perfect.

### (F) Conditional rendering
Let's take this opportunity to learn another essential trick in jsx: conditional rendering. First we'll do it in our functional components, then in our class components.
```
function Row() {
  return (
    <div className="row">
      <Cell letter={Math.floor(Math.random() * 2) === 1 ? 'X' : 'O'}/>
      <Cell letter={Math.floor(Math.random() * 2) === 1 ? 'X' : 'O'}/>
      <Cell letter={Math.floor(Math.random() * 2) === 1 ? 'X' : 'O'}/>
    </div>
  )
}
```
Note that inside of a jsx curly bracket, you can't use an `if` statement, but you can use a ternary operator, which is functionally identical to an `if` statement.

Don't forget to implement this in a class component setting too!
