import Image from 'next/image';

export default function ProfilePhotoSection({
  editMode,
  previewUrl,
  userData,
  triggerFileInput,
  fileInputRef,
  handlePhotoChange,
  setEditMode
}: {
  editMode: boolean;
  previewUrl: string | null;
  userData: { name: string; photo: string | null };
  triggerFileInput: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handlePhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEditMode: (mode: boolean) => void;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="relative w-48 h-48 rounded-full bg-gray-200 border-4 border-white/80 shadow-lg overflow-hidden">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="Profile"
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">
                {userData.name.charAt(0).toUpperCase() || "U"}
              </span>
            </div>
          )}
        </div>

        {editMode && (
          <div className="absolute bottom-4 right-2">
            <button
              onClick={triggerFileInput}
              className="bg-white/90 text-indigo-700 hover:bg-white transition-all duration-300 rounded-full p-2 shadow-lg"
              aria-label="Change photo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handlePhotoChange}
              className="hidden"
              accept="image/*"
            />
          </div>
        )}
      </div>

      {editMode ? (
        <button
          onClick={triggerFileInput}
          className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition duration-300 shadow-md"
        >
          Change Photo
        </button>
      ) : (
        <button
          onClick={() => setEditMode(true)}
          className="mt-6 max-md:mt-3 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition duration-300 shadow-md flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Edit Profile
        </button>
      )}
    </div>
  );
}