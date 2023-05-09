import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  // prettier-ignore
  const [board,setBoard] =useState([
  [0,0,0,0,0,0,0,0] ,
  [0,0,0,0,0,0,0,0] ,  
  [0,0,0,0,0,0,0,0] , 
  [0,0,0,1,2,0,0,0] , 
  [0,0,0,2,1,0,0,0] , 
  [0,0,0,0,0,0,0,0] , 
  [0,0,0,0,0,0,0,0] , 
  [0,0,0,0,0,0,0,0] ,     
  ])

  const [turnColor, setTurnColor] = useState(1);

  const direction = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  const newBoard = JSON.parse(JSON.stringify(board));

  const clickcell = (x: number, y: number) => {
    console.log(x, y);
    for (const d of direction) {
      if (board[y + d[0]] !== undefined && board[y + d[0]][x + d[1]] === 3 - turnColor) {    
        for (let distance = 1; distance <= 7; distance++) {
          if( newBoard[y+d[0]*distance] !== undefined ){
            break
          }
          else if( newBoard[y+d[0]*distance][x] === 0)
          (put disc)
          elis if( newBoard[y+d[0]*distance]{x} !== turnColor)

          elis if( newBoard[y+d[0]*distance]{x} === turnColor)
          
       }
        newBoard[y][x] = turnColor;
        setTurnColor(3 - turnColor);
      }
    }
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((cell, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickcell(x, y)}>
              {cell !== 0 && (
                <div className={styles.disc} style={{ background: cell === 1 ? '#000' : '#fff' }} />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
