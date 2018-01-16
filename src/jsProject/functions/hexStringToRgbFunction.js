/* 
 *  Project: jsProject
 * 
 *  File: /functions/hexStringToRgbFunction.js
 * 
 *  Purpose: 
 *      this module adds hex string to rgb json function to the
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

    // MODULE: hexStringToRgbFunction( void ) void
    
    jsProject.hexStringToRgbFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'hexStringToRgbFunction';             // string: module
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
            
            // add hexStringToRgb function
            jsProject.hexStringToRgb = self.hexStringToRgb;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.hexStringToRgb = function( hexString ){
        // FUNCTION: hexStringToRgb( string: hexString ) json
        
            var r = parseInt( hexString.substring( 0, 2 ), 16 );
            if( isNaN( r ) ){
                r = 0;
            }
            var g = parseInt( hexString.substring( 2, 4 ), 16 );
            if( isNaN( g ) ){
                g = 0;
            }
            
            var b = parseInt( hexString.substring( 4, 6 ), 16 );
            if( isNaN( b) ){
                b = 0;
            }
            
            // return rgb object
            return { 
                'r' : r, 
                'g' : g, 
                'b' : b
            };
            // done return rgb object
            
        // DONE FUNCTION: hexStringToRgb( string: hexString ) json
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
    // DONE MODULE: hexStringToRgbFunction( void ) void
})( jsProject );
// done create module function
