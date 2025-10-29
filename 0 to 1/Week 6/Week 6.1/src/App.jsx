/* eslint-disable no-unused-vars */
import { memo, useState } from "react";

function App() {
  const [title, setTitle] = useState("Rishabh");
  function updateTitle() {
    setTitle(Math.random());
  }
  return (
    <div>
      {/* <HeadersWithButton/> */}
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="rishabh1"></Header>
      <Header title="rishabh2"></Header>
      <Header title="rishabh3"></Header>
      <Header title="rishabh4"></Header>
    </div>
  );
}

// function HeadersWithButton(){
//   const [title, setTitle] = useState("Rishabh")
//   function updateTitle(){
//     setTitle(Math.random())
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>Click me to change the title</button>
//       <Header title={title}></Header>
//     </div>
//   )
// }

const Header = memo(function Header({ title }) {
  return (
    <div>
      <br />
      My name is {title}
    </div>
  );
});

export default App;
