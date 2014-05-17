/**
 * Font Awesome Icon Widget Controller
 * 
 * Parses the active xml view for icon properties, then applies the appropriate icon.
 * Created by Matt McFarland.
 */
    
// icon data array /lib/icons.js
var icons = require(WPATH('icons'));

//debug options
var counter = 0;
var debugMode = false;
if (debugMode) Ti.API.debug('Font Awesome widget.js is active');

function applyIcons() {
    function updateIcons(children) {
        
        // Iterate tags
        if (children) {
            children.forEach(function (tag) {
                
                // Debugging stuff
                counter++;
                if (debugMode) Ti.API.debug('['+counter+'] ('+tag['id']+')  Checking for icon attribute');
                //.../Debugging stuff
                
                // If current tag has an icon property
                if (tag['icon']) {
                    var icon = icons[tag['icon']];
                    
                    if (debugMode) Ti.API.debug('['+counter+'] ('+tag['id']+')  icon attribute found. value is "'+tag['icon']+'"');
                                        
                    //Only handle icons that use 'fa-' prefix					
                    if (tag['icon'].substring(0, 3) === "fa-") {
                        
                        if (debugMode) Ti.API.debug('['+counter+'] ('+tag['id']+')  fa- prefix found');
                        
                        // Cache new text, title, font properties.
                        var aText = icon;
                        var aTitle = icon;
                        var fSize = '16dp';
                        
                        // Preserve existing text and title properties
                        if (tag['text']) aText += ' ' + tag['text'];
                        if (tag['title']) aTitle += ' ' + tag['title'];
                        
                        // Debugging stuff
                        if (debugMode) Ti.API.debug('['+counter+'] aText = "'+aText+'"');
                        if (debugMode) Ti.API.debug('['+counter+'] aTitle = "'+aTitle+'"');
                        
                        
                        // Preserve existing font size
                        if (tag['font']) {
                            if (tag['font']['fontSize']) {
                                fSize = tag['font']['fontSize'];
                            }
                        }
                        
                        // Configure new properties
                        var props = {
                            font: {
                                fontFamily: 'fontAwesome',
                                fontSize: fSize,
                            },
                            text: aText,
                            title: aTitle,
                        };
                        
                        // Apply properties 
                        tag.applyProperties(props);
                        
                        // Debugging stuff
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
