import React from 'react';
import { useCodeInput } from '../../context/CodeInputContext';
import getCKeywords from '../../functions/getCKeywords';

const KeywordsPage = () => {
  const { code } = useCodeInput();
  const keywords = getCKeywords(code);

  return (
    <div className="bg-base-200 p-6 rounded-xl shadow-xl mt-6">
      <h2 className="text-2xl font-bold text-primary mb-4">C Keywords Found</h2>

      {keywords.length === 0 ? (
        <p className="text-gray-500">No C keywords found in the input code.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full bg-white">
            <thead>
              <tr>
                <th>#</th>
                <th>Keyword</th>
              </tr>
            </thead>
            <tbody>
              {keywords.map((keyword, index) => (
                <tr key={keyword}>
                  <td>{index + 1}</td>
                  <td className="font-medium">{keyword}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4">
        <p className="text-sm text-gray-500">
          The table above lists all unique C language keywords found in your code.
        </p>
      </div>
    </div>
  );
};

export default KeywordsPage;
