// import App.css
import './App.css';
// import navigation.js
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">


      <Navigation />
      <div className='title'>
        <h1 className='wrapper'>
          <span > Hello. I'm Pritam</span><br></br>
          <span> A Web Developer</span>
        </h1>
        <p className='description'> I am passionate about creating experiences that are easy to use, accessible, and that meet the user's needs.</p>
      </div>



    </div>
  );
}

export default App;
