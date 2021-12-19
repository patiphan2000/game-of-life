import { useState, useRef, useEffect } from 'react'
import './App.css';
import GameField from './components/GameField';
import Navbar from './components/Navbar';
import useWindowDimensions from './hooks/useWindowDimensions';


function App() {

  const { height, width } = useWindowDimensions();

  // Hard code cols
  const getCol = () => {
    if (width > 1600) { return 60 }
    if (width > 1200) { return 42 }
    if (width > 970) { return 35 } 
    if (width > 970) { return 25 } 
    return 15
  }

  const make2DArray = () => {
    // console.log(width);
    const cols = getCol()
    const rows = height > 900? 30:20
    let grid = new Array(rows)
    for (let i=0; i<rows; i++) {
      grid[i] = new Array(cols)
      for (let j=0; j<cols; j++) {
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

  useEffect(() => {
    setinitField({
      data: make2DArray()
    })
    field.current = initField.data
    // console.log(width, height);
  }, [width, height])

  return (
    <div className="App">
      <Navbar />
      <GameField data={field.current} handleClick={selectCell} />
    </div>
  );
}

export default App;
