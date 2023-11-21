/**
 * Toggles "done" class on <li> element
 */
const $todayList = $('.today-list');
$todayList.on('click','li',function(event){
  $(this).toggleClass('done')
})



/**
 * Delete element when delete link clicked
 */
$todayList.on('click', '.delete', function(event){
  $(this).closest('li').remove()
})



/**
 * Adds new list item to <ul> 
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...
 
  if (text !== '') {
    const $newListElement = $('<li>').text(text).addClass('done');
    const $deleteFunction = $('<a>').addClass('delete').text('Delete');
    
    $newListElement.append($deleteFunction);
    $todayList.append($newListElement);
  }
  
  $('input').val('');
};

// add listener for add
$('.add').click(addListItem);

