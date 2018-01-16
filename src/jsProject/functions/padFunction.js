/* 
 *  Project: jsProject
 * 
 *  File: /functions/padFunction.js
 * 
 *  Purpose: 
 *      this module adds pad function to the
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

    // MODULE: padFunction( void ) void
    
    jsProject.padFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'padFunction';                        // string: module
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
            
            // add pad function
            jsProject.pad = self.pad;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.pad = function( string, padWith, padCount ) {
        // FUNCTION: pad( string: string, string: padWith, integer: padCount ) json
        
            // add padding to a string
            string = string.toString();
            // string lenght < pad count
            while( string.length < padCount ){
                string = padWith + string;
            }
            // done string lenght < pad count
            
            return string;
            
        // DONE FUNCTION: pad( string: string, string: padWith, integer: padCount ) json
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
    // DONE MODULE: padFunction( void ) void
})( jsProject );
// done create module function
