/* 
 *  Project: jsProject
 * 
 *  File: /functions/stringToRgbFunction.js
 * 
 *  Purpose: 
 *      this module adds rgb string to rgb json function to the
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

    // MODULE: stringToRgbFunction( void ) void
    
    jsProject.stringToRgbFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'stringToRgbFunction';                // string: module
        self.debugOn = false;                               // boolean: debugOn
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void

            // debug info
            self.debug( 'construct' );
            
            // add extensions 
            self.addApplicationsExtensions();
            
        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function( ){
        // FUNCTION: addApplicationsExtensions( void ) void
            
            // add stringToRgb function
            jsProject.stringToRgb = self.stringToRgb;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.stringToRgb = function( string ){
        // FUNCTION: stringToRgb( string: string ) json
        
            // get r
            var current = string.indexOf( "(" );
            current++;
            var next = string.indexOf( "," );
            var r = parseInt( string.slice( current, next ) );
            // get g
            current = next + 1;
            next = string.indexOf( ",", current );
            var g = parseInt( string.slice( current, next ) );
            // get b
            current = next + 1;
            next = string.indexOf( ")", current );
            var b = parseInt( string.slice( current, next ) );
            
            // return rgb object
            return { 
                'r' : r, 
                'g' : g, 
                'b' : b
            };
            // done return rgb object
            
        // DONE FUNCTION: stringToRgb( string: string ) json
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
    // DONE MODULE: stringToRgbFunction( void ) void
})( jsProject );
// done create module function
