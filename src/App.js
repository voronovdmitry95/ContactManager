import './App.css';
import ContactList from './components/ContactList';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import MessageDetail from './components/MessageDetail';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" fixed="top">
        <h3>Contact Manager</h3>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/" exact element={<ContactList />} />
          <Route path="/message/:id" element={<MessageDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
