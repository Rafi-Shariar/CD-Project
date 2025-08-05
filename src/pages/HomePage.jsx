import React from "react";
import { useNavigate } from "react-router";
import { useCodeInput } from "../context/CodeInputContext";
import { Copy } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import StringEndsWithContainer from "../components/StringEndsWith/StringEndsWithContainer";
import CheckSubstringContainer from "../components/CheckSubstring/CheckSubstringContainer";
import CheckRegularExpression from "../components/CheckRegularExpression/CheckRegularExpression";
import { FaSearchengin } from "react-icons/fa6";
import Footer from "../components/Footer";
const notify = () => toast.success("Sample Coppied");
import logo from "../assets/rope.png";
const sampleTemplates = [
  {
    title: "Code Snippet #1",
    code: `int a = 5; 
for (int i = 0; i < 5; i++) {
        // increment a
              a++;
   } 
   `,
  },

  {
    title: "Code Snippet #2",
    code: `int i=0; 
while(i < 10){
   if( i == 5) break;
   i++;
}`,
  },
  {
    title: "Code Snippet #3",
    code: `void sum( int a, int b){

return a+b;
}`,
  },
];

const RETempletes = [
  {
    title: "Regular Expression #1",
    code: `a*b+c*`,
    String: "aaabccc",
  },
  {
    title: "Regular Expression #2",
    code: `1*0101+`,
    String: "1110101",
  },
  {
    title: "Regular Expression #3",
    code: `m+n*o+p*`,
    String: "mnno",
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
    <div>
      <div className="min-h-screen bg-base-100 py-10 px-4">
        <section className="mb-6  bg-slate-100 p-6 rounded-2xl">
          <div className="flex items-center justify-center gap-4">
            <div>
              <img src={logo} alt="" className="w-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary">
                String<span className="text-sky-600">Forge</span>
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-600 mt-3 text-center">
            All-in-One String Toolbox: Regex Matching, Extra Space Removal,
            Keyword Finder, Comment Stripper & More!
          </p>
        </section>

        <div className="max-w-7xl mx-auto">
          <section className="flex gap-16">
            <div className="w-2/3 mb-10">
              {/* Code Input */}
              <div className="bg-gradient-to-br from-[#0F828C] to-[#78B9B5] p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl mb-4 text-slate-100">
                  Paste your C code below:
                </h2>
                <textarea
                  className="textarea textarea-bordered w-full h-64 font-mono text-sm"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Paste your C code here..."
                  required
                />
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary px-8"
                    onClick={() => navigate("/loading")}
                  >
                    Analyze Code <FaSearchengin />
                  </button>
                </div>
              </div>

              <div>
                <StringEndsWithContainer />
              </div>

              <div>
                <CheckSubstringContainer />
              </div>

              <div>
                <CheckRegularExpression />
              </div>
            </div>

            <div className="w-1/3  mx-auto grid grid-cols-1 gap-10 bg-sky-50 rounded-xl border border-sky-300 p-8 mb-10 shadow-2xl">
              {/* C Code Snippets Section */}
              <section>
                <h1 className="text-2xl font-bold text-sky-700 mb-6 border-b border-sky-300 pb-2">
                  Sample C Code Snippets
                </h1>

                <div className="space-y-6">
                  {sampleTemplates.map((sample, index) => (
                    <div
                      key={index}
                      className="relative bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Copy icon */}
                      <button
                        className="absolute top-3 right-3 tooltip tooltip-left"
                        data-tip="Copy code"
                        onClick={() => handleCopy(sample.code)}
                        aria-label={`Copy code for ${sample.title}`}
                      >
                        <Copy className="w-6 h-6 text-gray-400 hover:text-sky-600 cursor-pointer" />
                      </button>

                      <h3 className="text-xl font-semibold mb-3 text-sky-800">
                        {sample.title}
                      </h3>
                      <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap select-text">
                        {sample.code}
                      </pre>
                    </div>
                  ))}
                </div>
              </section>

              {/* Regular Expressions Section */}
              <section>
                <h1 className="text-2xl font-bold text-sky-700 mb-6 border-b border-sky-300 pb-2">
                  Sample Regular Expressions
                </h1>

                <div className="space-y-6">
                  {RETempletes.map((sample, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-sky-800">
                        {sample.title}
                      </h3>
                      <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap select-text">
                        {sample.code}
                      </pre>

                      <pre className="bg-gray-50 p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap mt-5 border border-sky-200 text-sky-900">
                        Accepted String:{" "}
                        <span className="font-semibold">{sample.String}</span>
                      </pre>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>

        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
