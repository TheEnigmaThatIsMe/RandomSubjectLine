import React, { useState, useEffect } from "react";
import subjectLinesData from './subject-lines.json';

interface SubjectLineData {
  [key: string]: string[];
}

const SubjectLineGenerator = () => {
  const [subjectLine, setSubjectLine] = useState<string>("");
  const [subjectLineData, setSubjectLineData] = useState<SubjectLineData>({});
  const [styles, setStyles] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setSubjectLineData(subjectLinesData as SubjectLineData);
    const styleKeys = Object.keys(subjectLinesData);
    setStyles(styleKeys);
    setSelectedStyle(styleKeys[0]);
    setLoading(false);
  }, []);

  const generateSubjectLine = () => {
    if (!subjectLineData[selectedStyle]) return;
    
    setIsAnimating(true);
    
    // Create a slot machine effect
    let counter = 0;
    const interval = setInterval(() => {
      const selectedLines = subjectLineData[selectedStyle];
      const randomIndex = Math.floor(Math.random() * selectedLines.length);
      setSubjectLine(selectedLines[randomIndex]);
      counter++;
      
      if (counter > 8) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 100);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(subjectLine);
    const button = document.getElementById('copy-btn');
    if (button) {
      button.textContent = '✓ Copied!';
      setTimeout(() => {
        button.textContent = '📋 Copy';
      }, 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center">
        <div className="text-white text-2xl font-bold animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
            Subject Line
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Generator ⚡
            </span>
          </h1>
          <p className="text-xl text-white/90 font-medium">
            Create engaging email subject lines in seconds
          </p>
        </div>

        {/* Style Selector */}
        <div className="mb-8">
          <label className="block text-white text-lg font-bold mb-3 text-center">
            Choose Your Vibe
          </label>
          <div className="flex flex-wrap gap-2 justify-center">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                  selectedStyle === style
                    ? 'bg-white text-purple-600 shadow-2xl scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* Result Card */}
        {subjectLine && (
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">📧</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                    Your Subject Line
                  </h3>
                  <button
                    id="copy-btn"
                    onClick={copyToClipboard}
                    className="text-sm px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full font-semibold transition-colors"
                  >
                    📋 Copy
                  </button>
                </div>
                <p className={`text-2xl md:text-3xl font-bold text-gray-800 leading-tight ${isAnimating ? 'blur-sm' : ''} transition-all duration-200`}>
                  {subjectLine}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Generate Button */}
        <button
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black text-2xl py-6 px-8 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 hover:from-yellow-300 hover:to-orange-400 active:scale-95 relative overflow-hidden group"
          onClick={generateSubjectLine}
          disabled={isAnimating}
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {isAnimating ? (
              <>
                <span className="inline-block animate-spin">🎰</span>
                Generating...
              </>
            ) : (
              <>
                <span>✨</span>
                Generate Subject Line
                <span>✨</span>
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>

        {/* Tips */}
        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm flex items-center justify-center gap-2">
            <span className="text-xl">💡</span>
            <span className="font-medium">Pro tip: Click generate multiple times to find the perfect one!</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SubjectLineGenerator;