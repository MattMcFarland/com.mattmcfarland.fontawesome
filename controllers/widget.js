var icons = require(WPATH('icons'));

function applyIcons() {
    function updateIcons(children) {
        // Iterate controls
        if (children) {
            children.forEach(function (tag) {
                if (tag['icon']) {
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
