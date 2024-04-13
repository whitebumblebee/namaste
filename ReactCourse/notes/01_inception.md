# Episode 1 - Inception

## Main topics covered:
- basics of react
- What makes React fast and suitable to build scalable frontend apps?
- asked what is CDN?(Research on what is react)
- what is `crossorigin` while using react as cdn

## Part - 01(Small Recap of HTML and DOM API)
- How does HTML work? and how javascript injects html inside html using its dom api? 
- When working with HTML in VS code use extensions like emmet for code generation which comes by default with vs code
- Following is one example where we are rendering a header using javascript:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script>
        const header = document.createElement('h1')
        header.innerHTML = "Namaste React from Javascript!"
        const root = document.querySelector('#root')
        root.appendChild(header)
    </script>
</body>
</html>
```
- Basically we can just add the script tag and add javascript to add interactivity or manipulate DOM with javascript.
- Read more about DOM api [here](https://javascript.info/document)

## Part 02 - Basics of React and rendering React using CDN
- What React and ReactDOM are at a very very high level?
- First let's see how we would render same header using React, using with CDN:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const header = React.createElement('h1', {}, 'Hello world from React!')
        const root = ReactDOM.createRoot(document.querySelector('#root'))
        root.render(header)
    </script>
</body>
</html>
```
- what is crossorigin here?
- Ans can be found [here](https://g.co/bard/share/e9faf0c7ffff)

- `React.CreateElement` simply returns a javascript object. For example, for the following code:
```js
const header = React.createElement('div', {
    'id': 'heading'
},
 React.createElement('h1', {}, 'h1 inside div'))
```
- if we console header we should simply get:
```js
{$$typeof: Symbol(react.element), type: 'div', key: null, ref: null, props: {…}, …}
$$typeof
: 
Symbol(react.element)
key
: 
null
props
: 
{id: 'heading', children: {…}}
ref
: 
null
type
: 
"div"
_owner
: 
null
_store
: 
{validated: false}
_self
: 
null
_source
: 
null
[[Prototype]]
: 
Object
```
That means it creates an object where important part is props. It contains the children which is basically the objects or tags inside the object