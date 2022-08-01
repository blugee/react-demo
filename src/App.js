import { useState } from 'react';
import './App.css';
import SignUpForm from './components/Controls/SignUpForm';

function App() {

  const [tab, setTab] = useState("fan");

  const handleTabClick = (tabName) => {
    setTab(tabName);
  }

  return (
    <>
      <div className="tab-container">
        <div className={`tab ${tab === "fan"? "active" : "" }`} onClick={(e) =>handleTabClick("fan")}>
          FAN SIGNUP
        </div>
        <div className={`tab ${tab === "fan"? "" : "active" }`} onClick={(e) =>handleTabClick("talent")}>
          TALENT SIGNUP
        </div>
      </div>

      <SignUpForm 
        tab={tab}
      />

    </>
  );
}

export default App;
