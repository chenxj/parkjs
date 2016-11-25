define({
  title  :'主页',
  body   : '$HTML$',
  init: function(pageData) {
    var $view = this

    $('.spa-page-body', $view).trigger('spa:scroll')
  }
})
