// Basic Components
// function Greeting() {
//   return <h1>Hello, React!</h1>;
// }
// export default Greeting;

// function Welcome() {
//   return <h1>Hello, Vesa!</h1>;
// }
// export default Welcome;

// Using props
// import Welcome from './Welcome';

// function App() {
//   return (
//     <div>
//       <Welcome name="Vesa" />
//       <Welcome name="Tina" />
//       <Welcome name="Alex" />
//     </div>
//   );
// }
// export default App;


//Using Parent & Child Components
import { useState } from "react";
import Child from './src/Child';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>I am the parent component</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>

      <Child name="Vesa" count={count} />
      <Child name="Tina" count={count} />
    </div>
  );
}

export default App;