import React from "react";
import { useNavigate } from "react-router";
import { useCodeInput } from "../context/CodeInputContext";
import { Copy } from "lucide-react"; 
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Sample Coppied');
const sampleTemplates = [
  {
    title: "Basic Hello World",
    code: `#include <stdio.h>

int main() {
    // Print hello
    printf("Hello, World!\\n");
    return 0;
}`,
  },
  {
    title: "Addition of Two Numbers",
    code: `#include <stdio.h>

int main() {
    int a = 5, b = 10;
    int sum = a + b;
    printf("Sum is: %d\\n", sum);
    return 0;
}`,
  },
  {
    title: "Loop with Comments",
    code: `#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        // printing i
        printf("%d\\n", i);
    }
    return 0;
}`,
  },
];

const HomePage = () => {
  const { code, setCode } = useCodeInput();
  const navigate = useNavigate();

  const handleCopy = (sampleCode) => {
    setCode(sampleCode);
    navigator.clipboard.writeText(sampleCode);
    notify();
  };

  return (
    <div className="min-h-screen bg-base-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">
          C Code Analyzer
        </h1>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Paste your C code below:
          </h2>
          <textarea
            className="textarea textarea-bordered w-full h-64 font-mono text-sm"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="// Paste your C code here..."
          />
          <div className="text-center mt-4">
            <button
              className="btn btn-primary px-8"
              onClick={() => navigate("/loading")}
            >
              Analyze Code
            </button>
          </div>
        </div>

        <hr className="my-8" />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Try with Sample Code Templates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTemplates.map((sample, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md p-4 border"
            >
              {/* Copy icon */}
              <button
                className="absolute top-2 right-2 tooltip tooltip-left"
                data-tip="Copy code"
                onClick={() => handleCopy(sample.code)}
              >
                <Copy className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
              </button>

              <h3 className="text-lg font-semibold mb-2">{sample.title}</h3>
              <pre className="bg-gray-100 p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                {sample.code}
              </pre>
            </div>
          ))}
        </div>
      </div>

      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
};

export default HomePage;
