import { BiBell } from "react-icons/bi"

import './bell.scss'

const Bell = () => {
  return (
    <div className="bell__wrapper">
      <div className="bell__link">
        <BiBell style={{ color: 'var(--text-color)' }} size={25} />
      </div>
      <div className="bell__circle">0</div>
    </div>
  )
}

export default Bell