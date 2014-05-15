var icons = require(WPATH('icons'));

function applyIcons() {
    function updateIcons(children) {
        // Iterate controls
        if (children) {
            children.forEach(function (tag) {
                for (var property in tag) {
                    Ti.API.debug(property + ': ' + tag[property]);
                }
                if (tag['icon']) {
                    Ti.API.debug('ICON FOUND FOR ' + tag['id']);
                    var icon = icons[tag['icon']];
                    //Only handle icons that use 'fa-' prefix					
                    if (tag['icon'].substring(0, 3) === "fa-") {
                        //Preserve text and title
                        var aText = '';
                        var aTitle = '';
                        var fSize = '16dp';
                        if (tag['text']) aText += ' ' + tag['text'];
                        if (tag['title']) aTitle += ' ' + tag['title'];
                        //Preserve font size
                        if (tag['font']) {
                            if (tag['font']['fontSize']) {
                                fSize = tag['font']['fontSize'];
                            }
                        }
                        Ti.API.debug('font size: ' + fSize);
                        var props = {
                            font: {
                                fontFamily: 'FontAwesome',
                                fontSize: fSize,
                            },
                            text: icon + aText,
                            title: icon + aTitle
                        };
                        tag.applyProperties(props);
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