import Input from '../../components/common/Input/Input';

const SearchIssues = ({ searchInput, handleSearchInput, handleEnterKeyPress }) => (
  <div>
    <h1>Github Issue Viewer</h1>
    <Input
      placeholder="Paste a link to a Github repo"
      value={ searchInput }
      onChange={ handleSearchInput }
      onEnterKeyPress={ handleEnterKeyPress }
    />
  </div>
)

export default SearchIssues;