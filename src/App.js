import logo from './logo.svg';
import './App.css';
import Clock from './Clock'

function App() {
    
    //example 1
    const name = "Ryan Chevarria";
    const element = <h1>Hello, {name}</h1>;
    
    //example 2
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    const element1 = (
      <h1>
        Hello, {formatName(user)}!
      </h1>
    );
    
    //example 3
    function getGreeting(user) {
      if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
      }
      return <h1>Hello, Stranger.</h1>;
    }
    

  return (
    <div className="App">
          {element1}
    </div>
  );
}

export default App;
