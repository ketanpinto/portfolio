"use client";

import GitHubStats from "./githubstats";
import InstagramStats from "./InstagramStats";
import LinkedInStats from "./LinkedInStats";

export default function SocialSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GitHubStats />
        <InstagramStats />
        <LinkedInStats />
      </div>
    </div>
  );
}
