import React from 'react';

interface PillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, selected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full border ${
        selected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-300'
      } hover:bg-blue-500 hover:text-white transition`}
    >
      {label}
    </button>
  );
};

export default Pill;
