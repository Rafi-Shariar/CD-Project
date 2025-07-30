import React from "react";
import { useCodeInput } from "../context/CodeInputContext";
import getStringLength from "../functions/getStringLength";
import { Outlet, useNavigate } from "react-router";
import logo from '../assets/rope.png';
const FunctionLayouts = () => {
  const { code } = useCodeInput();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
       <section className="mb-6  bg-slate-100 p-6 rounded-2xl">
               <div className="flex items-center justify-center gap-4">
                 <div>
                  <img src={logo} alt="" className="w-12"/>
                 </div>
                 <div>
                   <h1 className="text-4xl font-bold text-primary">
                  String<span className="text-sky-600">Forge</span>
                </h1>
                 </div>
               </div>
                
              </section>

      <div className="mb-6 text-center space-x-8 text-lg text-gray-700">
        <span>
          Length: <strong>{getStringLength(code)}</strong>
        </span>
      </div>

      <div className="max-w-5xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Space Tools
            </h3>
            <div className="grid gap-4">
              <button
                className="btn btn-primary btn-outline min-w-[180px]"
                onClick={() => navigate("removeextraspace")}
              >
                Remove Extra Spaces
              </button>
              <button
                className="btn btn-secondary btn-outline min-w-[180px]"
                onClick={() => navigate("removespace")}
              >
                Remove All Spaces
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Code Analysis
            </h3>
            <div className="grid gap-4">
              <button
                className="btn btn-success btn-outline min-w-[180px]"
                onClick={() => navigate("keywords")}
              >
                Find Keywords
              </button>
              <button
                className="btn btn-accent btn-outline min-w-[180px]"
                onClick={() => navigate("identifier")}
              >
                Identifiers
              </button>
              <button
                className="btn btn-error btn-outline min-w-[180px]"
                onClick={() => navigate("tokenizing")}
              >
                Tokenizing
              </button>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Comments
            </h3>
            <div className="grid gap-4">
              <button
                className="btn btn-info btn-outline min-w-[180px]"
                onClick={() => navigate("comments")}
              >
                Show Comments
              </button>
              <button
                className="btn btn-warning btn-outline min-w-[180px]"
                onClick={() => navigate("removedcomments")}
              >
                Remove Comments
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
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
