import Counter from './counter/Counter'
import Posts from './posts/Posts'
import BootstrapExample from './bootstrap-demo/BootstrapExample';
import HookDemo from './hooks/HookDemo';

function App() {

  return (
    <div className='container'>
     <HookDemo />
     <BootstrapExample />
     <Counter />
     <Posts />
    </div>
  )
}

export default App
