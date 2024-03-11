import React, { useContext } from 'react';
import { MyStore } from '../../store/Context';

const Header = () => {

    const store = useContext(MyStore)
    console.log('store', store)
    return (
        <div style={{border: '1px solid #333', height: '40px'}}>
            Header
        </div>
    );
}

export default Header;
