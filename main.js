window.onload = function() {
 function id(i){return document.getElementById(i);} 
 function tag(t){return document.getElementsByTagName(t);}

 let ctrl = false;

 [].forEach.call(tag('textarea'), function(el) { el.onkeydown = function(e) {
  if(e.keyCode === 17) {ctrl = true;}
  else if(e.keyCode === 13 && ctrl) {
   id('output').innerHTML = id('html').value;
   try{
    eval(id('js').value);
   }catch(ex){id('log').value = ex.message;}
  }
  else if(e.keyCode === 219 && ctrl) {
   console.log('it works!');
   localStorage.setItem('__html_editor_v2_html_' + id('flname').value,id('html').value);
   localStorage.setItem('__html_editor_v2_js_' + id('flname').value,id('js').value);
  }
  else if(e.keyCode === 221 && ctrl) {
   id('html').value = localStorage.getItem('__html_editor_v2_html_' + id('flname').value);
   id('js').value = localStorage.getItem('__html_editor_v2_js_' + id('flname').value);
  }
  else if(e.keyCode === 9)
  {
   const
    start = e.target.selectionStart,
    end = e.target.selectionEnd,
    value = e.target.value;
   e.target.value = value.substring(0,start) + ' ' + value.substring(end);
   e.target.selectionStart = e.target.selectionEnd = start + 1;
   return false;
  }
 }});
 [].forEach.call(tag('textarea'), function(el) { el.onkeyup = function(e){if(e.keyCode === 17){ctrl = false;}}});
}
