import React from 'react';
import { ColorResult } from '../types';

interface ResultsDisplayProps {
  results: ColorResult;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const renderColorSwatch = (color: any, type: 'recommended' | 'avoid') => (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <div
        className="w-full h-24 rounded-lg mb-3"
        style={{ backgroundColor: color.hex_code }}
      />
      <h4 className="font-medium text-gray-900">{color.color_name}</h4>
      {type === 'recommended' && (
        <span className="text-sm text-gray-500 mb-2">Usage: {color.usage}</span>
      )}
      <p className="text-sm text-gray-600">
        {type === 'recommended' ? color.description : color.reason}
      </p>
    </div>
  );

  return (
    <div className="mt-16 space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{results.palette_Name}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{results.palette_Description}</p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recommended Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.recommended_colors.map((color, index) => (
              <div key={index}>
                {renderColorSwatch(color, 'recommended')}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Colors to Avoid</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.colors_to_avoid.map((color, index) => (
              <div key={index}>
                {renderColorSwatch(color, 'avoid')}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ResultsDisplay;