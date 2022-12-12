import React, {useRef, useEffect, useState} from 'react'
import BoardSquare from './BoardSquare'
import '../../styles/board.css'
import swamp from '../../img/heros/pq61m18mmzp51.webp'


const Board = () => {
  const divElement = useRef(null)

  const [boardSquares, setBoardSquares] = useState([])
  const [currentSquare, setCurrentSquare] = useState(85)

  useEffect(()=> {
    divElement.current.focus()
    const tempArr = []
    for(let i = 0; i <200; i++){
      tempArr.push('')
      setBoardSquares(tempArr)
    }
  }, [])

  const moveHero = (event) => {
    if(event.key === 'ArrowRight' ){
      setCurrentSquare(currentSquare +1)
      setBoardSquares(boardSquares)
    }
    if(event.key === 'ArrowLeft' ){
      setCurrentSquare(currentSquare -1)
      setBoardSquares(boardSquares)
    }
    if(event.key === 'ArrowUp' ){
      setCurrentSquare(currentSquare -20)
      setBoardSquares(boardSquares)
    }
    if(event.key === 'ArrowDown' ){
      setCurrentSquare(currentSquare +20)
      setBoardSquares(boardSquares)
    }
  } 
  return (
    <div ref={divElement} tabIndex={0} onKeyDown={(event) => {moveHero(event);}}>
        <h2 className='text-center'>Board</h2>
        <div className='board' style={{  
            backgroundImage: `url(${swamp})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            {
              boardSquares.map((el, i) => {
                let curr = i === currentSquare
                return (
                  <div key={i} className='board-square'>
                    <BoardSquare curr={curr}/>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Board