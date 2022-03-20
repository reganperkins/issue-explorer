import styles from './IssueCard.module.scss';

const IssueCard = ({ title, body }) => (
  <div>
    <div>
      <h2>{title}</h2>
    </div>
    <p>{body}</p>
  </div>
)

export default IssueCard;