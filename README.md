#Font Awesome Ti.Widget 1.3.0
*OMG! It's the Offical Font Awesome 4.2.0 by Dave Gandy for Titanium Alloy!*

## Overview
This is a widget for the [Appcelerator](http://www.appcelerator.com) [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework which provides easy implementation of the Offical Font Awesome icons found at [fontawesome.io](http://fontawesome.io)

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
	"com.mattmcfarland.fontawesome":"1.3.0"
}
```

### Alloy

* Add the widget as the last item in the view container you want to apply icons styles to, so your **main window or view**, just *above* the closing `Window` or `View` tags.

```xml
<Alloy>
	<Window title="Tab 1">
		<Label icon = "fa-car" >I am Window 1</Label>
		<Widget id="fa" src="com.mattmcfarland.fontawesome"/>
	</Window>
</Alloy>
```

That's it. You simply add your Icons in a very similar way we do it with HTML 5.

```xml
<Label icon = "fa-glass"></Label>
```

### Titanium

```js
	var fa = Alloy.createWidget("com.mattmcfarland.fontawesome");
	win.add(fa);
```

Using Titanium API with Javascript to add icons on the fly:

```js
$.fa.add(MyLabel,'fa-star');
```
## Documentation

As of version 1.1.1, Font Awesome Ti.Widget code is heavily documented.
If you are planning on using additional functionality or customization please review the docs at http://mattmcfarland.github.io/com.mattmcfarland.fontawesome

### Working with the widget

[Click here](http://mattmcfarland.github.io/com.mattmcfarland.fontawesome/Widget.html) to review the methods / properties for the widget.

### Creating your own Icons

[Click here](http://mattmcfarland.github.io/com.mattmcfarland.fontawesome/icons.js.html) to review the icons.js object.

## Customization

As of version 1.2.0, customization has been implemented.  You may use a different font-based icon character map with different widgets. For example, you could use `glyphicons` or different versions of `fontawesome`

### Enabling debugMode

When customizing the Font Awesome Ti.Widget API, it is recommended to enable debugMode:
```js
	$.fa.debugMode = true;
```

### Using custom icons

To add your very icon character map from a font-file:

1. Copy your fontfile into your `assets/fonts` directory.

2. Make sure the name of the font file and the system name of the font file match.  
	* For `IOS` - Titanium SDK looks for the system name of the font file
	* For `ANDROID` and `MOBILE WEB` - Titanium SDK looks for the file name without the `ext` (.ttf)
	* This is why FontAwesome.ttf is the same as FontAwesome, the system name is FontAwesome, file name is FontAwesome.

> For more information, checkout the Titanium SDK documentation regarding adding fonts: http://docs.appcelerator.com/titanium/3.0/#!/guide/Custom_Fonts

3. Follow the same example found in `/com.mattmcfarland.fontawesome/lib/icons.js` to create the same font array map.

> You MUST use the "fa-" prefix.  You could do something like fa-myfont-star if you wish.

4. Place your custom icons.js file in `/assets/lib/` and use `require` to assign them to any widget.

5. Apply your custom fonts to a widget instance like so:

```js
	$.fa.icons = require('new_icons');
```

### Extended Methods

Once you add an instance of the widget to a view, you may use the API methods to add/remove/change icons.
> For more information please review the docs: http://mattmcfarland.github.io/com.mattmcfarland.fontawesome

## Methodology

> Knowledge is Power...

The widget was designed so at a very basic level it works right out of the box.  Meaning, all you have to do is add a proper `icon` property to any view and it works.  But not in all cases, so the purpose of this section is to explain how it works so you can have a better understanding and control over the widget and how it operates.

Once you create a `Font Awesome Ti.Widget` it immediately parses the view it is added to for other `Ti.UI.View` objects.  The scope of this query is limited to the widget's siblings and it/their children views (and grand children and so on). 
> As of version 1.2.0, you can disable the initial parser by adding the property `instaParse` to `false` (`eg: <Widget instaParse = "false" ...`), then use the `refresh` method to parse when you are ready.

The `Font Awesome Ti.Widget` then applies icons to every instance of a `Ti.UI.View` object that has an `icon` property with a `fa-` prefix.  Because MobileWeb, Android, and IOS handle View objects (such as Label, Button, Row, etc) differently, you may have to create blank labels just for icons for optimal compatibility.

Additional methods such as add, remove, change are available for use with a widget instance so you can have additional control. Refer to the documentation for the comments in `widget.js` for more information.

## License

### Font Awesome 4.2.0

Created by Dave Gandy

FontAwesome.ttf is licensed under SIL OFL 1.1 

### Titanium Alloy Widget 1.3.0 

Created by Matt McFarland and Licensed under GPL


## Changelog

**Version 1.3.0**
* Update to FontAwesome 4.2.0

**Version 1.2.0**
* Improved Documentation.
* Include docs with widget.
* Add custom icon functionality.
* Add option to disable initial parser.
* Mobileweb is no longer supported, but still works.

**Version 1.1.1**
* Fix md documentation 

**Version 1.1.0**
* Added JS methods for adding/removing/refreshing icons.

**Version 1.0.1-3** 
* Established symantic versioning, fixed android bugs.
* Disregard version 4.0.3 (is actually version 1.0) - important!

**Version 1.0.0**
* Accidentally named version 4.0.3
* Initial Release

##  FAQ

**Q: Where does it place the icon?**

A: If you add it to a Label with text, it appears before the text.  If you want to put it after the text, or anywhere else, you can simply just add it as a seperate label like so: `<Label icon = "fa-users"/>`

**Q: Where is the reference guide/cheat sheet for these icons?**

A: You can find a complete list of all icons and their names at [fontawesome.io/icons](http://fontawesome.io/icons) 

**Q: Are there any compatibility issues?**

A: Android requires putting the icon inside the app's asset folder, and Mobileweb does not allow for text+icon sharing. 

**Q: What if I'm using `icon` for something else?**

A: FontAwesome Widget will only pay attention to the icon property value using the `fa-` prefix.

**Q: What to do if I can't get it to work?**

A: Please use the issues tab on the right, this way we can publically fix your issue and hopefully fix it for others who may run into the same problem in the future.

**Q: Do I need to put it inside every `<View>` tag??**

A: The widget will automatically parse its siblings/children for `icon` properties with `fa-` prefix. For optimum efficiency, you should only apply the widget to these areas. 

**Q: Who made these Awesome Icons???**

A: The Icons themselves were created by Dave Gandy, the Font in which they populate is under the SIL OFL 1.1 License.  It's free for commercial use!

**Q: I've seen another FontAwesome on Titanium's Marketplace for $5, is this the same?**

A: Not the same at all, the other one is using an older version of Font Awesome, has a few proprietary fonts mixed in, and was made for Titanium, not Alloy. 


