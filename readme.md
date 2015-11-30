# app-store-link [![Build Status](https://travis-ci.org/ajoslin/app-store-link.svg?branch=master)](https://travis-ci.org/ajoslin/app-store-link)

> Generate a link to iOS or google play app

Uses these specs: [App Store](https://developer.apple.com/library/ios/qa/qa1633/_index.html), [Play Store](http://developer.android.com/distribute/tools/promote/linking.html#android-app)

## Install

```
$ npm install --save app-store-link
```

## Usage

```js
var link = require('app-store-link')

link.ios('123')
// => https://itunes.apple.com/us/app/id123?mt=8'

link.android('com.my.app')
// => https://play.android.com/store/apps/details?id=com.my.app

link.android('com.my.app', {native: true})
// => market://details?id=com.my.app
```

## Related

- [app-store-badge](https://github.com/ajoslin/app-store-badge)

## License

MIT © [Andrew Joslin](http://ajoslin.com)
