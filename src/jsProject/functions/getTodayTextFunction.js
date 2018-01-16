/* 
 *  Project: jsProject
 * 
 *  File: /functions/getTodayTextFunction.js
 * 
 *  Purpose: 
 *      this module adds get today text function to the
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

    // MODULE: getTodayTextFunction( void ) void
    
    jsProject.getTodayTextFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'getTodayTextFunction';               // string: module
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
            
            // add getTodayText function
            jsProject.getTodayText = self.getTodayText;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.getTodayText = function(){
        // FUNCTION: getTodayDbDate( void ) string
        
            // create today date
            var date = new Date();
            // get year
            var year = date.getFullYear().toString();
            // get month
            var month = jsProject.pad( date.getMonth() + 1, '0', 2 );
            // get day
            var day = jsProject.pad( date.getDate(), '0', 2 );
            
            // done
            return day + '-' + month + '-' + year;
            
        // DONE FUNCTION: getTodayDbDate( void ) string
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
    // DONE MODULE: getTodayTextFunction( void ) void
})( jsProject );
// done create module function
