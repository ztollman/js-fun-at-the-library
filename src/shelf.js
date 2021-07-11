function shelfBook(book,shelf){
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}


function unshelfBook(book,shelf){
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(book)) {
      shelf.splice(i,1)
    }
  }
}

function listTitles(shelf){
  var titlesList = []
  for(var i = 0; i < shelf.length; i++ ){
      titlesList.push(shelf[i].title)
  } return titlesList.join(', ')
};

function searchShelf(shelf,book){
  var titlesList = []
  for (var i = 0; i < shelf.length; i++){
     titlesList.push(shelf[i].title)
  }
  return titlesList.includes(book)
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
