import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute top-[-120px] left-[-120px] w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>


      <div className="relative z-10 max-w-xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 text-center">
        
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <h1 className="text-[110px] md:text-[140px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 leading-none">
              404
            </h1>

        
            <div className="absolute -top-2 -right-6 bg-cyan-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Search size={22} />
            </div>
          </div>
        </div>

     
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
          The page you’re looking for doesn’t exist, was removed, or maybe you
          typed the wrong URL.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
          >
            <Home size={18} />
            Back Home
          </Link>
        </div>

       
        <p className="mt-8 text-sm text-slate-500">
          Error Code: 404 | Lost in the digital universe 🚀
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;