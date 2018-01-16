 /* 
 *  Project: jsProject
 * 
 *  File: /functions/checkEmailSyntaxFunction.js
 * 
 *  Purpose: 
 *      this module adds the check email syntax function to the
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

    // MODULE: checkEmailSyntaxFunction( void ) void
    
    jsProject.checkEmailSyntaxFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'checkEmailSyntaxFunction';           // string: module
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
            
            // add checkEmailSyntax function
            jsProject.checkEmailSyntax = self.checkEmailSyntax;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.checkEmailSyntax = function( emailAdress ) {
        // FUNCTION: checkEmailSyntax( string: emailAdress ) boolean
            
            // create regular expression
            var regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,64})$/;
            // done
            return regEx.test( emailAdress );
            
        // DONE FUNCTION: checkEmailSyntax( string: emailAdress ) boolean
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
    // DONE MODULE: checkEmailSyntaxFunction( void ) void
})( jsProject );
// done create module function
