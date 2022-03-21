import { useReducer, useState, useEffect } from 'react';
import styles from './IssueExplorer.module.scss';
import SearchIssues from '../SearchIssues/SearchIssues';
import IssuesGrid from '../../components/IssueExplorer/IssuesGrid/IssuesGrid';
import FilterBar from '../../components/IssueExplorer/FilterBar/FilterBar';
import { ReactComponent as CloseSvg } from '../../assets/icons/close.svg';
import {GITHUB_ISSUES_ENDPOINT, FILTERS} from './consents';
import {searchReducer, issuesReducer} from './reducers';

function IssueExplorer() {
  const [searchInput, setSearchInput] = useState('');
  const [search, dispatchSearch] = useReducer(searchReducer, { repo: '', org: '', githubURL: '', error: false, filter: FILTERS[0]});
  const [issues, dispatchIssues] = useReducer(issuesReducer, { data: [], isLoading: false, errorMessage: false});

  useEffect(() => {
    if (!search.repo || !search.org) return;
    const fetchIssues = async () => {
      dispatchIssues({type: 'INIT_FETCH_ISSUES'});
      let queryUrl = `${GITHUB_ISSUES_ENDPOINT}repo:${search.org}/${search.repo}`;
      if (search.filter.query) {
        queryUrl += `+${search.filter.query}`;
      }

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

  const handleEnterKeyPress = (e) =>
    dispatchSearch({type: 'SUBMIT_SEARCH', payload: e.target.value});

  const handleFilterSelect = (filter) =>
    dispatchSearch({type: 'ADD_FILTER', payload: filter});

  const handleClose = () =>
    dispatchSearch({type: 'CLEAR_SEARCH'});

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

  if (issues.isLoading) {
    return (
      <div>...Loading</div>
    );
  }

  return (
    <>
      <header className={`${styles.commonPadding} ${styles.header}`}>
        <h1>Github Issue Viewer</h1>
        <span>{search.githubURL}</span>
      </header>

      <div className={`${styles.filterBar} ${styles.commonPadding}`}>
        <FilterBar
          handleFilterSelect={handleFilterSelect}
          selectedFilter={search.filter}
          filters={FILTERS}
        />
        <button
          type="button"
          className={styles.closeBtn}
          onClick={ handleClose }
        >
          <CloseSvg className={styles.svg} />
        </button>
      </div>

      <main className={styles.commonPadding}>
        <IssuesGrid
          issues={issues.data}
        />
      </main>
    </>
  );
}

export default IssueExplorer;
