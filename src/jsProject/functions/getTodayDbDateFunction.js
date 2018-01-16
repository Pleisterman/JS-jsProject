/* 
 *  Project: jsProject
 * 
 *  File: /functions/getTodayDbDateFunction.js
 * 
 *  Purpose: 
 *      this module adds get tofday db datefunction to the
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

    // MODULE: getTodayDbDateFunction( void ) void
    
    jsProject.getTodayDbDateFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'getTodayDbDateFunction';             // string: module
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
            
            // add getTodayDbDate function
            jsProject.getTodayDbDate = self.getTodayDbDate;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.getTodayDbDate = function(){
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
            return year + month + day;
            
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
    // DONE MODULE: getTodayDbDateFunction( void ) void
})( jsProject );
// done create module function
