import { useState, useRef } from 'react'
import './App.css';
import GameField from './components/GameField';
import Navbar from './components/Navbar';


const cols = 32
const rows = 60
// const cols = 10
// const rows = 10

function App() {

  const make2DArray = (cols, rows,) => {
    let grid = new Array(cols)
    for (let i=0; i<cols; i++) {
      grid[i] = new Array(rows)
      for (let j=0; j<rows; j++) {
        grid[i][j] = 0
      }
    }
    return grid
  }

  const [initField, setinitField] = useState({
    data: make2DArray(cols, rows)
  })
  const field = useRef(initField.data)


  const selectCell = (i, j) => {
    console.log(i, j);
    let grid = initField.data
    if (grid[i][j] > 0) {
      grid[i][j] = 0
      setinitField({
        data: grid
      })
      field.current = initField.data
      return
    }
    grid[i][j] = 1
    setinitField({
      data: grid
    })
    field.current = initField.data
  }

  return (
    <div className="App">
      <Navbar />
      <GameField data={field.current} handleClick={selectCell} />
    </div>
  );
}

export default App;
