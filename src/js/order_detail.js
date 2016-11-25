define({
  title  :'订单详情',
  body   : '$HTML$',
  init: function(pageData) {
    var $view = this

    $('.spa-page-body', $view).trigger('spa:scroll')
  }
})
