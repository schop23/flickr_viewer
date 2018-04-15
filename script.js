jQuery(document).ready(function ($) {
  var searchTag
  $('#searchButton').click(function (evt) {
    evt.preventDefault()
    searchTag = ' '
    if ($('#searchBox').val() === ' ') {
      alert('Please enter one or more tags to proceed.')
    } else {
      searchTag = $('searchBox').val()

      var url = 
        'https://api.flickr.com/services/feeds/photos_public.gne?' + 'format=json&jsoncallback=?&tags=' + searchTag + '&tagmode=all'

      $.getJSON(url, function (data) {
        $.each(data.items, function (i, item) {
          
        })
      })
    }
  })
})
