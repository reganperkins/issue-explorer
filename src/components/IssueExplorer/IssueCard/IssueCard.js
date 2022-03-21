import styles from './IssueCard.module.scss';
import Label from '../../common/Label/Label';
import { ReactComponent as ClosedSvg } from '../../../assets/icons/issue-closed.svg';
import { ReactComponent as PullRequestSvg } from '../../../assets/icons/pull-request.svg';

const IssueCard = ({ title, body, labels, state, pull_request }) => {
  const isClosed = state === 'closed';
  const isPR = !!pull_request;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <div className={styles.iconContainer}>
          {isClosed && <ClosedSvg className={styles.closeSvg} /> }
          {isPR && <PullRequestSvg className={styles.pullSvg} /> }
        </div>
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
  );
};

export default IssueCard;