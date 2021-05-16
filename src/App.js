import './App.css';
import React, { useState } from 'react';

function App() {
  const [words, setWords] = useState("");
  const [num, setNum] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  function GetData(e) {
    e.preventDefault();
    setError("");
    setLoading("Loading...");
    setWords("");
    if (!num.match(/^[0-9]+$/)) {
      setLoading("");
      setError("Error:Only numeric value accepted!");
    } else{
      fetch('https://word-counts.herokuapp.com/' + num).then((result) => result.json()).then((data) => {
        var x = data.map((val, id) => <tr className="Data-list-item" key={id}><td>{id + 1}.</td><td style={{ fontWeight: 'bold' }}>{val[0]}</td><td>{val[1]}</td></tr>);
        setLoading("");
        setWords(x);

      }
      ).catch((err) => setError(err));
    }
  }

  return (<>
    <div className="Navbar">
      <div className="Nav-item" id="Title"><span style={{ color: 'teal' }}>INVICTUS</span>  {num === "" ? "N" : num}-Most Frequently Occurred Words</div>
    </div>
    <div className="Container">

      <div className="Container-item" id="Searchbar">
        <form id="Form">
          <input type="number" id="Number" name="num" value={num} placeholder="Enter a number" onChange={(e) => setNum(e.target.value)}></input>
          <br></br><input type="submit" id="Button" onClick={(e) => GetData(e)} value="Search Occurrence"></input>
        </form>
      </div>
      <div className="Container-item" id="Data">
        <div id="Data-show">
          {words && <div id="Data-head"><div id="Sno">S.No.</div><div id="Word">Word</div><div id="Occ">Occurrence</div></div>}
          {loading ? <p style={{ fontWeight: 'bold', marginLeft: '7px' }}>{loading}</p> : null}{error ? <p style={{ color: 'red', fontWeight: 'bold', marginLeft: '7px' }}>{error}</p> : null}<table id="Data-list"><tbody>{words ? words : null}</tbody></table>
        </div>
      </div>
    </div>



  </>
  );
}

export default App;
