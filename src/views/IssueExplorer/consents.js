export const GITHUB_ISSUES_ENDPOINT = 'https://api.github.com/search/issues?q=';
export const FILTERS = [
  { name: 'All Issues', query: '' },
  { name: 'Open Issues', query: 'state:open' },
  { name: 'Closed Issues', query: 'state:closed' },
  { name: 'Pull Requests', query: 'type:pr' },
];
