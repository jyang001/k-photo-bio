import './App.css';
import './components/Card'
import data from './data'
import Card from './components/Card';

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.key}
        {...item}
      />
    )
  })
  
  return (
    <div>
      <nav>
        <img src="nav-logo.png" alt="not found" />
        <div className="heading">K-Pop Photo Bio</div>
      </nav>
      <main>
        {cards}
      </main>
    </div>
  );
}

export default App;