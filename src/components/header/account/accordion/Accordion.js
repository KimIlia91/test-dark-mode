import { MdKeyboardArrowDown } from "react-icons/md"
import { useState } from "react"
import './accordion.scss'

const Accordion = ({title}) => {
    const [openAccordion, setOpenAccordion] = useState(false)
    return (
        <div className="accordion">
            <div onClick={() => { setOpenAccordion(!openAccordion) }} className="accordion__wrapper">
                <div className="accordion__title">{title}</div>
                    {openAccordion ? 
                        <MdKeyboardArrowDown style={{ transform: 'rotateX(180deg)', color: 'var(--text-color)' }} size={20} /> : 
                        <MdKeyboardArrowDown style={{ color: 'var(--text-color)' }} size={20} />
                    }
                </div>
            {
                openAccordion &&
                <div className="accordion__descr">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quos vel magnam animi voluptates corporis optio accusamus maxime, natus quam, praesentium alias ad nisi iusto illo fuga libero, quibusdam ullam!
                </div>
            }
        </div>
    )
}

export default Accordion