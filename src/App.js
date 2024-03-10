import logo from './logo.svg';
import './App.css';
import Student from './Students';
import GetInput from './Components/GetInput';
import HideShow from './Components/HideShow';
import ClickEvent from './Components/ClickEvent';
import Statess from './Components/States';
import Propss from './Components/Props';
import GetInput2 from './Components/GetInput2';
import FormHandel from './Components/FormHandel';
import Condition from './Components/conditionrending class18/Conditionren';
import Validation from './Components/Form Vailidation class-19/Validation';
import Functionprops from './Components/pass function props/Functionprops';
import Second from './Components/pass function props/Members';
import ContextApi from './Components/ContextApi/ContextAPi';
import { createContext, useState } from 'react';
import User from "./Components/RenderMethod/RenderMethod"
import { Renderr } from './Components/RenderMethod/Render2';
import { Compodid } from './Components/CompoDidMount/Compodid';
import { Compoupdate } from './Components/CompoDidupdate/Compoupdate';
import { Composhould } from './Components/Composhould/Composhould';
import Compowillun from './Components/Compowillunmount/Compowillun';
import Hooks1 from './Components/Hoooks in react/Hooks1';
import UseEffect from './Components/UseEffect Hook/UseEffect';
import { useEffect } from 'react';
import Speficuseeffct from './Components/UseEffect Hook/Speficuseeffct';
import MainEffect from './Components/UseEffect Hook/MainEffect';


const globle = createContext();

function App() {

  function get() {
    alert("hello");
  }

  const [color, setcolor] = useState('green');

  //render life cycle
  const [name, setname] = useState("anil")



  return (


    <div className="App">


      <Student name="himashu" email="himansh@gamil.com" />

      <GetInput />

      <ClickEvent />
      <Statess />

      <Propss namee="himasnhu" email="hiamnshuu@123.gmail.com" />

      <GetInput2 />
      <HideShow />

      <FormHandel />
      <Condition />

      <Validation />

      <Functionprops get={get} />
      <Second set={get} />


      <globle.Provider value={{ appcolor: color }} >

        <ContextApi></ContextApi>
      </globle.Provider>

      <User name={name}></User>
      <button onClick={() => { setname("helloi") }}>SBubmit</button>

      {/* second render components */}

      <Renderr name={name} />

      <button onClick={() => { setname("hello") }}>click</button>

      {/* //components Didmount */}
      <Compodid />
      {/* components updating */}

      <Compoupdate />

      {/* components should update */}
      <Composhould />

      {/* componets will unmount/ */}
      <Compowillun />

      {/* react hooks/
      */}
      <Hooks1 />

      {/* UseEffect hook call' */}
      <UseEffect />

      {/* ///spefice useEffect call */}

      <Speficuseeffct />

      {/* main effcet called */}
      <MainEffect />















    </div>








  );
}

export default App;
