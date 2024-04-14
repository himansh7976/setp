import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import BasicExample from './Components/Bootstrap/Boot';
import Handlearray from './Components/Handle array with list/Handlearray';
import BootList from './Components/ListWithBootstrip/BootList';
import Nested from './Components/NastedArray/NestedArray';
import Reusecompo from './Components/Reuse COmpo/Reusecompo';
import { Fragment } from './Components/Fragment in react/Fragment';
import Lifting from './Components/LiftingUpState/Lifting';
import { PureCOmo } from './Components/Pure componets/Purecompo';
import Usememoo from './Components/Usememo/Usememoo';
import Reff from './Components/RefWIthExmpale/Usereff';
import Userefff from './Components/RefWIthExmpale/Usereff';
import ParentReff from './Components/UseREff function/ParentReff';
import Controlcompo from './Components/Contorls compo/Controlcompo';
import Hoc from './Components/HOC-high-oderCompo/Hoc';
import Page from './Components/Route Page not Found 404/Page';
import Forms from './Components/formHandling/FormHandle';



const globle = createContext();

function App() {

  function get() {
    alert("hello");
  }

  const [color, setcolor] = useState('green');

  //render life cycle
  const [name, setname] = useState("anil")



  return (


    <>

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


      <BasicExample />

      {/* Handle arry called// */}

      <Handlearray />

      {/* bootstrip list' */}
      <BootList />

      {/* called Nested arru */}
      <Nested />
      {/* called Reusecompo */}
      <Reusecompo />

      {/* react Fragment called' */}

      <Fragment />

      {/* Lifting up state' */}
      <Lifting />

      {/* purecompoosts */}
      <PureCOmo />

      {/* usememo cled/ */}
      {/* 
       <Usememoo/> */}
      {/* refuse called' */}
      {/* <Reff /> */}


      {/* usereff call in function' */}
      {/* <ParentReff/> */}
      <Controlcompo />

      {/* high oder compo call' */}
      <Hoc />
      {/* page not found 404 */}

      <Page />
      <Forms />






    </>






  );
}

export default App;
