/* 
 *  Project: jsProject
 * 
 *  File: /functions/rgbIsRgbFunction.js
 * 
 *  Purpose: 
 *      this module adds check rgb json object vakues = rgb json object values function to the
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

    // MODULE: rgbIsRgbFunction( void ) void
    
    jsProject.rgbIsRgbFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'rgbIsRgbFunction';                   // string: module
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
            
            // add rgbIsRgb function
            jsProject.rgbIsRgb = self.rgbIsRgb;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.rgbIsRgb = function( rgbA, rgbB ){
        // FUNCTION: rgbIsRgb( json: rgbA, json: rgbB ) boolean
        
            // members are members
            if( rgbA['r'] === rgbB['r'] &&
                rgbA['g'] === rgbB['g'] &&
                rgbA['b'] === rgbB['b'] ) {
                
                // done equal
                return true;
            }
            // done members are members
            
            // done not equal
            return false;
            
        // DONE FUNCTION: rgbIsRgb( json: rgbA, json: rgbB ) boolean
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
    // DONE MODULE: rgbIsRgbFunction( void ) void
})( jsProject );
// done create module function
