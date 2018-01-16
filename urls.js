module.exports = [
    // Google Adsense
    /pagead\/js\/adsbygoogle\.js/i,
    
    // Facebook flakiness
    /graph\.facebook\.com/i,

    // Facebook blocked
    /connect\.facebook\.net\/en_US\/all\.js/i,

    // Woopra
    /eatdifferent\.com\.woopra-ns\.com/i,
    /static\.woopra\.com\/js\/woopra\.js/i,
    
    // Chrome extensions
    /extensions\//i,
    /chrome-extension:/i,
    /^chrome:\/\//i,
    
    // Other plugins
    /127\.0\.0\.1:4001\/isrunning/i,
    /webappstoolbarba\.texthelp\.com\//i,
    /metrics\.itunes\.apple\.com\.edgesuite\.net\//i,
    
    // ignore saved local copies
    /file:\/\/\//i,

    // Firefox extensions
    /^resource:\/\//i,
    /webappstoolbarba\.texthelp\.com\//i,
    /itunes\.apple\.com/i,
    /googlest/,
    /googleapis/,
    /bestpriceninja/,
    /re-markit/,
    /googlebot/,

    // Malware http://www.sitealyzer.net/en/p/sb/remove-pstatic.davebestdeals.com/
    /davebestdeals\.com/i,

    // Malware
    /mecash\./i,

    // Malware
    /myclk\./i,

    // Kaspersky Antivirus injection
    /kaspersky/i,

    /salivaunsnarlreprint/i,
    /nph-proxy\./i,

    // Analytics
    /hotjar\./i,
    /doubleclick\.net/i,
    /netstats\.space/i
];