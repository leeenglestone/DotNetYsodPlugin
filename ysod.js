// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
if (!chrome.cookies) {
  chrome.cookies = chrome.experimental.cookies;
}
*/

function CookieHelper() {
	
	// Not using this
	this.pinnedCookies = {};
	
	// Not using this
	this.reset = function() {
		this.pinnedCookies = {};
	}
	
	// Show Cookies method
	this.showCookies = function() {
	
		// Get all cookies
		chrome.cookies.getAll({}, function(cookies) {
			
			var tblCookies = document.getElementById('tblCookies');
					
			// Determine active tab					
			chrome.tabs.query({'active': true}, function (tabs) {
			
				// Work out domain
				var domain = '';
				var url = tabs[0].url;
								
				domain = url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
				
				// Loop through cookies looking for ones for this current domain
				for (var i in cookies) {
      	  				
					if (cookies[i].domain == domain) { 

						// Create row and append to table
						var trCookie = document.createElement('tr');
						
						var tdDomain = document.createElement('td');
						tdDomain.innerHTML = cookies[i].domain;
						
						var tdName = document.createElement('td');
						tdName.innerHTML = cookies[i].name;
						
						var tdValue = document.createElement('td');
						tdValue.innerHTML = cookies[i].value;
						
						trCookie.appendChild(tdDomain);
						trCookie.appendChild(tdName);
						trCookie.appendChild(tdValue);
						
						tblCookies.appendChild(trCookie);																				
					}
				}
			});			
		});
	}	
}

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    
  var cookieHelper = new CookieHelper();
  
  cookieHelper.showCookies();
  
});
