// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

	var heading1s = document.getElementsByTagName('h1');
   
	if(heading1s.length !=0)
	{    
		if(heading1s[0].innerText.indexOf('Server Error in') > -1)
		{	
			var cSharpRegEx = /(.?:\\.*?\.cs)/g;
			var vbNetRegEx = /(.?:\\.*?\.vb)/g;
		
			if(cSharpRegEx.test(document.body.innerHTML))
			{
				document.body.innerHTML = document.body.innerHTML.replace(cSharpRegEx, '<a style="color:green; font-weight:bold;" href="file:///$1" target="_blank">$1</a>');
			}
			
			if(vbNetRegEx.test(document.body.innerHTML))
			{
				document.body.innerHTML = document.body.innerHTML.replace(vbNetRegEx, '<a style="color:green; font-weight:bold;" href="file:///$1" target="_blank">$1</a>');
			}
				
		}
	}
	
