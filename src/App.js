
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
