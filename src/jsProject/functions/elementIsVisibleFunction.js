/* 
 *  Project: jsProject
 * 
 *  File: /functions/elementIsVisibleFunction.js
 * 
 *  Purpose: 
 *      this module adds element is visible function to the
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

    // MODULE: elementIsVisibleFunction( void ) void
    
    jsProject.elementIsVisibleFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'elementIsVisibleFunction';           // string: module
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
            
            // add elementIsVisible function
            jsProject.elementIsVisible = self.elementIsVisible;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.elementIsVisible = function( elementId, parentId ) {
        // FUNCTION: elementIsVisible( string: elementId, string: parent elementId ) boolean
            
            // get element top
            var elementTop = $( '#' + elementId ).offset().top;
            // get parent top
            var parentTop = $( '#' + parentId ).offset().top;
            // get parent height
            var screenHeight = $( '#' + parentId ).height();
            
            // debug info
            self.debug( 'elementTop: ' + elementTop );
            self.debug( 'parentTop: ' + parentTop );
            self.debug( 'screenHeight: ' + screenHeight );
            // done debug info
            
            if( elementTop > screenHeight ){
                // debug info
                self.debug( 'item not visible' );
                // done elenent not visible
                return false;
            }
            if( elementTop < parentTop ){ 
                // debug info
                self.debug( 'item not visible' );
                // done elenent not visible
                return false;
            }
            
            // debug info
            self.debug( 'item visible' );
            
            // done element visible
            return true;
            
        // DONE FUNCTION: elementIsVisible( string: elementId, string: parent elementId ) boolean
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
    // DONE MODULE: elementIsVisibleFunction( void ) void
})( jsProject );
// done create module function
