import banner from '../view/components/banner.js'
import search from '../view/components/search.js'
import list from '../view/components/list.js'
import { home as route } from '../routes.js'



export default function(route) {

  //console.log(character);
     
  $('#app')
  .empty()
  .append(banner())
  .append(search())
  .append($('<a href="./#details" title="Tricks details">details  </a>'))
  .append(list(route))

  
      

    
      $('#app').append($('<a href="./#hello_01" title="Tricks page01">page01</a><br>'));
      $('#app').append($('<a>home</a><br><br>'));
  
      $('#app').append($('<a href="./#error" title="Tricks error">error  </a>'));
      $('#app').append($('<a href="./#wait" title="Tricks wait">wait  </a>'));



  }