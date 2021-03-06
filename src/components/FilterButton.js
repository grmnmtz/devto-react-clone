const FilterButton = ({ children, onFilterClick, id, isActive }) => {
  const classes = {
    filterButton:
      'p-3 text-base font-slate-200 hover:bg-white rounded-lg hover:text-indigo-500',
    activeFilterButton:
      'p-3 text-semibold font-black hover:bg-white rounded-lg hover:text-indigo-500',
  }

  const buttonClassName = isActive
    ? `${classes.filterButton} ${classes.activeFilterButton}`
    : `${classes.filterButton}`
  return (
    <>
      <button
        isActive={isActive}
        onClick={onFilterClick}
        id={id}
        className={buttonClassName}
      >
        {children}
      </button>
    </>
  )
}

export { FilterButton }
