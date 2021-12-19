import { useState, useRef, useEffect } from 'react'
import './App.css';
import GameField from './components/GameField';
import Navbar from './components/Navbar';


const cols = 30
const rows = 50

function App() {

  const [run, setRun] = useState(false)

  const make2DArray = () => {
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
    data: make2DArray()
  })
  const field = useRef(initField.data)

  const selectCell = (i, j) => {
    if (run) { return; }
    // console.log(i, j);
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

  const countNeighbors = (grid, x, y) => {
    let sum = 0
    for (let i=-1; i<2; i++) {
      for (let j=-1; j<2; j++) {
        let c = (x + i + cols) % cols
        let r = (y + j + rows) % rows
        // console.log(grid);
        sum += grid[c][r]
      }
    }
    sum -= grid[x][y]
    return sum
  }

  const runGame = () => {
    let grid = make2DArray()
    for (let i=0; i<cols; i++) {
      for (let j=0; j<rows; j++) {
        const neighbor = countNeighbors(field.current, i, j)
        const state = field.current[i][j]
        if (state === 0 && neighbor === 3) {
          grid[i][j] = 1
          // console.log(grid[i][j], i, j);
        }
        else if (state === 1 && (neighbor < 2 || neighbor > 3)) {
          grid[i][j] = 0
        }
        else {
          grid[i][j] = field.current[i][j]
        }
      }
    }
    field.current = grid
    setinitField({
      data: grid
    })
    }

  const toggleRun = () => {
    const status = !run
    setRun(status)
    if (status) {
      console.log('start!!');
      runGame()
    }
    else {
      console.log('stop!!');
    }
  }

  const resetGrid = () => {
    if (run) { return; }
    setinitField({
      data: make2DArray()
    })
    field.current = make2DArray()
  }

  useEffect(() => {
    if (run) {
      setTimeout(()=>{
        runGame()
       }, 50)
    }
  }, [initField])

  return (
    <div className="App">
      <Navbar run={run} runGame={runGame} handleRun={toggleRun} reset={resetGrid} />
      <GameField data={field} handleClick={selectCell} />
    </div>
  );
}

export default App;
