import styles from './FilterBar.module.scss';

const FilterBar = ({handleFilterSelect, selectedFilter, filters}) => (
  <ul className={styles.filterList}>
    {filters.map(filter =>
      <li
        key={filter.name}
        className={`${styles.filter} ${selectedFilter.name === filter.name ? styles.selected : ''}`}
        onClick={() => handleFilterSelect(filter)}
      >{filter.name}</li>
    )}
  </ul>
);

export default FilterBar;
