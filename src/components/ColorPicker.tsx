import React from 'react';
import { Droplet, Pipette } from 'lucide-react';

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, color, onChange }) => {
  const handleEyeDropper = async () => {
    if ('EyeDropper' in window) {
      try {
        const eyeDropper = new (window as any).EyeDropper();
        const result = await eyeDropper.open();
        onChange(result.sRGBHex);
      } catch (err) {
        console.error('EyeDropper failed:', err);
      }
    } else {
      console.warn('EyeDropper API not supported');
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1">
        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-full border-2 border-gray-200 cursor-pointer transition-transform hover:scale-105"
            style={{ backgroundColor: color || '#fff' }}
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'color';
              input.value = color || '#ffffff';
              input.addEventListener('input', (e) => {
                onChange((e.target as HTMLInputElement).value);
              });
              input.click();
            }}
          />
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;