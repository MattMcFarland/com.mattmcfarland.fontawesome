#Font Awesome Ti.Widget 1.1.1
*OMG! It's the Offical Font Awesome 4.1.0 by Dave Gandy for Titanium Alloy!*

## Overview
This is a widget for the [Appcelerator](http://www.appcelerator.com) [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework which provides easy implementation of the Offical Font Awesome 4.1.0 icons found at [fontawesome.io](http://fontawesome.io)

## Features
* 100% Free to use and open source to boot
* Simply drop the widget into your view XML file
* Add Icons to any Label, View, or Button with a simple xml attribute.
* Vector Icons from a font file, scale to any size, give it any color.
* Works on Android, iOS
* Compatibile with other fonts and icon sets.

## Working Example
![Imgur](http://i.imgur.com/xuUFdQE.png)
* [Download the Working Example](https://github.com/MattMcFarland/TitaniumAlloy-FontAwesome-Example) to see it in action - but its so easy to use you probably won't have to.

## Quick Start
* [Download the latest version](https://github.com/mattmcfarland/com.mattmcfarland.fontawesome) of the widget as a ZIP file.
* Unzip the folder to your project under `app/widgets/com.mattmcfarland.fontawesome`.
* **ANDROID:** Copy `fontAwesome.ttf` from `com.mattmcfarland.fontawesome/assets/fonts` to `app/assets/fonts`
* Add the widget as a dependency to your `app/config.json` file:

```javascript
"dependencies": {
	"com.mattmcfarland.fontawesome":"1.1.1"
}
```

* Add the widget as the last item in the view container you want to apply icons styles to, so your **main window or view**, just *above* the closing `Window` or `View` tags.

```xml
<Alloy>
    <TabGroup>
        <Tab title="Tab 1">
            <Window title="Tab 1">
                <Label icon = "fa-car" >I am Window 1</Label>
                <Widget id="fa1" src="com.mattmcfarland.fontawesome"/>
            </Window>
        </Tab>
        <Tab title="Tab 2">
            <Window title="Tab 2">
                <View>
                    <Label icon = "fa-star">I am Window 2</Label>
                    <Widget id="fa2" src="com.mattmcfarland.fontawesome"/>
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

### Documentation


For a more comprehensive overview, [review the docs](http://mattmcfarland.github.io/com.mattmcfarland.fontawesome/doc/global.html)


### FAQ 

FAQ moved [here](faq.md)

### License

#### Font Awesome 4.1.0

Font Awesome 4.1.0 · Created by Dave Gandy

Font Awesome FONTS are licensed under SIL OFL 1.1 



#### Titanium Allow Widget 1.1.1 

Created by Matt McFarland and Licensed under GPL


### Changelog

**Version 1.1.1**
* Fix md documentation 

**Version 1.1.0**
* Added JS methods for adding/removing/refreshing icons.

**Version 1.0.3** 
* Established symantic versioning, fixed android bugs.
* Disregard version 4.0.3 (is actually version 1.0) - important!

**Version 1.0.0**
* Accidentally named version 4.0.3
* Initial Release

Font Awesome 1.1.1 Widget for Titanium Alloy
