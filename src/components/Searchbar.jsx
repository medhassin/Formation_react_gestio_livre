import axios from "axios";
import React, { useRef } from "react";

function Searchbar({ filtredBook }) {
  let year1 = useRef();
  let year2 = useRef();
  function searchHandler() {
    axios
      .get("https://gestion-livre-49710-default-rtdb.firebaseio.com/Films.json", {
        params: {
          orderBy: '"year"',
          startAt: Number(year1.current.value),
          endAt: Number(year2.current.value),
        },
      })
      .then((response) => {
        console.log(response.data);
        let tab = Object.keys(response.data).map((cle) => ({
          id: cle,
          ...response.data[cle],
        }));
        filtredBook(tab);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <td>Start Year</td>
          <td>
            <input type="number" className="form-control" ref={year1}></input>
          </td>
          <td>End Year</td>
          <td>
            <input type="number" className="form-control" ref={year2}></input>
          </td>
          <td>
            <button onClick={searchHandler} className="btn">
              Search
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Searchbar;