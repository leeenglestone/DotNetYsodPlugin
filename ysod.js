// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function YsodHelper() {
	
	// Not using this
	this.reset = function() {
		alert('reset');
	}
	
	this.convertFilePath = function() {
		var bolds = document.getElementsByTagName('b');
	}	
}

  var h1s = document.getElementsByTagName('h1');
  
  if(h1s[0].innerText.indexOf('Server Error in') > -1)
  {
	//alert(h1s[0].innerHtml);
	//return;
  }
  
  var file = document.body.innerHTML.match(/Source File: <\/b>(.*?)<b>/)[1].trim();
  //alert(file);
  
	var bolds = document.getElementsByTagName('b');
	
	for(var x=0; x < bolds.length; x++)
	{
		if(bolds[x].innerText.indexOf('Source File:') > -1)
		{
			bolds[x].innerHTML = '<a href="file:///' + file +'" target="_blank">' + file + '</a>'
		}
	}
	
