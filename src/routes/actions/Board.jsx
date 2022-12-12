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
  return (
    <div ref={divElement} tabIndex={0} onKeyDown={() => {console.log('yo');}}>
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