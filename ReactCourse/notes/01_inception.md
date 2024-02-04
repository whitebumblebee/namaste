# Episode 1 - Inception

- basics of react
- asked what is CDN?(Research on what is react)
- what is `crossorigin` while using react as cdn

## Part - 01
- We learnt about basics of html and revised how javascript injects html inside html using its dom api. Following is one example where we are rendering a header using javascript
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

## Part 02 - Basics of React and rendering React using CDN
- In this we discussed basics of React. What React and ReactDOM are at a very very high level
- then we saw how we could render the same header using the React and ReactDOM api as shown below:
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