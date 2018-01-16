/* 
 *  Project: jsProject
 * 
 *  File: /functions/textToDateObjectFunction.js
 * 
 *  Purpose: 
 *      this module adds text to date json function to the
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

    // MODULE: textToDateObjectFunction( void ) void
    
    jsProject.textToDateObjectFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'textToDateObjectFunction';           // string: module
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
            jsProject.textToDateObject = self.textToDateObject;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.textToDateObject = function( text ){
        // FUNCTION: textToDateObject( string: text ) json
        
            // create object from db date
            var dateObject = {
                'day'   : parseInt( text.slice( 0, 2 ) ),
                'month' : parseInt( text.slice( 3, 5 ) ),
                'year'  : parseInt( text.slice( 6, 10 ) )  
            };
            // done create object from db date

            // done
            return dateObject;
            
        // DONE FUNCTION: textToDateObject( string: text ) json
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
    // DONE MODULE: textToDateObjectFunction( void ) void
})( jsProject );
// done create module function
