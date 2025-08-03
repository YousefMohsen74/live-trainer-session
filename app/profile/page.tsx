'use client'
import { useState, useEffect, useRef } from 'react';
import ProfilePhotoSection from "@/components/profile/profilePhotoSection";
import EditableProfileInfo from "@/components/profile/editableProfileInfo";
import StaticProfileInfo from "@/components/profile/staticProfileInfo";

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    name: '',
    number: '',
    bio: '',
    photo: null as string | null
  });
  const [editMode, setEditMode] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('userProfile');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setUserData(parsedData);
      if (parsedData.photo) setPreviewUrl(parsedData.photo);
      setEditMode(false);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPreviewUrl(reader.result);
          setUserData(prev => ({ ...prev, photo: reader.result as string }));
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(userData));
    setEditMode(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-[url(/background2.jpg)] bg-cover flex items-center justify-center p-4 ">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20  mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:gap-4 p-8 max-md:p-5 ">
          <ProfilePhotoSection
            editMode={editMode}
            previewUrl={previewUrl}
            userData={userData}
            triggerFileInput={triggerFileInput}
            fileInputRef={fileInputRef}
            handlePhotoChange={handlePhotoChange}
            setEditMode={setEditMode}
          />

          <div className="md:col-span-2">
            {editMode ? (
              <EditableProfileInfo
                userData={userData}
                handleChange={handleChange}
                handleSave={handleSave}
                setEditMode={setEditMode}
              />
            ) : (
              <StaticProfileInfo userData={userData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}