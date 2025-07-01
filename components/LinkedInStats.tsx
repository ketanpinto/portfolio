"use client";

export default function LinkedInStats() {
  const userData = {
    name: "Ketan Pinto",
    username: "ketanpinto",
    bio: "👨‍💻 Software Developer | Tech Enthusiast",
    avatarUrl: "/meehe.jpg", // Use a public image URL or host locally
    profileUrl: "https://linkedin.com/in/ketanpinto",
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-blue-900 rounded-xl shadow-lg overflow-hidden text-white">
      <div className="flex items-center gap-4 p-12">
        <img
          src={userData.avatarUrl}
          alt="LinkedIn Avatar"
          className="w-20 h-20 rounded-full border-2 border-blue-500"
        />
        <div>
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p className="text-sm text-gray-400">@{userData.username}</p>
          <p className="text-sm mt-1">{userData.bio}</p>
          <a
            href={userData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm underline mt-2 inline-block"
          >
            View LinkedIn Profile
          </a>
        </div>
      </div>
      <div className="bg-gray-800 p-4 flex justify-around text-sm font-medium border-t border-gray-700">
        <div>
          <p>Followers</p>
          <p className="text-pink-400">260</p>
        </div>
        <div>
          <p>Connections</p>
          <p className="text-pink-400">300</p>
        </div>
      </div>
    </div>
  );
}
