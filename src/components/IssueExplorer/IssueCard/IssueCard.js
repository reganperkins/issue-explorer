import styles from './IssueCard.module.scss';
import Label from '../../common/Label/Label';

const IssueCard = ({ title, body, labels }) => (
  <div className={styles.card}>
    <div>
      <h2>{title}</h2>
    </div>
    <p>{body}</p>
    {labels &&
      labels.map(label =>
        <Label {...label} key={ label.name }/>
    )}
  </div>
)

export default IssueCard;