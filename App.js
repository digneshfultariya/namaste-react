const heading = React.createElement("h1",{
    id:"heading"
}, "Namaste Everyone!!");

const paragraph = React.createElement("p",{
    id:"intro"
}, "Namaste Everyone from React CDN!!");

const div = React.createElement("div",{
    id:"container"
}, [heading, paragraph]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);


