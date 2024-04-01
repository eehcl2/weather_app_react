import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import View from './components/View';
import { useState } from 'react';
import Controller from './components/Controller';

function App() {
  const[count, setCount] = useState(1);
  //[초기값, 변경값(함수))] -> 현재 카운크는 0, 카윤트+1을 해준다면 셋카운트가 +1씩 올라감
  const handleSetcount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
     <Header/>

     <View count={count}/>
     <Controller handleSetcount={handleSetcount} />

     <Footer/>
    </div>
  );
}

export default App;
