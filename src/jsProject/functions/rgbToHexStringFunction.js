/* 
 *  Project: jsProject
 * 
 *  File: /functions/rgbToHexStringFunction.js
 * 
 *  Purpose: 
 *      this module adds rgb json object to hex string function to the
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

    // MODULE: rgbToHexStringFunction( void ) void
    
    jsProject.rgbToHexStringFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'rgbToHexStringFunction'              // string: module
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
            
            // add rgbToHexString function
            jsProject.rgbToHexString = self.rgbToHexString;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.rgbToHexString = function( rgb ){
        // FUNCTION: rgbToHexString( json: rgb ) string
        
            // create string
            var string = '';
            // add r
            string += jsProject.pad( rgb['r'].toString(16), '0', 2 );
            // add g
            string += jsProject.pad( rgb['g'].toString(16), '0', 2 );
            // add b
            string += jsProject.pad( rgb['b'].toString(16), '0', 2 );
            // done
            return string;
            
        // DONE FUNCTION: rgbToHexString( json: rgb ) string
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
    // DONE MODULE: rgbToHexStringFunction( void ) void
})( jsProject );
// done create module function
