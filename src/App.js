// import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
     
  );
}

export default App;
