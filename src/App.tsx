import React, { useState, useRef, useEffect } from "react";
import { Upload } from "lucide-react";
import ColorPicker from "./components/ColorPicker";
import PreferenceSelector from "./components/PreferenceSelector";
import ResultsDisplay from "./components/ResultsDisplay";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ColorResult } from "./types";

function App() {
  const [selectedColors, setSelectedColors] = useState({
    skin: "",
    hair: "",
    eye: "",
  });
  const [preferences, setPreferences] = useState({
    intensity: "",
    seasonal: "",
    occasion: "",
    style: "",
  });
  const [results, setResults] = useState<ColorResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorSelect = (type: "skin" | "hair" | "eye", color: string) => {
    setSelectedColors((prev) => ({ ...prev, [type]: color }));
  };

  const handlePreferenceChange = (category: string, value: string) => {
    setPreferences((prev) => ({ ...prev, [category]: value }));
  };

  const generatePalette = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const mockResponse = {
        palette_Name: "Autumn Harmony",
        palette_Description: "A warm, earthy palette that complements your features.",
        recommended_colors: [
          {
            color_name: "Forest Green",
            hex_code: "#228B22",
            usage: "main",
            description: "A rich green that harmonizes with warm undertones.",
          },
          {
            color_name: "Rust",
            hex_code: "#B7410E",
            usage: "main",
            description: "A warm, earthy red-brown that brings out natural warmth.",
          },
          {
            color_name: "Burnt Orange",
            hex_code: "#CC5500",
            usage: "main",
            description: "A vibrant orange that adds a modern twist to classic autumn tones.",
          },
          {
            color_name: "Golden Olive",
            hex_code: "#6B8E23",
            usage: "main",
            description: "A warm, muted green that complements the richness of brown eyes.",
          },
          {
            color_name: "Mustard Yellow",
            hex_code: "#FFDB58",
            usage: "main",
            description: "A deep, earthy yellow that pairs well with dark hair.",
          },
        ],
        colors_to_avoid: [
          {
            color_name: "Cool Gray",
            hex_code: "#A9A9A9",
            reason: "Conflicts with warm undertones.",
          },
          {
            color_name: "Bright Neon Yellow",
            hex_code: "#FFFF00",
            reason: "Overpowers the soft, warm palette of autumn.",
          },
          {
            color_name: "Electric Blue",
            hex_code: "#7DF9FF",
            reason: "Clashes with the warm undertones and autumn colors.",
          },
        ],
      };
      setResults(mockResponse);
    } catch (error) {
      setError("Error generating palette. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Select Your Colors</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use the color picker tool to identify your hair, skin, and eye colors. For hair and skin, choose the
            primary tones without focusing on highlights or shadows. For eyes, select the most prominent color,
            typically found in the center of the iris.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div
              className="relative bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300 text-center cursor-pointer transition-all mb-8"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-h-[400px] mx-auto rounded-lg object-contain"
                />
              ) : (
                <>
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <ColorPicker
              label="Skin"
              color={selectedColors.skin}
              onChange={(color) => handleColorSelect("skin", color)}
            />
            <ColorPicker
              label="Hair"
              color={selectedColors.hair}
              onChange={(color) => handleColorSelect("hair", color)}
            />
            <ColorPicker
              label="Eye"
              color={selectedColors.eye}
              onChange={(color) => handleColorSelect("eye", color)}
            />
            <button
              onClick={generatePalette}
              disabled={isLoading || !selectedColors.skin || !selectedColors.hair || !selectedColors.eye}
              className="w-full py-3 px-4 bg-[#E91E63] text-white rounded-lg hover:bg-[#D81B60] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Generate Palette
            </button>
          </div>
        </div>

        <PreferenceSelector
          preferences={preferences}
          onChange={handlePreferenceChange}
          onGenerate={generatePalette}
        />

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {results && <ResultsDisplay results={results} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;