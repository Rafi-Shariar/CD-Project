import React from 'react';
import { useCodeInput } from '../context/CodeInputContext';
import getStringLength from '../functions/getStringLength';
import { Outlet, useNavigate } from 'react-router';
import getSyntaxEroor from '../functions/getSyntaxError';

const FunctionLayouts = () => {

    const {code} = useCodeInput();
    const navigate = useNavigate();

    const errors = getSyntaxEroor(code);

    return (
        <div>
            Function page
            <h1>lenght: {getStringLength(code)}</h1>
            <h1>Syntaxt Error: {errors[0].startsWith('✅') ? 0 : errors.length}</h1>

            <div>
                <button className='btn btn-soft btn-success' onClick={()=>{navigate('removeextraspace')}}>Remove Extra Spaces</button>
                <button className='btn btn-soft btn-success' onClick={()=>{navigate('removespace')}}>Remove Extra Spaces</button>
                <button className='btn btn-soft btn-success' onClick={()=>{navigate('keywords')}}>Find Keywords</button>
                <button className='btn btn-soft btn-success' onClick={()=>{navigate('identifier')}}>Identifiers </button>
                <button className='btn btn-soft btn-error' onClick={()=>{navigate('syntaxerrors')}}>Syntax Errors</button>
                <button className='btn btn-soft btn-error' onClick={()=>{navigate('tokenizing')}}>Tokenizing</button>
                <button className='btn btn-soft btn-primary' onClick={()=>{navigate('/')}}>Back to Home</button>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default FunctionLayouts;