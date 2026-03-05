import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="flex items-center gap-2 font-bold text-xl mb-4 text-white">
             SafeNest
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Protecting students from online fraud with AI-powered detection and verification.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Tools</h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li>Job Scanner</li>
            <li>Course Checker</li>
            <li>Website Checker</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Resources</h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li>Dashboard</li>
            <li>How It Works</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Account</h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-20 pt-8 border-t border-white/5 text-gray-600 text-xs">
        © 2026 SafeNest. All rights reserved. Protecting students, one scan at a time.
      </div>
    </footer>
  );
}