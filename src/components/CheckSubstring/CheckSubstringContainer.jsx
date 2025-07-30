// components/StringContainsContainer.jsx
import React, { useState } from 'react';

import { CheckCircle, XCircle } from 'lucide-react'; // icons
import CheckSubstring from '../../functions/CheckSubstring';

const CheckSubstringContainer = () => {
  const [showAns, setShowAns] = useState(false);
  const [ans, setAns] = useState(false);
  const [substring, setSubstring] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();

    const sub = e.target.substring.value.trim();
    const mainstr = e.target.mainstr.value.trim();
    setSubstring(sub);

    const result = CheckSubstring(sub,mainstr);
    setAns(result);
    setShowAns(true);
  };

  return (
    <div className="bg-gradient-to-br from-[#555879] to-[#98A1BC] border border-blue-600 rounded-2xl p-8 mt-16 shadow-xl">
       <h1 className="text-2xl text-semibold  mb-6">
         <span className='text-3xl font-semibold text-slate-100'>Sub String</span> Checker
      </h1>

      <form onSubmit={handleCheck} className="space-y-5">
        <input
          name="substring"
          type="text"
          className="input input-bordered w-full"
          placeholder="Enter substring to search for"
          required
        />
        <textarea
          name="mainstr"
          className="textarea textarea-bordered w-full"
          placeholder="Enter main string"
          rows={4}
          required
        ></textarea>
        <button type="submit" className="btn btn-soft btn-primary">
          Check
        </button>
      </form>

      {showAns && (
        <div className="mt-8">
          {ans ? (
            <div className="bg-green-100 border border-green-400 text-green-800 p-4 rounded-xl flex items-center gap-3 shadow-sm">
              <CheckCircle className="text-green-600" />
              <span className="text-lg font-medium">
                Yes! The string contains <strong>"{substring}"</strong>
              </span>
            </div>
          ) : (
            <div className="bg-red-100 border border-red-400 text-red-800 p-4 rounded-xl flex items-center gap-3 shadow-sm">
              <XCircle className="text-red-600" />
              <span className="text-lg font-medium">
                No! The string does not contain <strong>"{substring}"</strong>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckSubstringContainer;
