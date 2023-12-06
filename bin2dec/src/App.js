import './App.css';
import { Bin2dec } from './ui/bin2dec';

function App() {
  return (
    <div className='bg-gray-800'>
      <div className="container mx-auto">
        { Bin2dec() }
      </div>
    </div>
  );
}

export default App;
