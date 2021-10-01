import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large #0d47a1 blue darken-4 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a href='#tech-list-modal' className='btn-floating red modal-trigger'>
            <i className='material-icons orange'>face</i>
          </a>
        </li>
        <li>
          <a
            href='#add-tech-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons green'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
