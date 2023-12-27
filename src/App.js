import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';


function App() {
  return (
    <div className='App'>
      <Header auth={true}/>
      <div className='container'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;