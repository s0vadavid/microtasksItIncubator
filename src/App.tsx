import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import {NewComponent} from "./components/NewComponent";

function App() {
  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" },
  ]);

  let currentMoney = money;

  const [filter, setFilter] = useState('all')

  if (filter === 'ruble') {
      currentMoney = money.filter((currency) => currency.banknote === "ruble")
  }
  if (filter === 'dollar') {
      currentMoney = money.filter((currency) => currency.banknote === "dollar")
  }

  let onClickFilterHandler = (buttonName: string) => {
      setFilter(buttonName);
  }

  return (
      <NewComponent onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>
  );
}

export default App;
