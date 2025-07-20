import React from 'react';
import { useCodeInput } from '../../context/CodeInputContext';
import tokenizing from '../../functions/tokenizing';

const TokenizationPage = () => {
  const { code } = useCodeInput();
  const tokens = tokenizing(code);

  return (
    <div className="p-6">
      <div className="bg-base-200 p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Tokenization of C Code
        </h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full bg-white rounded-lg shadow">
            <thead className="bg-primary text-white">
              <tr>
                <th>#</th>
                <th>Token Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="capitalize">{token.type}</td>
                  <td className="font-mono">{token.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Total Tokens: <span className="font-bold">{tokens.length}</span>
        </div>
      </div>
    </div>
  );
};

export default TokenizationPage;
