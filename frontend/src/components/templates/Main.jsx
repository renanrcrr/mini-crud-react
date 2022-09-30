import './Main.css';
import React from 'react';
import Header from './Header';

//Isso é um component funcional porque não tem estado
//eslint-disable-next-line
export default props =>
    <>
        <Header {...props} />
        <main className='content container-fluid'>
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </>
