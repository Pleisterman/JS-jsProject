/* 
 *  Project: jsProject
 * 
 *  File: /functions/functionsModule.js
 * 
 *  Purpose: 
 *      this module adds the functions to the
 *      object jsProject
 *  
 *  Last Revision:  10-03-2017
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
( function( jsProject ){

    // MODULE: functionsModule( void ) void
    
    jsProject.functionsModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'functionsModule';                    // string: module
        self.debugOn = false;                               // boolean: debugOn
        // common functions
        self.getJsonValueFunction = null;                   // getJsonValueFunction
        self.elementIsVisibleFunction = null;               // elementIsVisibleFunction 
        self.scrollElementFunction = null;                  // scrollElementFunction 
        self.getElementPositionFunction = null;             // getElementPositionFunction 
        // text functions
        self.padfunction = null;                            // padfunction 
        self.checkEmailSyntaxFunction = null;               // checkEmailSyntaxFunction 
        self.xorStringFunction = null;                      // xorStringFunction 
        // date functions
        self.dateObjectToDbDateFunction = null;             // dateObjectToDbDateFunction 
        self.dateObjectToTextFunction = null;               // dateObjectToTextFunction 
        self.dbDateToDateObjectFunction = null;             // dbDateToDateObjectFunction 
        self.getNextDayFunction = null;                     // getNextDayFunction 
        self.getPreviousDayFunction = null;                 // getPreviousDayFunction 
        self.getTodayDbDateFunction = null;                 // getTodayDbDateFunction 
        self.getTodayTextFunction = null;                   // getTodayTextFunction 
        self.getWeekFunction = null;                        // getWeekFunction 
        self.textToDateObjectFunction = null;               // textToDateObjectFunction 
        // color functions
        self.hexStringToRgbFunction = null;                 // hexStringToRgbFunction 
        self.hsvToRgbFunction = null;                       // hsvToRgbFunction 
        self.rgbIsRgbFunction = null;                       // rgbIsRgbFunction 
        self.rgbToHexStringFunction = null;                 // rgbToHexStringFunction 
        self.rgbToHsvFunction = null;                       // rgbToHsvFunction 
        self.rgbToStringFunction = null;                    // rgbToStringFunction 
        self.stringToRgbFunction = null;                    // stringToRgbFunction 
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );
            
            // create common functions 
            self.addCommonFunctions();
            // create text functions 
            self.addTextFunctions();
            // create date functions 
            self.addDateFunctions();
            // create date functions 
            self.addColorFunctions();

        // DONE FUNCTION: construct( void ) void
        };
        self.addCommonFunctions = function( ){
        // FUNCTION: addCommonFunctions( void ) void
            
            // add get json value
            self.getJsonValueFunction = new jsProject.getJsonValueFunction();
            // add get element position
            self.getElementPositionFunction = new jsProject.getElementPositionFunction();
            // add get element is visible
            self.elementIsVisibleFunction = new jsProject.elementIsVisibleFunction();
            // add scroll element
            self.scrollElementFunction = new jsProject.scrollElementFunction();

        // DONE FUNCTION: addCommonFunctions( void ) void
        };
        self.addTextFunctions = function( ){
        // FUNCTION: addTextFunctions( void ) void
            
            // add pad
            self.padfunction = new jsProject.padFunction();
            // add check email syntax
            self.checkEmailSyntaxFunction = new jsProject.checkEmailSyntaxFunction();
            // add xor string
            self.xorStringFunction = new jsProject.xorStringFunction();

        // DONE FUNCTION: addTextFunctions( void ) void
        };
        self.addDateFunctions = function( ){
        // FUNCTION: addDateFunctions( void ) void
            
            // add json date object to db date
            self.dateObjectToDbDateFunction = new jsProject.dateObjectToDbDateFunction();
            // add json date object to text
            self.dateObjectToTextFunction = new jsProject.dateObjectToTextFunction();
            // add db date to json date object
            self.dbDateToDateObjectFunction = new jsProject.dbDateToDateObjectFunction();
            // add get next day 
            self.getNextDayFunction = new jsProject.getNextDayFunction();
            // add get previous day 
            self.getPreviousDayFunction = new jsProject.getPreviousDayFunction();
            // add get today as string
            self.getTodayDbDateFunction = new jsProject.getTodayDbDateFunction();
            // add get today as string
            self.getTodayTextFunction = new jsProject.getTodayTextFunction();
            // add get week 
            self.getWeekFunction = new jsProject.getWeekFunction();
            // add text to date
            self.textToDateObjectFunction = new jsProject.textToDateObjectFunction();

        // DONE FUNCTION: addDateFunctions( void ) void
        };
        self.addColorFunctions = function( ){
        // FUNCTION: addColorFunctions( void ) void
            
            // add string to rgb
            self.stringToRgbFunction = new jsProject.stringToRgbFunction();
            // add hex string to rgb
            self.hexStringToRgbFunction = new jsProject.hexStringToRgbFunction();
            // add hsv to rgb
            self.hsvToRgbFunction = new jsProject.hsvToRgbFunction();
            // add rgb is rgb
            self.rgbIsRgbFunction = new jsProject.rgbIsRgbFunction();
            // add rgb to hex string
            self.rgbToHexStringFunction = new jsProject.rgbToHexStringFunction();
            // add rgb to hsv json object
            self.rgbToHsvFunction = new jsProject.rgbToHsvFunction();
            // add rgb to string
            self.rgbToStringFunction = new jsProject.rgbToStringFunction();

        // DONE FUNCTION: addColorFunctions( void ) void
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
    // DONE MODULE: functionsModule( void ) void
})( jsProject );
// done create module function
