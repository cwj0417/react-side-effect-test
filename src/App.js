import counterGenerator from './counter';
import StateCounter from './stateCounter';
import ShowChild from './showChild'

const Counter1 = counterGenerator(1);
const Counter2 = counterGenerator(2);
const Counter3 = counterGenerator(3);
const Counter4 = counterGenerator(4);

function App() {
  return (
    <div className="App">
      {/* <ShowChild/> */}
      {/* <Counter1 >
        <Counter2>
          <Counter3>
            <Counter4 />
          </Counter3>
        </Counter2>
      </Counter1> */}
      {/* <Counter1/> */}
      <Counter2/>
      <Counter3/>
      {/* <Counter4/> */}
      <StateCounter />
    </div>
  );
}

export default App;
