import React from 'react';

interface PreferenceSelectorProps {
  preferences: {
    intensity: string;
    seasonal: string;
    occasion: string;
    style: string;
  };
  onChange: (category: string, value: string) => void;
  onGenerate: () => void;
}

const PreferenceSelector: React.FC<PreferenceSelectorProps> = ({ preferences, onChange, onGenerate }) => {
  const renderSection = (
    title: string,
    description: string,
    options: string[],
    category: string,
    selected: string
  ) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(category, option)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selected === option
                ? 'bg-[#E91E63] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Preferences - Optional</h2>
      
      {renderSection(
        "Color Intensity Preference",
        "Defines the intensity and vibrancy of the colors in the palette.",
        ['Bold', 'Vibrant', 'Muted', 'Pastel', 'Soft', 'Neutral', 'Classic', 'Dark', 'Earthy', 'Warm'],
        'intensity',
        preferences.intensity
      )}

      {renderSection(
        "Seasonal Preferences",
        "Colors inspired by the mood and feel of each season.",
        ['Winter', 'Spring', 'Summer', 'Autumn'],
        'seasonal',
        preferences.seasonal
      )}

      {renderSection(
        "Occasion-Based Preferences",
        "Fine colors that fit the occasion, from casual to formal.",
        ['Casual', 'Everyday', 'Work', 'Formal', 'Vacation', 'Festive', 'Sports'],
        'occasion',
        preferences.occasion
      )}

      {renderSection(
        "Personal Style Preferences",
        "Match colors to your unique style, whether minimal or bold.",
        ['Minimalist', 'Maximalist', 'Modern', 'Edgy', 'Vintage', 'Bohemian', 'Classic', 'Street'],
        'style',
        preferences.style
      )}

      <button
        onClick={onGenerate}
        className="w-full py-3 px-4 bg-[#E91E63] text-white rounded-lg hover:bg-[#D81B60] transition-colors mt-8"
      >
        Generate Palette
      </button>
    </div>
  );
};

export default PreferenceSelector;