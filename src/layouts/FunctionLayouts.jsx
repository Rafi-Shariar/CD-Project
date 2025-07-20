import React from "react";
import { useCodeInput } from "../context/CodeInputContext";
import getStringLength from "../functions/getStringLength";
import { Outlet, useNavigate } from "react-router";
import getSyntaxEroor from "../functions/getSyntaxError";

const FunctionLayouts = () => {
  const { code } = useCodeInput();
  const navigate = useNavigate();

  const errors = getSyntaxEroor(code);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-primary mb-6 text-center">
        C Code Analysis Tools
      </h1>

      <div className="mb-6 text-center space-x-8 text-lg text-gray-700">
        <span>
           Length: <strong>{getStringLength(code)}</strong>
        </span>
        <span className="font-semibold text-red-400">
           Syntax Errors:{" "}
          <strong>{errors[0].startsWith("✅") ? 0 : errors.length}</strong>
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          className="btn btn-soft btn-primary min-w-[180px]"
          onClick={() => navigate("removeextraspace")}
        >
          Remove Extra Spaces
        </button>

        <button
          className="btn btn-soft btn-secondary min-w-[180px]"
          onClick={() => navigate("removespace")}
        >
          Remove Extra Spaces
        </button>

        <button
          className="btn btn-soft btn-success min-w-[180px]"
          onClick={() => navigate("keywords")}
        >
          Find Keywords
        </button>

        <button
          className="btn btn-soft btn-accent min-w-[180px]"
          onClick={() => navigate("identifier")}
        >
          Identifiers
        </button>

        <button
          className="btn btn-soft btn-error min-w-[180px]"
          onClick={() => navigate("syntaxerrors")}
        >
          Syntax Errors
        </button>

        <button
          className="btn btn-soft btn-error min-w-[180px]"
          onClick={() => navigate("tokenizing")}
        >
          Tokenizing
        </button>

        <button
          className="btn btn-soft btn-info min-w-[180px]"
          onClick={() => navigate("comments")}
        >
          Comments
        </button>

        <button
          className="btn btn-soft btn-warning min-w-[180px]"
          onClick={() => navigate("removedcomments")}
        >
          Remove Comments
        </button>

       
      </div>

      <div>
        <Outlet />
      </div>

      <div className="flex justify-center mt-6">
         <button
          className="btn btn-soft btn-primary min-w-[180px]"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default FunctionLayouts;
