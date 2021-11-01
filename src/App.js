import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { User } from './Components/User';
import { BookingDetails } from './Components/RestFull-Api/BookingDetails';
import { Booking, BookingGet } from './Components/RestFull-Api/BookingGet';
import { BookingDelete } from './Components/RestFull-Api/BookingDelete';

function App() {
  return (
    <div>
     
    <BookingDetails />
     {/* <BookingGet /> */}
     <BookingDelete />
    </div>
  );
}

export default App;
