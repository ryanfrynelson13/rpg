import React from 'react'
import stickFigure from '../../img/heros/266-2668238_share-walking-stick-figure-icon.png'
import '../../styles/board.css'

const BoardSquare = ({curr}) => {
  return (
    <div className={curr? 'board-square curr border border-warning ': 'board-square border border-warning'}>
        <img src={curr? stickFigure : ''} alt="" />
    </div>
  )
}

export default BoardSquare