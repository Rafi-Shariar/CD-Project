import React from 'react';
import { useCodeInput } from '../../context/CodeInputContext';
import { getComments } from '../../functions/getComments';


const CommentsPage = () => {
  const { code } = useCodeInput();
  const comments = getComments(code);

  return (
    <div className="bg-base-200 p-6 rounded-xl shadow-xl mt-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Comments Found</h2>

      {comments.length === 0 ? (
        <p className="text-gray-500">No comments found in the input code.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full bg-white">
            <thead>
              <tr>
                <th>#</th>
                <th>Line</th>
                <th>Type</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{comment.line}</td>
                  <td>{comment.type}</td>
                  <td className="whitespace-pre-wrap">{comment.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4">
        <p className="text-sm text-gray-500">
          The table above shows all single-line and multi-line comments extracted from your C code.
        </p>
      </div>
    </div>
  );
};

export default CommentsPage;
