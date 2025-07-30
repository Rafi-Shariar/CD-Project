import React, { useState } from 'react';
import CheckEndingWith from '../../functions/CheckEndingWith';
import { CheckCircle, XCircle } from 'lucide-react'; // optional icons

const StringEndsWithContainer = () => {
  const [showAns, setShowAns] = useState(false);
  const [ans, setAns] = useState(false);
  const [endsWith, setEndsWith] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();

    const ending = e.target.ending.value.trim();
    const mainstr = e.target.mainstr.value.trim();
    setEndsWith(ending);

    const result = CheckEndingWith(ending, mainstr);
    setAns(result);
    setShowAns(true);
  };

  return (
    <div className="bg-gradient-to-br from-[#748DAE] to-[#9ECAD6] border border-blue-600 rounded-2xl p-8 mt-16 shadow-xl">
      <h1 className="text-2xl text-semibold  mb-6">
         <span className='text-3xl font-semibold text-slate-100 '>Ends With</span> Checker
      </h1>

      <form onSubmit={handleCheck} className="space-y-5">
        <input
          name="ending"
          type="text"
          className="input input-bordered w-full"
          placeholder="Enter ending characters"
          required
        />
        <textarea
          name="mainstr"
          className="textarea textarea-bordered w-full"
          placeholder="Enter main string"
          rows={4}
          required
        ></textarea>
        <button type="submit" className=" btn  btn-soft btn-info">
          Check
        </button>
      </form>

      {showAns && (
        <div className="mt-8">
          {ans ? (
            <div className="bg-green-100 border border-green-400 text-green-800 p-4 rounded-xl flex items-center gap-3 shadow-sm">
              <CheckCircle className="text-green-600" />
              <span className="text-lg font-medium">
                Yes! The string ends with <strong>"{endsWith}"</strong>
              </span>
            </div>
          ) : (
            <div className="bg-red-100 border border-red-400 text-red-800 p-4 rounded-xl flex items-center gap-3 shadow-sm">
              <XCircle className="text-red-600" />
              <span className="text-lg font-medium">
                No! The string does not end with <strong>"{endsWith}"</strong>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StringEndsWithContainer;
