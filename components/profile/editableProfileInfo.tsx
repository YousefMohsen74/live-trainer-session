interface Props {
  userData: { name: string; number: string; bio: string };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSave: () => void;
  setEditMode: (mode: boolean) => void;
}
export default function EditableProfileInfo({
  userData,
  handleChange,
  handleSave,
  setEditMode,
}: Props) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">
        {userData.name || "Your Name"}
      </h1>

      <div>
        <label className="block text-indigo-100 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-indigo-100 mb-2">Phone Number</label>
        <input
          type="tel"
          name="number"
          value={userData.number}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label className="block text-indigo-100 mb-2">Bio</label>
        <textarea
          name="bio"
          value={userData.bio}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Tell us about yourself..."
        />
      </div>

      <div className="flex space-x-4 pt-4">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-xl transition duration-300 shadow-lg flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Save Profile
        </button>
        <button
          onClick={() => setEditMode(false)}
          className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium rounded-xl transition duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
