import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface InstagramCardProps {
  title?: string;
  subtitle?: string;
  rotation?: string;
  position?: string;
  backgroundColor?: string;
  textColor?: string;
  cardName?: string;
}

export default function InstagramCard({ 
  title, 
  subtitle, 
  rotation = '', 
  position = '',
  backgroundColor = 'bg-white',
  textColor = 'text-black',
  cardName,
  width = 'w-48',
  height = 'h-60'
}: InstagramCardProps & { width?: string; height?: string; }) {
  const [isHovered, setIsHovered] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div 
      className={`${position} ${rotation} ${backgroundColor} ${width} ${height} rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isDragging ? 'scale-105 shadow-xl' : ''} group relative`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Name - Shows on hover */}
      {cardName && (
        <div className={`absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {cardName}
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      
      {image ? (
        <div className="relative h-full group">
          <img 
            src={image} 
            alt="Uploaded content" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={removeImage}
                className="bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* Overlay text */}
          {(title || subtitle) && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              {title && (
                <div className="text-white font-bold text-sm uppercase mb-1">
                  {title}
                </div>
              )}
              {subtitle && (
                <div className="text-white text-xs opacity-90">
                  {subtitle}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div 
          className="h-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          onClick={triggerFileInput}
        >
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <span className="text-gray-500 text-sm text-center px-4">
            Click or drag image here
          </span>
          <span className="text-gray-400 text-xs mt-1">
            Instagram size (4:5)
          </span>
        </div>
      )}
    </div>
  );
}