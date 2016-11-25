
var watch = require('watch');
var fs = require('fs');
var cheerio = require('cheerio');
watch.watchTree('src/',{
      'interval' : 2,

   },function(f,curr,prev){
   if (typeof f == "object" && prev === null && curr === null) {
     // Finished walking the tree
   } else if (prev === null) {
     // f is a new file
   } else if (curr.nlink === 0) {
     // f was removed
   } else {
     // f was changed
    // console.log(curr);
   }
})

var changeFile = function(f){
   var data = fs.readFileSync(f,'utf-8');
   var doc = cheerio.load(data);
   var _html = doc('body').html();
   var js_f = f.replace(/html/g,'js');
   var jd = fs.readFileSync(js_f,'utf-8');

   _html = _html.replace(/\n/g,'\\\n');
   var dict = jd.replace(/\$HTML\$/g,_html);

   var f_dict = js_f.replace(/src/,'dict');
   console.log(jd);
   console.log(dict);
   fs.writeFileSync(f_dict,dict,'utf-8');
}
watch.createMonitor('src/html',function(monitor){
   monitor.on('changed',function(f,curr,prev){
      changeFile(f)
   })
})


watch.createMonitor('src/js',function(monitor){
   monitor.on('changed',function(f,curr,prev){
      changeFile(f.replace(/js/g,'html'));
   })
})
