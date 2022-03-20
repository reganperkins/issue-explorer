import styles from './IssueCard.module.scss';
import Label from '../../common/Label/Label';

const IssueCard = ({ title, body, labels }) => (
  <div className={styles.card}>
    <div>
      <h2>{title}</h2>
    </div>
    <div className={styles.body}>
      <p>{body}</p>
    </div>
    <div className={styles.labelsContainer}>
      {labels &&
        labels.map(label =>
          <Label
            key={ label.name }
            className={styles.label}
            {...label}
          />
      )}
    </div>
  </div>
)

export default IssueCard;