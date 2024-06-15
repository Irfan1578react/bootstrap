import logo from './logo.svg';
import './App.css';

function App() {
  return (
 <div className="bg-secondary">   
    <header className="p-3 bg-dark text-white sticky-top">
    <div className="row">
      <div className="col-12 col-md-6 ">
        <h1>My Blog</h1>
      </div>
      <div className="col-12 col-md-6 mt-2 d-flex justify-content-start justify-content-md-end">
        <nav>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Home</a></li>
            <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">About</a></li>
            <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
<div className="container py-3 ">
  <div className="card bg-info text-white">
    <div className="card-body">
  <h1 className="card-title">Simple blog with bootstrap 5 </h1>
  <p className="card-text">Here you can view recent posts!</p>
  </div>
  </div>
  <div className="row mt-2">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
      <div className="card">
      <img className="img-fluid rounded" src="https://picsum.photos/300/200"></img>
      <div className="card-body">
      <h2 className="mb-3">Post title 1</h2>
      <p>Date: Feb 15,2024</p>
      <p>This is the content of post 1</p>
      </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
    <div className="card">
      <img className="img-fluid rounded" src="https://picsum.photos/300/200"></img>
      <div className="card-body">
      <h2 className="mb-3">Post title 2</h2>
      <p>Date: Feb 16,2024</p>
      <p>This is the content of post 2</p>
      </div>
    </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4  col-lg-3 mt-2">
    <div className="card">
      <img className="img-fluid rounded" src="https://picsum.photos/300/200"></img>
      <div className="card-body">
      <h2 className="mb-3">Post title 3</h2>
      <p>Date: Feb 17,2024</p>
      <p>This is the content of post 2</p>
      </div>
    </div>
    </div>
    
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
    <div className="card">
    <img className="img-fluid rounded" src="https://picsum.photos/300/200"></img>
    <div className="card-body">
      <h2 className="mb-3">Post title 4</h2>
      <p>Date: Feb 18,2024</p>
      <p>This is the content of post 4</p>
    </div>
    </div>
    </div>
    <div className="col-12  col-sm-6 col-md-4 col-lg-3 mt-2">
    <div className="card">
    <img className="img-fluid rounded" src="https://picsum.photos/300/200"></img>
    <div className="card-body">
      <h2 className="mb-3">Post title 5</h2>
      <p>Date: Feb 19,2024</p>
      <p>This is the content of post 5</p>
    </div>
    </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
    <div className="card">
    <img className="img-fluid rounded" src="https://picsum.photos/300/200"></img>
    <div className="card-body">
      <h2 className="mb-3">Post title 6</h2>
      <p>Date: Feb 20,2024</p>
      <p>This is the content of post 6</p>
      </div>
    </div>
    </div>
  
  </div>
  

</div>
<div className="container  mb-2">
  <div className="row ">
    <div className="col-12 col-lg-6 bg-white p-3">
  <h1>Contact Form</h1>
  <form action="">
    <div className="form-group">
    <label>Email Address</label>
    <input type="email" className="form-control" name="" id=""></input>
    </div>
    <div className="form-group">
    <label>Name</label>
    <input type="text"  className="form-control" name="" id=""></input>
    </div>
    <div className="form-group">
    <label>Message</label>
    <textarea name="" id="" className="form-control" cols="30"></textarea>
    </div>
    <button className="btn btn-primary my-2">Submit</button>
  </form>
  </div>
  </div>
</div>
<footer className="p-3 bg-dark text-white">
    <div className="row">
      <div className="col">
        <p>2024 My Blog All rights Reserved</p>
      </div>
      <div className="col">
        <ul className="list-inline">
          <li className="list-inline-item "><a href="#" className="text-white text-decoration-none">Terms od services</a></li>
          <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
          <li className="list-inline-item "><a href="#" className="text-white text-decoration-none" >Site Map</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>
      

      
    
  );
}

export default App;
