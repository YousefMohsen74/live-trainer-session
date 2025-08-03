interface Props {
  userData: { name: string; number: string; bio: string };
}
export default function StaticProfileInfo({ userData }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-2">
        {userData.name || "Your Name"}
      </h1>
      <p className="text-indigo-200 mb-8 max-md:mb-4">
        {userData.bio || "Tell us about yourself..."}
      </p>

      <div className="space-y-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-300 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p className="text-white text-lg">
            {userData.number || "No phone number provided"}
          </p>
        </div>

        <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 className="text-indigo-200 font-medium mb-3">
            Profile Information
          </h3>
          <div className="space-y-2 max-md:space-y-1">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-indigo-200">Name:</span>
              <span className="text-white">
                {userData.name || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-indigo-200">Phone:</span>
              <span className="text-white">
                {userData.number || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-indigo-200">Bio:</span>
              <span className="text-white text-right max-w-xs">
                {userData.bio || "Not provided"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
