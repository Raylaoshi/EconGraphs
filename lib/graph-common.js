// /lib/graph-common.js

(function() {
    // Define the base path to your library folder
    // Using the absolute URL ensures it works no matter how deep your folders are
    var basePath = "https://raylaoshi.github.io/AP.Econ.Graphs/lib/";

    // 1. Inject the KGJS CSS
    document.write('<link href="' + basePath + 'kg.0.4.0.css" rel="stylesheet" type="text/css">');

    // 2. Inject your Custom CSS
    document.write('<style>');
    document.write('.kg-container { user-select: none; -webkit-user-select: none; visibility: hidden; }'); // Added visibility hidden to prevent flash
    document.write('.kg-container svg { visibility: visible; }');
    document.write('svg text { pointer-events: none; }');
    document.write('</style>');

    // 3. Inject the KGJS Library
    // We use document.write here to force the browser to load this BEFORE reading the body
    document.write('<script src="' + basePath + 'kg.0.4.0.js"><\/script>');

    // 4. Setup the Event Listeners
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.kg-container');
        if (container) {
            container.addEventListener('mousedown', function(e) {
                if (e.target.closest('svg')) {
                    e.preventDefault();
                }
            }, true);
        }
    });
})();