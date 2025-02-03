import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';

function App() {
  const button1Foo = (subscriber: string, age: number, address: string) => {
    console.log(subscriber);
  }

  const button2Foo = (subscriber: string) => {
    console.log(subscriber);
  }
  const button3Foo = () => {
    console.log("I'm button");
  };
  return (
    <div className="App">
      <Button
        name={"First Button"}
        callBack={() => button1Foo("Travor", 21, "Kyiv")}
      />
      <Button name={"Second Button"} callBack={() => button2Foo("Manson")} />
      <Button name={"Second Button"} callBack={() => button3Foo()} />
    </div>
  );
}

export default App;
