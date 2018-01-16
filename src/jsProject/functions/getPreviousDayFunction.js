/* 
 *  Project: jsProject
 * 
 *  File: /functions/getPreviousDayFunction.js
 * 
 *  Purpose: 
 *      this module adds get previous day function to the
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

    // MODULE: getPreviousDayFunction( void ) void
    
    jsProject.getPreviousDayFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'getPreviousDayFunction';             // string: module
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
            
            // add getPreviousDay function
            jsProject.getPreviousDay = self.getPreviousDay;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.getPreviousDay = function( dateObject ){
        // FUNCTION: getPreviousDay( json: dateObject ) json
        
            // create new date
            var date = new Date( dateObject['year'], parseInt( dateObject['month'] ) - 1, dateObject['day'] );
            // set hours
            date.setHours(0, 0, 0, 0);
            // get date - 1 day
            date.setDate( date.getDate() - 1 ); 
            // set date object year
            dateObject['year'] = date.getFullYear().toString();
            // set date object month
            dateObject['month'] = date.getMonth() + 1;
            // set date object day
            dateObject['day'] = date.getDate();
            
            // done
            return dateObject;
            
        // DONE FUNCTION: getPreviousDay( json: dateObject ) json
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
    // DONE MODULE: getPreviousDayFunction( void ) void
})( jsProject );
// done create module function
