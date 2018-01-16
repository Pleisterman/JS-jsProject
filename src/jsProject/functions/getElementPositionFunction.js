/* 
 *  Project: jsProject
 * 
 *  File: /functions/getElementPositionFunction.js
 * 
 *  Purpose: 
 *      this module adds get element position function to the
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

    // MODULE: getElementPositionFunction( void ) void
    
    jsProject.getElementPositionFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'getElementPositionFunction';         // string: module
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
            
            // add getElementPosition function
            jsProject.getElementPosition = self.getElementPosition;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.getElementPosition = function( elementId ){
        // FUNCTION: getElementPosition( string: elementId ) json
            

            // create position
            var position = {
                'top'     :   0,
                'left'     :   0
            };        
            // done create position
            
            // get first element
            var element = document.getElementById( elementId ); 

            // loop over element.offsetParent
            while ( element ) {
                // add top and offset
                position['top'] += ( element.offsetTop + element.clientTop );
                // add left and offset
                position['left'] += ( element.offsetLeft + element.clientLeft );

                // get offset parent
                element = element.offsetParent;
            }
            // done loop over element.offsetParent

            // get first element        
            element = document.getElementById( elementId ); 
            // loop over element.parent
            while ( element ) {
                if ( element.tagName !== "BODY" ) {
                    // add scroll top
                    position['top'] -=  element.scrollTop || 0;
                    // add scroll left
                    position['left'] -=  element.scrollLeft || 0;
                }
                element = element.parentNode;
            }
            // done loop over element.parent
            
            // done 
            return position;
            
        // DONE FUNCTION: getElementPosition( string: elementId ) json
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
    // DONE MODULE: getElementPositionFunction( void ) void
})( jsProject );
// done create module function
