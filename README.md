#Font Awesome Widget
*For Titanium Alloy
*

**One Font, 439 Icons**

In a single collection, Font Awesome is a pictographic language of web-related actions.

## Overview
This is a widget for the [Appcelerator](http://www.appcelerator.com) [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework which provides easy implementation of all icons found at [fontawesome.io](http://fontawesome.io)

## Features
* Simply drop the widget into your view XML file
* Same implementation as HTML 5
* Works on Android, iOS

## Quick Start
* [Download the latest version](https://github.com/mattmcfarland/com.mattmcfarland.fontawesome) of the widget as a ZIP file.
* Unzip the folder to your project under `app/widgets/com.mattmcfarland.fontawesome`.
* Add the widget as a dependency to your `app/config.json` file:

```javascript
"dependencies": {
	"com.mattmcfarland.fontawesome":"4.1.0"
}
```

* Add the widget as the last item in the view container you want to apply icons styles to, so your **main window or view**, just *above* the closing `Window` or `View` tags.

```xml
<Alloy>
    <TabGroup>
        <Tab title="Tab 1">
            <Window title="Tab 1">
                <Label>I am Window 1</Label>
                <Widget src="com.mattmcfarland.fontawesome"/>
            </Window>
        </Tab>
        <Tab title="Tab 2">
            <Window title="Tab 2">
                <View>
                    <Label>I am Window 2</Label>
                    <Widget src="com.mattmcfarland.fontawesome"/>
                </View>
            </Window>
        </Tab>
    </TabGroup>
</Alloy>
```

That's it. You simply add your Icons in a very similar way we do it with HTML 5.

```xml
<Label icon = "fa-glass"></Label>
```

Use the exact same text that is used as the class names on fontawesome.io



### License

#### Font Awesome 4.1.0

Font Awesome 4.1.0 · Created by Dave Gandy

Font Awesome FONTS are licensed under SIL OFL 1.1 



#### Titanium Allow Widget . 

Created by Matt McFarland and Licensed under GPL




Font Awesome 4.1.0 Widget for Titanium Alloy
