import React from 'react';
import { useNavigate } from 'react-router';
import { useCodeInput } from '../context/CodeInputContext';

const HomePage = () => {
    const { code, setCode } = useCodeInput();
    const navigate = useNavigate();



    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="p-6">
      <textarea
        className="textarea textarea-bordered w-full h-64"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your C code here..."
      />
      <button
        className="btn btn-primary mt-4"
        onClick={() => navigate("/loading")}
      >
        Analyze Code
      </button>
    </div>
        </div>
    );
};

export default HomePage;
