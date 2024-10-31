import React from 'react';
import { FileDown } from 'lucide-react';

const ResumeButton = () => {
  return (
    <a
      href="/John-Doe-Resume.pdf"
      download
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-white font-medium"
    >
      <FileDown size={20} />
      Download Resume
    </a>
  );
};

export default ResumeButton;