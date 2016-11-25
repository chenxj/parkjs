define({
  title  :'我的',
  body   : '$HTML$',
  init: function(pageData) {
    var $view = this

    $('.spa-page-body', $view).trigger('spa:scroll')
  }
})
