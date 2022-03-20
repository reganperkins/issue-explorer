import styles from './IssuesGrid.module.scss';
import IssueCard from '../IssueCard/IssueCard'

const IssuesGrid = ({ issues }) => (
  <ul className={styles.grid}>
    {issues.map(issue => (
      <li key={ issue.id }>
        <IssueCard { ...issue }/>
      </li>
    ))}
  </ul>
)

export default IssuesGrid;