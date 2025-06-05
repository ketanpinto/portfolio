"use client";

import { useEffect, useState } from "react";

type GitHubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
};

export default function GitHubStats() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const username = "ketanpinto";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.github.com/users/ketanpinto`);
      const data = await res.json();
      setUserData(data);
    };
    fetchData();
  }, []);

  if (!userData) return <p className="text-white">Loading GitHub stats...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 rounded-xl shadow-lg overflow-hidden text-white">
      <div className="flex items-center gap-4 p-6">
        <img
          src={userData.avatar_url}
          alt="GitHub Avatar"
          className="w-20 h-20 rounded-full border-2 border-green-500"
        />
        <div>
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p className="text-sm text-gray-400">@{userData.login}</p>
          <p className="text-sm mt-1">{userData.bio}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm underline mt-2 inline-block"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
      <div className="bg-gray-800 p-4 flex justify-around text-sm font-medium border-t border-gray-700">
        <div>
          <p>Repos</p>
          <p className="text-green-400">{userData.public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p className="text-green-400">{userData.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p className="text-green-400">{userData.following}</p>
        </div>
      </div>
    </div>
  );
}
