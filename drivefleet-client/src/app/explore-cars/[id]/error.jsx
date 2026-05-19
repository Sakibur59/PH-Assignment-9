"use client";

import Link from "next/link";
import { RefreshCcw, Home, AlertTriangle } from "lucide-react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-80 h-80 bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>

      {/* Main Card */}
      <div className="relative z-10 max-w-xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-5 rounded-full bg-red-500/15 border border-red-500/20 shadow-lg">
            <AlertTriangle className="w-14 h-14 text-red-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
          An unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        {/* Optional Error Message */}
        {error?.message && (
          <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm break-words">
            {error.message}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
         
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold transition-all duration-300"
          >
            <Home size={18} />
            Go Home
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-slate-500">
          System encountered an unexpected exception ⚠️
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;