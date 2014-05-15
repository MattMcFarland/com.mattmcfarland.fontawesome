#Font Awesome Widget
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
* [Download the Working Example](https://github.com/MattMcFarland/TitaniumAlloy-FontAwesome-Example) to see it in action - but its so easy to use you probably won't have to.

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
                <Label icon = "fa-car" >I am Window 1</Label>
                <Widget src="com.mattmcfarland.fontawesome"/>
            </Window>
        </Tab>
        <Tab title="Tab 2">
            <Window title="Tab 2">
                <View>
                    <Label icon = "fa-star">I am Window 2</Label>
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

### FAQ 

**Q: Where does it place the icon?**

A: If you add it to a Label with text, it appears before the text.  If you want to put it after the text, or anywhere else, you can simply just add it as a seperate label like so: `<Label icon = "fa-users"/>`

**Q: Where is the reference guide/cheat sheet for these icons?**

A: You can find a complete list of all icons and their names at [fontawesome.io/icons](http://fontawesome.io/icons) 

**Q: Are there any compatibility issues?**

A: I haven't tested enough to say for sure.  

**Q: What if I'm using `icon` for something else?**

A: FontAwesome Widget will only pay attention to the icon property value using the `fa-` prefix.

**Q: What to do if I can't get it to work?**

A: Please use the issues tab on the right, this way we can publically fix your issue and hopefully fix it for others who may run into the same problem in the future.

**Q: Do I need to put it inside every `<View>` tag??**

A: To be on the safe side you can, but I've managed to get it to work just putting it right before the closing `</Window>` Tag.

**Q: Who made these Awesome Icons???**

A: The Icons themselves were created by Dave Gandy, the Font in which they populate is under the SIL OFL 1.1 License.  It's free for commercial use!

**Q: I've seen another FontAwesome on Titanium's Marketplace for $5, is this the same?**

A: Not the same at all, the other one is using an older version of Font Awesome, has a few proprietary fonts mixed in, and was made for Titanium, not Alloy. 

### License

#### Font Awesome 4.1.0

Font Awesome 4.1.0 · Created by Dave Gandy

Font Awesome FONTS are licensed under SIL OFL 1.1 



#### Titanium Allow Widget . 

Created by Matt McFarland and Licensed under GPL




Font Awesome 4.1.0 Widget for Titanium Alloy
