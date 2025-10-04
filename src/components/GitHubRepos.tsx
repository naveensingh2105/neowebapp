import React, { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

interface GitHubReposProps {
  username: string;
}

const GitHubRepos: React.FC<GitHubReposProps> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  if (loading) return <div className="text-center py-8">Loading repositories...</div>;

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white" id="repos">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">My GitHub Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{repo.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{repo.description || 'No description'}</p>
              <div className="flex items-center justify-between text-sm">
                {repo.language && <span className="text-blue-600">{repo.language}</span>}
                <span className="text-gray-500">⭐ {repo.stargazers_count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;
