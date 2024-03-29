import { useState } from 'react';
import AccountModal from './modal/AccountModal'
import './account.scss';

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <div className='account__wrapper'>
      <button onClick={toggleModal}>
        <div className='account__img'>
          И
        </div>
      </button>
      <div className='account__name'>
        Иванов Иван Иванович
      </div>
      <AccountModal isModalOpen={isModalOpen} toggleModal={toggleModal}/>
    </div>
  );
};

export default Account;