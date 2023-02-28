import React, {Dispatch, SetStateAction} from 'react';
import './modal.css';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;
interface IModalProps {
    children: any,
    active: boolean,
    setActive: Dispatcher<boolean>;
}

export const Modal = ({children, active, setActive}:IModalProps) => {
    return (
        <div className={active ? "modal active" : "modal"}>
            <div className={active ? "modal-content active" : "modal-content"}>
                <div className="header-content">
                    <button
                        className="close"
                        onClick={() => setActive(false)}
                    >
                        Close
                    </button>
                </div>
                <div className="scrollable-content">
                    {children}
                </div>
            </div>
        </div>
    );
}