import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome='Nando' idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Nanda' idade={22} nerd={false}></DiretaFilho>
        </div>
    )
}