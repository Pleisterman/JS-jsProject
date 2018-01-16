/* 
 *  Project: jsProject
 * 
 *  File: /functions/dateObjectToDbDateFunction.js
 * 
 *  Purpose: 
 *      this module adds date json object to db date format function to the
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
    
    jsProject.dateObjectToDbDateFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'dateObjectToDbDateFunction';         // string: module
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
            
            // add dateObjectToDbDate function
            jsProject.dateObjectToDbDate = self.dateObjectToDbDate;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.dateObjectToDbDate = function( dateObject ){
        // FUNCTION: dateObjectToDbDate( json: dateObject ) string
            
            // create db date
            var dbDate = '';
            // get day
            dbDate = dateObject['year'];
            // get month
            dbDate += jsProject.pad( dateObject['month'], '0', 2 );
            // get year
            dbDate += jsProject.pad( dateObject['day'], '0', 2 );

            // done
            return dbDate;
            
        // DONE FUNCTION: dateObjectToDbDate( json: dateObject ) string
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
    // DONE MODULE: dateObjectToDbDateFunction( void ) void
})( jsProject );
// done create module function
