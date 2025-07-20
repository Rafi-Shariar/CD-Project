import React from 'react';
import { useCodeInput } from '../../context/CodeInputContext';
import getSyntaxEroor from '../../functions/getSyntaxError';

const SyntaxErrorPage = () => {
  const { code } = useCodeInput();
  const errors = getSyntaxEroor(code);

  return (
    <div className="bg-base-200 p-6 rounded-xl shadow-xl mt-6">
      <h2 className="text-2xl font-bold text-primary mb-4">C Syntax Checker</h2>

      {errors.length === 1 && errors[0].startsWith('✅') ? (
        <div className="alert alert-success shadow-lg">
          <span>{errors[0]}</span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Error Message</th>
              </tr>
            </thead>
            <tbody>
              {errors.map((err, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td className="text-red-500">{err}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SyntaxErrorPage;
