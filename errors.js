module.exports = [
    // Random plugins/extensions
    'top.GLOBALS',

    // See: http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html
    'originalCreateNotification',
    'canvas.contentDocument',
    'MyApp_RemoveAllHighlights',
    'http://tt.epicplay.com',
    'Can\'t find variable: ZiteReader',
    'jigsaw is not defined',
    'ComboSearch is not defined',
    'http://loading.retry.widdit.com/',
    'atomicFindClose',

    // Facebook borked
    'fb_xd_fragment',

    // ISP "optimizing" proxy - `Cache-Control: no-transform` seems to reduce this. (thanks @acdha)
    // See http://stackoverflow.com/questions/4113268/how-to-stop-javascript-injection-from-vodafone-proxy
    'bmi_SafeAddOnload',
    'EBCallBackMessageReceived',

    // See http://toolbar.conduit.com/Developer/HtmlAndGadget/Methods/JSInjection.aspx
    'conduitPage',

    // Probably comes from extensions: http://stackoverflow.com/questions/5913978/cryptic-script-error-reported-in-javascript-in-chrome-and-firefox
    'Script error.',

    // Avast antivirus injection
    '_avast_',

    // Chrome on iOS, https://groups.google.com/a/chromium.org/forum/#!topic/chromium-discuss/7VU0_VvC7mE
    '__gCrWeb',

    // https://bugzilla.mozilla.org/show_bug.cgi?id=783260
    // http://stackoverflow.com/a/13101119
    'Permission denied to access property \"toString\"',

    // 3rd-party plugin
    'plugin.setSuspendState',

    // http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html
    'miscellaneous_bindings',

    'eshopcomp',
    'harkedtremblings',
    'eval at C',
    'eval at E_c',
    'NPObject',

    // uiWebview_RemoveAllHighlights
    'uiWebview_',
    'variable: inf',
    'androidInterface',
    'SymBrowser_',
    'touchDownX',
    'kw__injected',

    // https://bugs.chromium.org/p/chromium/issues/detail?id=97172
    'ntp is not defined',
    'frameConnector_isForegroundChanged',

    // 3rd party
    'Object.lm.run',
    'Window.dologin',
    'siteroot',

    // as '_firefox_ReaderMode', etc.
    '_firefox_',

    // SafeBrowse extension
    'jQSB',

    // Proxy error
    'ICAP Error',

    // analytics
    'vars.hotjar.com',
    'doubleclick.net',

    // Safari specific error
    'promiseReactionJob'
];