import { useReducer, useState, useEffect } from 'react';
import './IssueExplorer.module.scss';
import SearchIssues from '../SearchIssues/SearchIssues';
import IssuesGrid from '../../components/IssueExplorer/IssuesGrid/IssuesGrid';

const searchReducer = (state, action) => {
  switch(action.type) {
    case 'SUBMIT_SEARCH':
      const split = action.payload.split('/');
      // what if there is not repo or org?
      return {
        ...state,
        org: split[3],
        repo: split[4],
        githubURL: action.payload,
      };
    case 'CLEAR_SEARCH':
      return {
        ...state,
        org: '',
        repo: '',
        githubURL: '',
      };
    default:
      throw new Error(`search dispatch action ${action.type} is undefined`);
  }
}

const issuesReducer = (state, action) => {
  switch(action.type) {
    case 'INIT_FETCH_ISSUES':
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
        data: [],
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        data: [],
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        data: action.payload,
      };
    default:
      throw new Error(`issue dispatch action ${action.type} is undefined`);
  }
}

const GITHUB_ISSUES_ENDPOINT = 'https://api.github.com/search/issues?q=';

function IssueExplorer() {
  const [searchInput, setSearchInput] = useState('');
  const [search, dispatchSearch] = useReducer(searchReducer, { repo: '', org: '', githubURL: '', error: false});
  const [issues, dispatchIssues] = useReducer(issuesReducer, { data: [], isLoading: false, errorMessage: false});

  useEffect(() => {
    if (!search.repo || !search.org) return;
    const fetchIssues = async () => {
      dispatchIssues({type: 'INIT_FETCH_ISSUES'});
      const queryUrl = `${GITHUB_ISSUES_ENDPOINT}repo:${search.org}/${search.repo}`;
      try {
        const request = await fetch(queryUrl);
        const response = await request.json();

        dispatchIssues({type: 'FETCH_SUCCESS', payload: response.items});
      } catch(err) {
        console.log('err', err)
        dispatchIssues({type: 'FETCH_ERROR', payload: err});
      }
    }
    fetchIssues();
  }, [search]);

  const handleSearchInput = (e) =>
    setSearchInput(e.target.value);

  const handleEnterKeyPress = (e) => {
    dispatchSearch({type: 'SUBMIT_SEARCH', payload: e.target.value});
  };

  if (!search.githubURL) {
    // can we update this component to have more of the search logic?
    return (
      <SearchIssues
        inputValue={ searchInput }
        handleSearchInput={handleSearchInput}
        handleEnterKeyPress={handleEnterKeyPress}
      />
    );
  }

  return (
    <IssuesGrid
      issues={issues.data}
    />
  );
}

export default IssueExplorer;
