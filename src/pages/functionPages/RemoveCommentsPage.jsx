import React from 'react';
import { useCodeInput } from '../../context/CodeInputContext';
import removeComments from '../../functions/removeComments';


const RemoveCommentsPage = () => {
  const { code } = useCodeInput();
  const cleanedCode = removeComments(code);

  return (
    <div className="bg-base-200 p-6 rounded-xl shadow-xl mt-6">
      <h2 className="text-2xl font-bold text-primary mb-4">C Code Without Comments</h2>

      {code.trim() === '' ? (
        <p className="text-gray-500">No input code provided. Please enter your code on the homepage.</p>
      ) : (
        <pre className="bg-white p-4 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
          {cleanedCode}
        </pre>
      )}

      <div className="mt-4">
        <p className="text-sm text-gray-500">
          All single-line and multi-line comments have been removed from the input code.
        </p>
      </div>
    </div>
  );
};

export default RemoveCommentsPage;
