/*
 * Nieru Discord Bot
 * Version 2.5
 * Devourz
 */

const Files = require(require('path').join(process.cwd(), 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}