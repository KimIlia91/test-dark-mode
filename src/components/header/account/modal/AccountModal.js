import Accordion from '../accordion/Accordion'
import './accountModal.scss'

const AccountModal = ({isModalOpen, toggleModal}) => {
  return (
    <>
        <div 
            className={`account-modal__background ${isModalOpen ? 'account-modal__background-open' : ''}`} 
            onClick={toggleModal}
        ></div>
        <div className={`account-modal ${isModalOpen ? 'account-modal__open' : ''}`}>
            <div className="account-modal__content">
                <div className='account-modal__list'>
                    <div className='account-modal__list-item__primary'>
                        <a href="#">История посещений</a>
                    </div>
                    <div className='account-modal__list-item__primary'>
                        <Accordion title="Безопасноcть и вход" />
                    </div>
                    <div className='account-modal__list-item__primary'>
                        <a href="#">Выйти</a>
                    </div>
                    <div className='account-modal__list-item__secondary'>
                        Ваш последний визит: 09.02.2024 16:44:06
                    </div>
                    <div className='account-modal__list-item__secondary'>
                        Петрова Наталья Владимировна   
                    </div>
                    <div className='account-modal__list-item__secondary account-modal__list-item__secondary_bold'>
                        Под вашим аккаунтом вы можете 
                        <p>создать, изменять, подписывать и отправлять транзакции</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AccountModal