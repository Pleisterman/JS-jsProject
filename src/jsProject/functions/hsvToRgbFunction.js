/* 
 *  Project: jsProject
 * 
 *  File: /functions/hsvToRgbFunction.js
 * 
 *  Purpose: 
 *      this module adds hsv json to rgb json function to the
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

    // MODULE: hsvToRgbFunction( void ) void
    
    jsProject.hsvToRgbFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'hsvToRgbFunction';                   // string: module
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
            
            // add hsvToRgb function
            jsProject.hsvToRgb = self.hsvToRgb;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.hsvToRgb = function( hsv ){
        // FUNCTION: hsvToRgb( json: hsv ) json
        
            // create values
            var hue = hsv['h'];
            var saturation = hsv['s'];
            var value = hsv['v'];
            // done create values

            // create rgb
            var rgb = {
                'r'     :   0,
                'g'     :   0,
                'b'     :   0
            };
            // done create rgb

            // calculate rgb
            var u = Math.round( 255 * ( value / 100 ) );
            if ( hue === null) {
                rgb['r'] = u;
                rgb['g'] = u;
                rgb['b'] = u;
                return rgb;
            }

            hue /= 60;
            saturation /= 100;
            var i = Math.floor( hue );
            var f = i % 2 ? hue - i : 1 - ( hue - i );
            var m = Math.round(  u * ( 1 - saturation ) );
            var n = Math.round( u * (1 - saturation * f ) );
            switch ( i ) {
                case 1  :   {
                    rgb['r'] = n;
                    rgb['g'] = u;
                    rgb['b'] = m;
                    return rgb;
                }  
                case 2  :   {
                    rgb['r'] = m;
                    rgb['g'] = u;
                    rgb['b'] = n;
                    return rgb;
                }  
                case 3  :   {
                    rgb['r'] = m;
                    rgb['g'] = n;
                    rgb['b'] = u;
                    return rgb;
                }  
                case 4  :   {
                    rgb['r'] = n;
                    rgb['g'] = m;
                    rgb['b'] = u;
                    return rgb;
                }  
                case 5  :   {
                    rgb['r'] = u;
                    rgb['g'] = m;
                    rgb['b'] = n;
                    return rgb;
                }  
                default :   {
                    rgb['r'] = u;
                    rgb['g'] = n;
                    rgb['b'] = m;
                    return rgb;
                }    
            }
            // done create rgb
            
        // DONE FUNCTION: hsvToRgb( json: hsv ) json
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
    // DONE MODULE: hsvToRgbFunction( void ) void
})( jsProject );
// done create module function
