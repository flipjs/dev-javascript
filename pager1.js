
// from this...

return (
  <div className='pull-right'>
    <Pagination
      prev
      next
      first
      last
      ellipsis
      maxPages={maxPages}
      totalPages={totalPages}
      currentPage={currentPage}
      onClick={handleClick}
    />
  </div>
)
