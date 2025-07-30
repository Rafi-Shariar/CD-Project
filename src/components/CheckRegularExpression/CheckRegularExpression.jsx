import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import CheckRegexMatch from '../../functions/CheckRegularExpression';

const CheckRegularExpression = () => {
  const [showAns, setShowAns] = useState(false);
  const [ans, setAns] = useState(false);
  const [pattern, setPattern] = useState("");
  const [inputStr, setInputStr] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();

    const patternInput = e.target.pattern.value.trim();
    const strInput = e.target.inputstr.value.trim();

    setPattern(patternInput);
    setInputStr(strInput);

    const result = CheckRegexMatch(patternInput,strInput);
    setAns(result);
    setShowAns(true);
  };

  return (
    <div className=" bg-gradient-to-br from-[#819A91] to-[#D1D8BE] border border-blue-600 rounded-2xl p-8 mt-16 shadow-xl">
      <h1 className="text-2xl text-semibold  mb-6">
         <span className='text-3xl font-semibold text-slate-100'>Regular Expression</span> Checker
      </h1>

      <form onSubmit={handleCheck} className="space-y-5">
        <input
          name="pattern"
          type="text"
          className="input input-bordered w-full"
          placeholder="Enter regex pattern (e.g. a*b)"
          required
        />
        <textarea
          name="inputstr"
          className="textarea textarea-bordered w-full"
          placeholder="Enter string to test"
          rows={4}
          required
        ></textarea>
        <button type="submit" className="btn btn-soft btn-success">
          Check
        </button>
      </form>

      {showAns && (
        <div className="mt-8">
          {ans ? (
            <div className="bg-green-100 border border-green-400 text-green-800 p-4 rounded-xl flex items-center gap-3 shadow-sm">
              <CheckCircle className="text-green-600" />
              <span className="text-lg font-medium">
                ✅ The string <strong>"{inputStr}"</strong> matches the pattern <strong>/{pattern}/</strong>
              </span>
            </div>
          ) : (
            <div className="bg-red-100 border border-red-400 text-red-800 p-4 rounded-xl flex items-center gap-3 shadow-sm">
              <XCircle className="text-red-600" />
              <span className="text-lg font-medium">
                ❌ The string <strong>"{inputStr}"</strong> does not match the pattern <strong>/{pattern}/</strong>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckRegularExpression;
