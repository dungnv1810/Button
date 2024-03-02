import React, {useState} from 'react';
import Button from './components/Button'; 
import Input from './components/Input';
import './App.css';
function App() {
  const [data, setData] = useState({
    username: "",
    password: ""
  })
  const handleOnclick = () =>{

  };
  const handleInputChange = event => {
    const {name, value} = event.target.value;
    setData({
      ...data,
      [name]: value
    })
  };
  return (
    <div className="App">
      <Button
        name="Home Page"
        onClick={handleOnclick}
        type='normal'
      />
      <Button
        name="New Page"
        onClick={handleOnclick}
        type='mariky'
      />
      <Input
        type="text"
        name="Username"
        value={data.username}
        onChange={handleInputChange}
        placeholder="username"
        autoComplete="off"
        width={200}
      />
      <Input
        type="password"
        name="password"
        value={data.password}
        onChange={handleInputChange}
        placeholder="password"
        autoComplete="off"
        width={200}
      />
    </div>
  );
}

export default App;
