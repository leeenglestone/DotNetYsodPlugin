// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

	(function ErrorFinder() {
    
  var regex = /(.?:\\.*?\.(vb|cs))/g,
	errorLinkText = '<a style="color:green; font-weight:bold;" href="file:///$1" target="_blank">$1</a>';
      
  var IsYellowScreenOfDeath = function() {
    var heading1s = document.getElementsByTagName('h1');
    return (heading1s.length === 0 || heading1s[0].innerText.indexOf('Server Error in') > -1);
  };
  
  var HasCSharpOrVbError = function() {
    return (regex.test(document.body.innerHTML));
  };
  
  var ReplaceFileErrorWithFileLink = function(){
    document.body.innerHTML = document.body.innerHTML.replace(regex, errorLinkText);
  };

  if (!IsYellowScreenOfDeath() || !HasCSharpOrVbError)
    return;
  
  ReplaceFileErrorWithFileLink();
  
}());
	
