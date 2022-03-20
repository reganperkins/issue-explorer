import styles from './SearchIssues.module.scss'
import Input from '../../components/common/Input/Input';

const SearchIssues = ({ searchInput, handleSearchInput, handleEnterKeyPress }) => (
  <div className={styles.searchIssuesContainer}>
    <h1>Github Issue Viewer</h1>
    <Input
      placeholder="Paste a link to a Github repo"
      value={ searchInput }
      onChange={ handleSearchInput }
      onEnterKeyPress={ handleEnterKeyPress }
      autoFocus
    />
  </div>
)

export default SearchIssues;