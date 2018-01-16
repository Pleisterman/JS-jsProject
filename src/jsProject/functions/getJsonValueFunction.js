/* 
 *  Project: jsProject
 * 
 *  File: /functions/getJsonValueFunction.js
 * 
 *  Purpose: 
 *      this module adds get json value function to the
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

    // MODULE: getJsonValueFunction( void ) void
    
    jsProject.getJsonValueFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'getJsonValueFunction';               // string: module
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
            
            // add getJsonValue function
            jsProject.getJsonValue = self.getJsonValue;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.getJsonValue = function( jsonObject, indexArray ){
        // FUNCTION: getJsonValue( json: jsonObject, json: indexArray ) var
        
            // debug info
            self.debug( 'get json value' );
            
            // create depth
            var depth = 0;
            // get current object
            var currentObject = jsonObject;
            
            for( var i = 0; i < indexArray.length; i++ ){
            
                if( $.isArray( currentObject ) ){
                    self.debug( 'found array' + indexArray[depth] );
                    var indexValues = indexArray[depth].split( '=' );
                    var index = indexValues[0];
                    var value = indexValues[1];
                    // loop over jsonArray
                    $.each( currentObject, function( objectIndex, object ) {
                        if( object[index] === value ){
                            currentObject = object;
                            depth++;
                        }                        
                    }); 
                }
                else {
                    self.debug( 'found object' + indexArray[depth] );
                    currentObject = currentObject[indexArray[depth]];
                    depth++;
                }
            }
            
            // found the correct object
            if( depth === indexArray.length ){
                self.debug( 'value found: ' + currentObject );
                return currentObject;
            }
            // done found the correct object
            else {
                // not found
                console.log( 'error getJsonValue object not found ' );
                console.log( 'object' +  JSON.stringify( jsonObject ) );
                console.log( 'search array' + JSON.stringify( indexArray ) );
                
                return undefined;
            }
            
        // DONE FUNCTION: getJsonValue( json: jsonObject, json: indexArray ) var
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
    // DONE MODULE: getJsonValueFunction( void ) void
})( jsProject );
// done create module function
