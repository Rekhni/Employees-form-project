import React from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>;
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   }
//   return <input 
//           placeholder={holder} 
//           type='Text' 
//           style={styledField}/>
// }

class Field extends React.Component {
    render() {
        const holder = 'Enter here';
        const styledField = {
        width: '300px'
        }
        
        return <input 
                placeholder={holder} 
                type='Text' 
                style={styledField}/>
    }
}


function Btn() {
   const txt = 'Log in';
   let logged = false;
   return <button>{logged ? 'Enter' : txt}</button>;
}



function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export {Header};
export default App;
