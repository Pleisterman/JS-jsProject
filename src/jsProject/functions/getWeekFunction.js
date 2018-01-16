/* 
 *  Project: jsProject
 * 
 *  File: /functions/getWeekFunction.js
 * 
 *  Purpose: 
 *      this module adds get week function to the
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

    // MODULE: getWeekFunction( void ) void
    
    jsProject.getWeekFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'getWeekFunction';                    // string: module
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
            
            // add getWeek function
            jsProject.getWeek = self.getWeek;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.getWeek = function( dateObject ){
        // FUNCTION: getWeek( json: dateObject ) integer
        
            // calculate week number from date
            var date = new Date( dateObject['year'], dateObject['month'], dateObject['day'] );
            date.setHours(0, 0, 0, 0);
            date.setDate( date.getDate() + 3 - ( date.getDay() + 6 ) % 7 );
            var week = new Date( date.getFullYear(), 0, 4);
            return 1 + Math.round( ( ( date.getTime() - week.getTime()) / 86400000 - 3 + ( week.getDay() + 6 ) % 7 ) / 7 );
            // done calculate week number from date
            
        // DONE FUNCTION: getWeek( json: dateObject ) integer
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
    // DONE MODULE: getWeekFunction( void ) void
})( jsProject );
// done create module function
