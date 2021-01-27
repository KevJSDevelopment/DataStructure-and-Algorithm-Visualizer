import Navbar from './containers/Navbar'
import Algorithms from './containers/Algorithms'

function App() {
  return (
    <div className="App h-screen">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1 ..."><Navbar /></div>
        <div class="col-span-2 ..."><Algorithms/></div>
      </div>
    </div>
  );
}

export default App;
