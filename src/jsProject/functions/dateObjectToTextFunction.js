/* 
 *  Project: jsProject
 * 
 *  File: /functions/dateObjectToDbDateFunction.js
 * 
 *  Purpose: 
 *      this module adds date json object to text format function to the
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

    // MODULE: dateObjectToDbDateFunction( void ) void
    
    jsProject.dateObjectToTextFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'dateObjectToTextFunction';           // string: module
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
            
            // add dateObjectToText function
            jsProject.dateObjectToText = self.dateObjectToText;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.dateObjectToText = function( dateObject ){
        // FUNCTION: dateObjectToText( json: dateObject ) string
            
            // create text
            var text = '';
            // get day
            text = jsProject.pad( dateObject['day'], '0', 2 );
            text += '-';
            // get month
            text += jsProject.pad( dateObject['month'], '0', 2 );
            text += '-';
            // get year
            text += dateObject['year'];

            // done
            return text;
            
        // DONE FUNCTION: dateObjectToText( json: dateObject ) string
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
    // DONE MODULE: dateObjectToTextFunction( void ) void
})( jsProject );
// done create module function
