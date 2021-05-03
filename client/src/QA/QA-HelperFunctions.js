const sortingFunction= (array, sort) => {
  if (sort === 'helpful') {
    array.sort((a, b) => (a.helpfulness > b.helpfulness) ? -1: 1)
  } else if (sort === 'recent') {
    array.sort((a, b) => (a.date > b.date) ? -1: 1)
  } else if (sort === 'userA') {
    array.sort((a, b) => (a.date > b.date) ? -1: 1)
  }
}

export default sortingFunction