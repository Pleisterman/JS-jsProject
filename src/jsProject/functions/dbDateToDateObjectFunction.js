/* 
 *  Project: jsProject
 * 
 *  File: /functions/dbDateToDateObjectFunction.js
 * 
 *  Purpose: 
 *      this module db date format to date json object function to the
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

    // MODULE: dbDateToDateObjectFunction( void ) void
    
    jsProject.dbDateToDateObjectFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'dbDateToDateObjectFunction';         // string: module
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
            
            // add dbDateToDateObject function
            jsProject.dbDateToDateObject = self.dbDateToDateObject;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.dbDateToDateObject = function( dbDate ){
        // FUNCTION: dbDateToDateObject( string: dbDate ) json
            
            // create object from db date
            var dateObject = {
                'day'   : parseInt( dbDate.slice( 6, 8 ) ),
                'month' : parseInt( dbDate.slice( 4, 6 ) ),
                'year'  : parseInt( dbDate.slice( 0, 4 ) ) 
            };
            // done create object from db date

            // done
            return dateObject;
            
        // DONE FUNCTION: dbDateToDateObject( string: dbDate ) json
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
    // DONE MODULE: dbDateToDateObjectFunction( void ) void
})( jsProject );
// done create module function
