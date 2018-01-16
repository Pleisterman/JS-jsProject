/* 
 *  Project: jsProject Examples
 * 
 *  File: translationsModule.js
 * 
 *  Purpose: 
 *      creates a json object with translations
 *      adds the application function: getTranslation to the application
 *  
 *  Last Revision:  21-03-2017
 * 
 *  Author: Pleisterman
 *  Web: www.pleisterman.nl 
 *  Mail: info@pleisterman.nl 
 *  GitHub: Pleisterman 
 * 
 *  Copyright (C) 2017 Pleisterman 
 *  GNU General Public License 3+ 
 *  see <http://www.gnu.org/licenses/>
*/

// create module function
( function( pleisterman ){

    // MODULE: translationsModule( pleisterman ) void
    
    pleisterman.translationsModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                            // object: self
        self.MODULE = 'translationsModule';                         // string: module
        self.debugOn = false;                                       // boolean: debugOn
        self.introText = '<div style="color:mediumseagreen;">';
        self.introText += '<b>jsProject is a Javascript library</b>';
        self.introText += '</div>';
        self.introText += '<br>';
        self.introText += 'The library is written with the Revealing Module Pattern.';
        self.introText += '<br>';
        self.introText += 'It contains some essential functions needed to create an application.';
        self.introText += '<br>';
        self.introText += 'Here you can find an explanation of these essential functions.';
        self.introText += '<br>';
        self.introText += '<br>';
        self.introText += '<div style="color:mediumseagreen;">';
        self.introText += '<b>JQuery is required.</b>';
        self.introText += '</div>';
        self.introText += '<br>';
        self.introText += '<div style="color:mediumseagreen;">';
        self.introText += '<b>Why would you use jsProject?</b>';
        self.introText += '</div>';
        self.introText += '<br>';
        self.introText += 'It has some really handy basic functions needed for your project.';
        self.introText += '<br>';
        self.introText += '<br>';
        self.introText += 'It has a tiny code base that can be easily adapted to your own needs.';
        self.introText += '<br>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Examples.',
            'introTitle'            :       'Welcome to the jsProject examples.',
            'introText'             :       self.introText,
            'contentItems'          :       [
                {                                                           // json: item jsProject
                    'title'     :   'Using jsProject',
                    'fileName'  :   '/github/jsProject/jsProject/src/jsProject.js',
                    'text'      :   'jsProject can be used in a modulair setup. But it is also possible to use the jsProject functions from regular Javascript.<br><br>Click here to learn more about using jsProject.<br><br>',
                    'link'      :   './examples/integration/index.php?lang=en'
                },                                                          // done json: item jsProject
                {                                                           // json: item values
                    'title'     :   'Values',
                    'fileName'  :   '/github/jsProject/jsProject/src/valuesModule.js',
                    'text'      :   'Values in the valuesModules are muttable global values.<br><br>The values module encapsulates these values.<br><br>Click here to learn more about the valuesModule and how to use it.<br><br>',
                    'link'      :   './examples/values/index.php?lang=en'
                },                                                          // done json: item values
                {                                                           // json: item debugger
                    'title'     :   'Debugger',
                    'fileName'  :   '/github/jsProject/jsProject/src/debugModule.js',
                    'text'      :   'The debugger is a dragable window that displays real-time debug information.<br><br>Click here to learn more about the debuggerModule and how to use it.<br><br>',
                    'link'      :   './examples/debugger/index.php?lang=en'
                },                                                           // done json: item debugger
                {                                                           // json: item events
                    'title'     :   'Events',
                    'fileName'  :   '/github/jsProject/jsProject/src/eventsModule.js',
                    'text'      :   'The eventsModule is a subscription service.<br>The events are handled synchronious in order of subscription.<br>The events module provides application wide acces to these events.<br><br>Click here to learn more about the eventsModule and how to use it.<br><br>',
                    'link'      :   './examples/events/index.php?lang=en'
                },                                                           // done json: item events
                {                                                           // json: item ajax
                    'title'     :   'Ajax',
                    'fileName'  :   '/github/jsProject/jsProject/src/ajaxModule.js',
                    'text'      :   'The ajaxModule provides general post and secure tokenized post and download functions.<br>The post events are handled in multi-processing asynchronious procedures.<br><br>Click here to learn more about the ajaxModule and how to use it.<br><br>',
                    'link'      :   './examples/ajax/index.php?lang=en'
                },                                                           // done json: item events
                {                                                           // json: item html-generator
                    'title'     :   'HTML-Generator',
                    'fileName'  :   '/github/jsProject/jsProject/src/jsonToElementHtmlModule.js',
                    'text'      :   'The jsonToElementHtmlModule provides a generator that creates html from Json structures.<br>The Json structures are easier to maintain and reuse then plain Html.<br><br>Click here to learn more about the HTML-generator and how to use it.<br><br>',
                    'link'      :   './examples/htmlGenerator/index.php?lang=en'
                },                                                           // done json: item html-generator
                {                                                           // json: item settings
                    'title'     :   'functions',
                    'fileName'  :   '/github/jsProject/jsProject/src/functions/functionsModule.js',
                    'text'      :   'JsProject provides some functions that are easy to use and add some basic funcionality for strings, colors, dates etc...<br><br><br>Click here to learn more about the functions and how to use it.<br><br>',
                    'link'      :   './examples/functions/index.php?lang=en'
                },                                                           // done json: item html-generator
                {                                                           // json: item settings
                    'title'     :   'Settings',
                    'fileName'  :   '/github/jsProject/settingsModule.js',
                    'text'      :   'Settings in the settingsModule are global immutable values.<br>The settings module encapsulates these values.<br>The settingsModule is not contained in jsProject but is an extension module that will work with jsProject.<br><br>Click here to learn more about the settingsModule and how to use it.<br><br>',
                    'link'      :   './examples/settings/index.php?lang=en'
                },                                                           // done json: item html-generator
                {                                                           // json: item layout
                    'title'     :   'Layout',
                    'fileName'  :   '/github/jsProject/layoutModule.js',
                    'text'      :   'The jsProject HTML-Generator creates HTML with inline css, the layoutModule will handle the responsive layout of the page.<br>The layoutModule is not contained in jsProject but is an extension module that will work with jsProject.<br><br>Click here to learn more about the layoutModule and how to use it.<br><br>',
                    'link'      :   './examples/layout/index.php?lang=en'
                }                                                          // done json: item layout
            ]
        };                                                          // done json: translations
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );
            
            // add the extensions to pleisterman
            self.addApplicationsExtensions();

        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function(){
        // FUNCTION: addApplicationsExtensions( void ) void
            
            // add get translation function
            pleisterman.getTranslation = self.get;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.get = function( translationId ) {
        // FUNCTION: get( string: translationId ) var
            
            // translation defined
            if( self.translations[translationId] !== undefined ){
                // done
                return self.translations[translationId];
            }
            // done translation defined
            
            // debug info
            self.debug( 'error translation not found: ' +  translationId );
            // done with error
            return false;
            
        // DONE FUNCTION: get( string: translationId ) var
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                // call global debug
                jsProject.debug( self.MODULE + ' ' + message );
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        // DONE FUNCTIONS

        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
        };
        // DONE PUBLIC
    };
    // DONE MODULE: translationsModule( pleisterman ) void
})( pleisterman );
// done create module function

