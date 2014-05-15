var icons = require(WPATH('icons'));
function applyIcons() {

	function updateIcons(children) {

		// Iterate controls
		if (children) {
			children.forEach(function(tag) {
				for (var property in tag) {
					Ti.API.debug(tag[property]);
				}
				if (tag['icon']) {
					Ti.API.debug('ICON FOUND FOR '+tag['id']);
					var icon = icons[tag['icon']];
					var props = {
						font: {
							fontFamily:'FontAwesome',
						},
						text: icon,
						title: icon
					};
					tag.applyProperties(props);
					
					for (var property in tag) {
						Ti.API.debug('**'+tag[property]);
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
