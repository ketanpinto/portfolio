"use client";

export default function InstagramStats() {
  const userData = {
    name: "Ketan Pinto",
    username: "ketxn.pinto",
    bio: "@middlesexdubai '26 Too busy working on my own grass to notice if yours is greener✨.",
    avatarUrl: "/meehe.jpg", // Use a public image URL or host locally
    profileUrl: "https://instagram.com/ketxn.pinto",
    followers: 900,
    following: 880,
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-pink-800 rounded-xl shadow-lg overflow-hidden text-white">
      <div className="flex items-center gap-4 p-11">
        <img
          src={userData.avatarUrl}
          alt="Instagram Avatar"
          className="w-20 h-20 rounded-full border-2 border-pink-500"
        />
        <div>
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p className="text-sm text-gray-400">@{userData.username}</p>
          <p className="text-sm mt-1">{userData.bio}</p>
          <a
            href={userData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 text-sm underline mt-2 inline-block"
          >
            View Instagram Profile
          </a>
        </div>
      </div>
      <div className="bg-gray-800 p-4 flex justify-around text-sm font-medium border-t border-gray-700">
        <div>
          <p>Followers</p>
          <p className="text-pink-400">{userData.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p className="text-pink-400">{userData.following}</p>
        </div>
      </div>
    </div>
  );
}
