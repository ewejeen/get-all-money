import React, { Component, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import {Main, Bank, Interest} from '../pages'

function App() {
  const [message, setMessage] = useState('');

  // 스프링 연결 테스트 (localhost:8080)
  useEffect(() => {
    fetch('/hello')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
    },[])

  return (
    <div>
      <p>{message}</p>
      <Route exact path="/" component = {Main} />
      <Route path="/bank" component={Bank} />
      <Route path="/interest" component={Interest} />
    </div>
  );
}

export default App;
// class App extends Component {
//   render() {
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//       fetch('/hello')
//         .then(response => response.text())
//         .then(message => {
//           setMessage(message);
//         });
//       },[])

//     return (
//       <div>
//         <Route exact path="/" component = {Main} />
//         <Route path="/bank" component={Bank} />
//         <Route path="/interest" component={Interest} />
//       </div>
//     );
//   }
// }