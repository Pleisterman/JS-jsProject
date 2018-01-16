/* 
 *  Project: jsProject
 * 
 *  File: /functions/rgbToHsvFunction.js
 * 
 *  Purpose: 
 *      this module adds rgb json object to hsv json function to the
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

    // MODULE: rgbToHsvFunction( void ) void
    
    jsProject.rgbToHsvFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'rgbToHsvFunction';                   // string: module
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
            
            // add rgbToHsv function
            jsProject.rgbToHsv = self.rgbToHsv;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.rgbToHsv = function( rgbToConvert ){
        // FUNCTION: rgbToHsv( json: rgbToConvert ) json
        
            // r: 0-255
            // g: 0-255
            // b: 0-255
            //
            // returns: [ 0-360, 0-100, 0-100 ]
            //
            
            // create hsv
            var hsv = {
                'h'     : 0,
                's'     : 0,
                'v'     : 0
            };
            // create hsv

            // copy rgbConvert
            var rgb = JSON.parse( JSON.stringify( rgbToConvert ) );
            
            rgb['r'] /= 255;
            rgb['g'] /= 255;
            rgb['b'] /= 255;
            
            // calculate hsv
            var n = Math.min( Math.min( rgb['r'], rgb['g'] ), rgb['b'] );
            var v = Math.max( Math.max( rgb['r'], rgb['g'] ), rgb['b'] );
            var m = v - n;
            if ( m === 0 ) { 
                hsv['h'] = null;
                hsv['s'] = 0;
                hsv['v'] = 100 * v;
                return hsv;
            }
            var h = rgb['r'] === n ? 3 + ( rgb['b'] - rgb['g'] ) / m : ( rgb['g'] === n ? 5 + ( rgb['r'] - rgb['b'] ) / m : 1 + ( rgb['g'] - rgb['r'] ) / m );
            hsv['h'] = 60 * ( h === 6 ? 0 : h );
            hsv['s'] = 100 * ( m / v );
            hsv['v'] = 100 * v;
            // done calculate hsv
            
            return hsv;
            
        // DONE FUNCTION: rgbToHsv( json: rgbToConvert ) json
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
    // DONE MODULE: rgbToHsvFunction( void ) void
})( jsProject );
// done create module function
