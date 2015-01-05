// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
if (!chrome.cookies) {
  chrome.cookies = chrome.experimental.cookies;
}
*/

function YsodHelper() {
	
	// Not using this
	//this.pinnedCookies = {};
	
	// Not using this
	this.reset = function() {
		//this.pinnedCookies = {};
	}
	
	// Show Cookies method
	this.convertFilePath = function() {
	
		var bolds = document.body.getElementsByTagName('b');
		//alert('hi');
		//alert(document.innerText);
		
		for(var x=0; x < bolds.length; x++)
		{
			if (bolds[x].innerText == 'Source File:')
			{
				alert('bingo');
			}
		}
		
		
		alert(bolds.length);
	}	
}

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    
  var ysodHelper = new YsodHelper();
  
  ysodHelper.convertFilePath();
  
});
