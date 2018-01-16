/* 
 *  Project: pleisterman 
 * 
 *  File: valuesModule.js
 * 
 *  Purpose: 
 *      creates the jsProject values
 *  
 *  Last Revision:  04-12-2016
 * 
 *  Author: Pleisterman
 *  Web: www.pleisterman.nl 
 *  Mail: info@pleisterman.nl 
 *  GitHub: Pleisterman 
 * 
*/

// create module function
( function( pleisterman ){

    // MODULE: valuesModule( void ) void
    
    pleisterman.valuesModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                            // object: self
        self.MODULE = 'valuesModule';               // string: module
        self.debugOn = false;                       // boolean: debugOn
        self.values = [                             // json[ json, json, json..]: values
        ];                                          // done json[ json, json, json..]: values
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );
            
            // add values
            self.addValues();
            
        // DONE FUNCTION: construct( void ) void
        };
        self.addValues = function() {
        // FUNCTION: addValues( void ) void

            // debug info
            self.debug( 'addValues' );
            
            // loop over values
            for( var i = 0; i < self.values.length; i++ ) {
                // add the values for the app to the project
                jsProject.addValue( self.values[i]["valueName"], self.values[i]["groupName"], self.values[i]["value"] );
            }
            // done loop over values
            
        // DONE FUNCTION: addValues( void ) void
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
    // DONE MODULE: valuesModule( pleisterman ) void
})( pleisterman );
// done create module function
