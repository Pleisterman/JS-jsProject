/* 
 *  Project: jsProject
 * 
 *  File: jsProject.js
 * 
 *  Last revision: 10-03-2017
 * 
 *  Author: Pleisterman
 *  Web: www.pleisterman.nl 
 *  Mail: info@pleisterman.nl 
 *  GitHub: Pleisterman 
 * 
 * Purpose: this file contains the global variable jsProject
 *          modules:
 *               valuesModule               storage for global values by group name
 *               eventsModule               event manager with subscription service
 *               debugModule                displays debug screen
 *               ajaxModule                 handle ajax calls
 *               jsonToElementHtmlModule    generate html with inline css
 *          functions:
 *              getJsonValueFunction        get a value from a json object
 *              elementIsVisibleFunction    check if element is visiblee on screen
 *              scrollElementFunction       scroll element into view
 *              getElementPositionFunction  get element position
 *              padfunction                 pad with string
 *              checkEmailSyntaxFunction    check syntax
 *              xorStringFunction           xor two strings
 *              dateObjectToDbDateFunction  json date to db date format
 *              dateObjectToTextFunction    json date to text
 *              dbDateToDateObjectFunction  db date format to json date
 *              getNextDayFunction          get next day date
 *              getPreviousDayFunction      get previous day date
 *              getTodayDbDateFunction      get today date
 *              getTodayTextFunction        get today as text
 *              getWeekFunction             get week number
 *              textToDateObjectFunction    text to json date
 *              hexStringToRgbFunction      hex to json rgb
 *              hsvToRgbFunction            json hsv to json rgb
 *              rgbIsRgbFunction            json rgb is json rgb
 *              rgbToHexStringFunction      json rgb to hex
 *              rgbToHsvFunction            json hsv to hex
 *              rgbToStringFunction         json rgb to string
 *              stringToRgbFunction         string to json rgb
 *                  
 *  Copyright (C) 2017 Pleisterman 
 *  GNU General Public License 3+ 
 *  see <http://www.gnu.org/licenses/>
 * 
 */

// global var jsProject
var jsProject = ( function( ) {
    // PRIVATE:

    // MEMBERS
    var self = this;                                // object: self
    self.MODULE = 'jsProject';                      // string: module
    self.debugger = null;                           // module: debugger    
    self.values = null;                             // module: values
    self.ajax = null;                               // module: ajax
    self.events = null;                             // module: events
    self.functionsModule = null;                    // module: functions
    self.jsonToElementHtmlModule = null;            // module: json to html element 
    self.constructed = false;                       // boolean: constructed
    self.debuggerConstructed = false;               // boolean: debuggerConstructed
    // DONE MEMBERS
    
    
    // FUNCTIONS
    self.construct = function() {
    // FUNCTION: construct( void ) void
        
        // only one instance of jsProject is constructed
        if( self.constructed ) {
            // done
            return false;
        }
        // done only one instance of jsProject is constructed
        
        // create an empty debug function
        jsProject.debug = function(){};
        // will be overwritten by debugger 
        
        // remember constructed
        self.constructed = true;
        
        // add modules
        self.values = new jsProject.valuesModule();
        self.events = new jsProject.eventsModule();
        self.ajax = new jsProject.ajaxModule();
        self.functions = new jsProject.functionsModule();
        self.jsonToElementHtmlModule = new jsProject.jsonToElementHtmlModule();
        // done add modules

    // DONE FUNCTION: construct( void ) void
    };
    self.debugOn = function( debugOn, options ){
    // FUNCTION: debugOn( boolean: debugOn, json: options ) void
            
        // debug on
        if( debugOn && !self.debuggerConstructed ){
            // create the debugger
            jsProject.debugger = new jsProject.debugModule( options );
            // remember construction
            self.debuggerConstructed = true;
        }
        // done debugOn

        // debug on
        if( debugOn ){
            // show debugger
            jsProject.debugger.active( true );     
        }
        else {
            // debugger is constructed
            if( self.debuggerConstructed ){
                // hide debugger
                jsProject.debugger.active( false );     
            }
            // done debugger is constructed
        }
        // done debug on

    // DONE FUNCTION: debugOn( boolean: debugOn, json: options ) void
    };
    // DONE FUNCTIONS
        
    // PUBLIC
    return {
        // function construct( void ) void
        construct : function() {
            // call internal
            self.construct();
        },
        // function debugOn( boolean: debugOn, json:options ) void
        debugOn : function( debugOn, options ) {
            // call internal
            self.debugOn( debugOn, options );
        }
        // DONE PUBLIC
    };
    // DONE MODULE: jsProject( void ) void
})();
// done create module function
