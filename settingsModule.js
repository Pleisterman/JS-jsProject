/* 
 *  Project: jsProject Examples
 * 
 *  File: settingsModule.js
 * 
 *  Purpose: 
 *      creates a json object with settings
 *      adds the applicatioin function: getSetting to the application
 *  
 *  Last Revision:  22-03-2017
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
( function( pleisterman ){

    // MODULE: settingsModule( pleisterman ) void
    
    pleisterman.settingsModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                            // object: self
        self.MODULE = 'settingsModule';                             // string: module
        self.debugOn = false;                                       // boolean: debugOn
        self.settings = {                                           // json: settings
            "keyCodes"                  :   {                       // json: key codes
                    'tab'               :   9,                      // string: key code
                    'space'             :   32,                     // string: key code
                    'enter'             :   13,                     // string: key code
                    'escape'            :   27,                     // string: key code
                    'arrowUp'           :   38,                     // string: key code
                    'arrowDown'         :   40,                     // string: key code
                    'arrowLeft'         :   37,                     // string: key code
                    'arrowRight'        :   39                      // string: key code
            },                                                      // done json: key codes
            
            "imageUrl"                  :   './images/',            // string: imageUrl
            
            "jsProjectHomeDir"          :   'index.php',            // string: jsProject home dir

            "documentCssOptions"        :   {                       // json: document css options
                'body'                      :   {
                    'margin'                :   '0 auto',           // css size: margin          
                    'line-height'           :   '1.6em',            // css size: font size   
                    'font-size'             :   '1.1em',            // css size: font size   
                    'font-family'           :   'Raleway',           // css font family: font family   
                    'color'                 :   'black',            // css color: font color   
                    'background-color'      :   'white'             // css color: background color
                },
                'a'                         :   {
                    'text-decoration'       :   'none',             // css color: background color
                    'color'                 :   'seagreen'          // css color: background color
                },
                'a:link'                    :   {
                    'text-decoration'       :   'none',             // css color: background color
                    'color'                 :   'seagreen'          // css color: background color
                },
                'a:visited'                 :   {
                    'color'                 :   'seagreen'          // css color: background color
                },
                'a:active'                  :   {
                    'color'                 :   'seagreen'          // css color: background color
                },
                'a:hover'                   :   {
                    'color'                 :   'mediumseagreen'    // css color: background color
                }
            },                                                      // done json: document css options
            'ids'                       :   {                       // json: layout
                'layoutId'              :   'layout',               // string id: layout
            },                                                      // done json: layout
            'zIndex'                    :   {                       // json: zIndex
                'layout'                :   21,                     // css z-index: layout                
                'header'                :   26,                     // css z-index: header                
                'content'               :   22,                     // css z-index: content                 
                'overlay'               :   40,                     // css z-index: overlay                
            },                                                      // done json: zIndex
            'colors'                    :   {                       // json: colors
                'commonBackgroundColor' :   'white',                // css color: commonBackgroundColor
                'headerBackgroundColor' :   'transparent',          // css color: headerBackgroundColor
            },                                                      // done json: colors                
            'languages'                 :   [                       // json: languages
                {
                    'id'                :   'nl',
                    'abbreviation'      :   'nl',
                    'urlLanguage'       :   ''
                },
                {
                    'id'                :   'en',
                    'abbreviation'      :   'en',
                    'urlLanguage'       :   'en'
                }         
            ]                                                       // done json: languages                
        };                                                          // done json: settings
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );
            
            // add the extensions to pleisterman
            self.addApplicationsExtensions();

        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function(){
        // FUNCTION: addApplicationsExtensions( void ) void
            
            // add get setting function
            pleisterman.getSetting = self.get;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.get = function( setting ) {
        // FUNCTION: get( string: setting ) var
            
            // setting is defined
            if( self.settings[setting] !== undefined ){
                // done
                return self.settings[setting];
            }
            // done setting is defined
            
            // debug info
            self.debug( 'error setting not found: ' +  setting );
            // done with error
            return false;
            
        // DONE FUNCTION: get( string: setting ) var
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
    // DONE MODULE: settingsModule( pleisterman ) void
})( pleisterman );
// done create module function

