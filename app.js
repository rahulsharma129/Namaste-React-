// const heading = React.createElement( "h1" , {id: "heading"}, "Hello world React!");
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I AM H1 TAG"),
        React.createElement("h2",{},"I AM H2 TAG")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("div",{}," Again H1 TAG that not involve in the text "),
        React.createElement("div",{},"Again H2 TAG")
]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);