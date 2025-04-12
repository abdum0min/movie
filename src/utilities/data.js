const searchHandler = (arr, term) => {
    if (!term) return arr
    return arr.filter(item => 
      item.name.toLowerCase().includes(term.toLowerCase())
    )
  }

  const filterHandler = (arr, filter) => {
    switch(filter){
      case 'popular':
        return arr.filter(c=> c.like)
      case 'mostViews':
        return arr.filter(c => c.views >  800)
      default:
        return arr
    }
  }

export {searchHandler, filterHandler}