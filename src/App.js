import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Pay from './components/Pay';

// React Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/pay" element={<Pay />}/>
      </Routes>
      </BrowserRouter>
      <NotificationContainer />
    </>
  );
}

export default App;
