var icons = require(WPATH('icons'));
var counter = 0;
var debugMode = false;
if (debugMode) Ti.API.debug('widget.js is active');
function applyIcons() {
    function updateIcons(children) {
        // Iterate controls
        if (children) {
            children.forEach(function (tag) {
	        	counter++;
	        	if (debugMode) Ti.API.debug('['+counter+'] ('+tag['id']+')  Checking for icon attribute');
                if (tag['icon']) {
                    var icon = icons[tag['icon']];
		        	if (debugMode) Ti.API.debug('['+counter+'] ('+tag['id']+')  icon attribute found. value is "'+tag['icon']+'"');
                    //Only handle icons that use 'fa-' prefix					
                    if (tag['icon'].substring(0, 3) === "fa-") {
                    	tag.hide();
			        	if (debugMode) Ti.API.debug('['+counter+'] ('+tag['id']+')  fa- prefix found');
                        //Preserve text and title
                        var aText = icon;
                        var aTitle = icon;
                        var fSize = '16dp';
                        if (tag['text']) aText += ' ' + tag['text'];
                        if (tag['title']) aTitle += ' ' + tag['title'];
                        if (debugMode) Ti.API.debug('['+counter+'] aText = "'+aText+'"');      
                        if (debugMode) Ti.API.debug('['+counter+'] aTitle = "'+aTitle+'"');      
                        //Preserve font size
                        if (tag['font']) {
                            if (tag['font']['fontSize']) {
                                fSize = tag['font']['fontSize'];
                            }
                        }
                        var props = {
                            font: {
                                fontFamily: "FontAwesome",
                                fontSize: fSize,
                            },
                            text: aText,
                            title: aTitle,
                        };
                        var fa = {
                        	fontFamily: 'FontAwesome',
                        	fontSize: fSize
                        };
                        
                        tag.applyProperties(props);
                        tag.setFont(fa);
                        tag.show();
                        if (debugMode) {
	                        Ti.API.debug(tag.getFont()['fontFamily']);
	                        for (var p in tag) {
	   				        	 Ti.API.debug('['+counter+'] ('+tag['id']+') {'+p+'} value is "'+tag[p]+'"');
	                        }
                        }         
                    }
                }
                // think about the children!
                updateIcons(tag.views || tag.children);
            });
        }
    }
    // initial call, wrap in an array
    updateIcons([__parentSymbol]);
}
// init
applyIcons();
