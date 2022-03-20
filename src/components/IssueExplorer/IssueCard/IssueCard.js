import styles from './IssueCard.module.scss';
import Label from '../../common/Label/Label';

const IssueCard = ({ title, body, labels }) => (
  <div className={styles.card}>
    <div>
      <h2>{title}</h2>
    </div>
    <p>{body}</p>
    <div className={styles.labelsContainer}>
      {labels &&
        labels.map(label =>
          <Label {...label} key={ label.name } className={styles.label} />
      )}
    </div>
  </div>
)

export default IssueCard;