import React from 'react';
import { useCodeInput } from '../../context/CodeInputContext';
import removeSpaces from '../../functions/removeSpaces';

const RemoveSpaces = () => {
  const { code } = useCodeInput();
  const result = removeSpaces(code);

  return (
    <div className="bg-base-200 p-6 rounded-xl shadow-xl mt-6">
      <h2 className="text-2xl font-bold text-primary mb-4">
        Removed White Spaces
      </h2>

      <div className="mb-4">
        <p className="text-lg font-semibold">Processed Output:</p>
        <textarea
          readOnly
          className="textarea textarea-bordered w-full h-64 mt-2 bg-white text-base"
          value={result}
        />
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">
          This output preserves line breaks but removes all white spaces between words.
        </p>
      </div>
    </div>
  );
};

export default RemoveSpaces;
