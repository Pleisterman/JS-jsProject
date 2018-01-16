/* 
 *  Project: jsProject
 * 
 *  File: /functions/rgbToStringFunction.js
 * 
 *  Purpose: 
 *      this module adds rgb json object to rgb string function to the
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

    // MODULE: rgbToStringFunction( void ) void
    
    jsProject.rgbToStringFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'rgbToStringFunction';                // string: module
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
            
            // add rgbToString function
            jsProject.rgbToString = self.rgbToString;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.rgbToString = function( rgb ){
        // FUNCTION: rgbToString( json: rgb ) string
        
            // create string
            var string = 'rgb( ';
            // add r
            string += Math.round( rgb['r'] );
            string += ',';
            // g
            string += Math.round( rgb['g'] );
            string += ',';
            // b
            string += Math.round( rgb['b'] );
            string += ' )';
            
            // done 
            return string;
            
        // DONE FUNCTION: rgbToString( json: rgb ) string
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
    // DONE MODULE: rgbToStringFunction( void ) void
})( jsProject );
// done create module function
