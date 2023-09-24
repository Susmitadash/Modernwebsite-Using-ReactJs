
import './App.css';

function App() {
  return (
    <div className="container">
      <nav>
     <img src="images/logo.png" className="logo" alt="logo"/>
     <ul>
      <li><a href="#header">Travel Guide</a></li>
      <li><a href="#famousplaces">Famous Places</a></li>
      <li><a href="#contactus">Contact Us</a></li>
     </ul>
     <button className="btn">
      <img src="images/booking1.png" alt="booking"></img>
      </button>
     </nav>
     {/*Header content*/}
     <div className="content">
      <h1>Wanderlust: Your Journey Begins Here</h1><br />
      <p>Welcome to our world of exploration, where every journey is a canvas for your dreams. Our mission is to inspire you to venture beyond the ordinary, to embrace the unknown, and to create memories that last a lifetime. Join us as we unlock the beauty of diverse cultures, breathtaking landscapes, and the endless possibilities of travel.</p>
      {/*Form*/}
      <form>
        <input type="text" placeholder="Country Name"/>
        <button type="submit" className="btn">Search</button>
        </form>
     </div>
    </div>
  );
}

export default App;
