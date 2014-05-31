
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

