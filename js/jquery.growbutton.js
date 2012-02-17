/**
 jquery.growbutton.js ver1.0

The MIT License

Copyright (c) 2011 Grow! jun takeno
http://growbutton.com/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
(function($) {
  var is_load = false;
  $.fn.growbutton = function(options){
    /**
     * default Options
     */
    var defaults ={
      url         :  window.location , 
      title       :  document.title  ,
      shape       :  "square" ,
      apikey      : "" , //required
      image       : "" , //optional
      site_name   : "" , //optional
      generate    : true
    };
    
    
    var opts = $.extend(defaults , options);
    if(!is_load){
      $("body").append('<script src="http://growbutton.com/javascripts/button.js?apikey=' + opts.apikey + '&insert=false" type="text/javascript"></script>');
      is_load = true;
    }
    
    var r = this.each(function(){
      $(this).append(
        '<span itemscope itemref="' + opts.shape + '" itemtype="http://growbutton.com/ns#button" style="display: none;">'
          + '<span itemprop="url">' + opts.url  + '</span>'
          + '<span itemprop="title">' + opts.title  + '</span>'
          + (opts.image ? '<span itemprop="image">' + opts.image + '</span>' : "")
          + (opts.site_name ? '<span itemprop="site_name">' + opts.site_name + '</span>' : "")
        + '</span>'
      );
    });
    
    if(opts.generate){
      GrowButton.generate();
    }
    return r;
  };
})(jQuery);