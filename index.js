/* eslint-disable strict */
// Requirements: 
// 1.enter items they need to purchase by entering text and hitting "return" or clicking the "add item" button
// 2. check and uncheck items on the list by clicking the "Check" button
// 3. permanently remove items from the list 
// Additionally
// 4. you must use a CDN-hosted version of jQuery

// individual problems
// I need to append what the user types in the form when the event happens

$(function addItem () {
  $('#js-shopping-list-form').submit(event => {
        
    event.preventDefault();

    const userWord = $(this).find('input[name="shopping-list-entry"]').val();

    $('ul').append(
      `<li>
            <span class="shopping-item">${userWord}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
    );
  });
});

$(function checkItem () {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    //$(this).parent().parent().find('shopping-item').toggleClass('shopping-item__checked');
  });
}
);

$(function removeItem () {
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove('li')
})

}
)