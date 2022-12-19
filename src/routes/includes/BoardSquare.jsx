import React from 'react'
import stickFigure from '../../img/heros/12-120469_human-clipart-red-red-stick-figure-walking.png'
import '../../styles/board.css'

const BoardSquare = ({curr}) => {
  return (
    <div className={curr? 'board-square curr': 'board-square'}>
        <img src={curr? stickFigure : ''} alt="" />
    </div>
  )
}

export default BoardSquare