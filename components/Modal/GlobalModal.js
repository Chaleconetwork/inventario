import { useState } from 'react';
import { CloseButton } from '../CloseButton/CloseButton';

const GlobalModal = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${!isOpen && 'hidden'}`}>
            <h1>Modal</h1>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-slate-500 border shadow-sm rounded-lg p-6">
                <h1>Nueva venta</h1>
                <input className='my-2' type="text" name="" id="" placeholder='Precio' /> <br />
                <input className='my-2' type="text" name="" id="" placeholder='Cantidad' /> <br />
                <CloseButton onClose={onClose} />
                </div>
            </div>
        </div>
    );
};

export default GlobalModal;
