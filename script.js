jQuery(document).ready(function ($) {
  var searchTag
  $('#searchButton').click(function (evt) {
    evt.preventDefault()
    searchTag = ' '
    if ($('#searchBox').val() === ' ') {
      alert('Please enter one or more tags to proceed.')
    } else {
      searchTag = $('searchBox').val()
    }
  })
})
