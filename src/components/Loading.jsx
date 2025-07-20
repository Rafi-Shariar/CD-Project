import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Loading = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/operations');
        }, 2000); // 2 seconds

        return () => clearTimeout(timer); // cleanup
    }, [navigate]);

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default Loading;