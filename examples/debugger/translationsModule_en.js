/* 
 *  Project: jsProject Examples
 * 
 *  File: translationsModule.js
 * 
 *  Purpose: 
 *      creates a json object with translations
 *      adds the application function: getTranslation to the application
 *  
 *  Last Revision:  21-03-2017
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

    // MODULE: translationsModule( pleisterman ) void
    
    pleisterman.translationsModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                            // object: self
        self.MODULE = 'translationsModule';                         // string: module
        self.debugOn = false;                                       // boolean: debugOn
        self.contentText =  '<div>';
            self.contentText += 'The debugModule is a module of jsProject.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'The debug module displays a dragable screen where debug messages can be displayed in real-time.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'After loading the modules the debugOn function can be called:<br><br>';
        self.contentText += '</div>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '<br><br>';
            self.contentText += 'jsProject.debugOn( boolean: on / off, json: options );';
            self.contentText += '<br>';
            self.contentText += '/*' + '<br>';
            self.contentText += 'json: options: { ' + '<br>';
            self.contentText += '     integer: zIndex: ' + '<br>';
            self.contentText += '     integer: top: ' + '<br>';
            self.contentText += '     integer: left: ' + '<br>';
            self.contentText += '     integer: width: ' + '<br>';
            self.contentText += '     integer: height: ' + '<br>';
            self.contentText += '}; ' + '<br>';
            self.contentText += '*/' + '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'To display a message call:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px; background-color:rgb(241,255,241);"><pre>';
            self.contentText += 'jsProject.debug( string: message );';
            self.contentText += '<br><br>';
        self.contentText += '</pre></div>';
        self.contentText += '<div style="font-size: 1.2em;padding: 10px;color:mediumseagreen;">';
            self.contentText +=  'Integration.';
        self.contentText +=  '</div>';
        self.contentText +=  '<br>';
        self.contentText += '<div style="font-size: 1.0em;padding: 4px;color:black;"> ';
            self.contentText +=  'To create a project that uses jsProject see: ';
            self.contentText +=  '<a href="/gitHub/jsProject/examples/integration/index.php?lang=en"><b>Using jsProject.</b></a>';
            self.contentText += 'The main application value ( in this case: pleisterman ) will encapsulate all application specific modules.';
            self.contentText += '<br><br>';
        self.contentText +=  '</div>';
        self.contentText +=  '<div>';
            self.contentText += 'The main application contains the options value: ';
            self.contentText += '<br>';
        self.contentText +=  '</div>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '    self.debuggerOptions = {                                // json: debuggerOptions' + '<br>';
            self.contentText += '        "zIndex"                : 8000,                     // integer: z index' + '<br>';
            self.contentText += '        "top"                   : 60,                       // integer: top' + '<br>';
            self.contentText += '        "left"                  : 740,                      // integer: left ' + '<br>';
            self.contentText += '        "width"                 : 850,                      // integer: width' + '<br>';
            self.contentText += '        "height"                : 270                       // integer: height' + '<br>';
            self.contentText += '    };                                                      // done json: debuggerOptions' + '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'In the main application construct the debugger is created: ';
            self.contentText += '<br>';
        self.contentText +=  '</div>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += 'jsProject.debugOn( self.debugOn, self.debuggerOptions );';
        self.contentText += '</pre></div>';
        self.contentText +=  '<div>';
            self.contentText += '<br>';
            self.contentText += 'Every module contains the boolean value: </div>';
        self.contentText +=  '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText +=  'self.debugOn';
        self.contentText +=  '</pre></div>';
        self.contentText += '<div style="font-size: 1.0em;padding: 4px;color:black;">';
            self.contentText += 'Every module contains the function: ';
            self.contentText += '<br>';
        self.contentText += '</div>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '        self.debug = function( message ) {' + '<br>';
            self.contentText += '        // FUNCTION: debug( string: message ) void' + '<br>';
            self.contentText += '' + '<br>';
            self.contentText += '            // debug on' + '<br>';
            self.contentText += '            if( self.debugOn ) {' + '<br>';
            self.contentText += '                // call global debug' + '<br>';
            self.contentText += '                jsProject.debug( self.MODULE + " " + message );' + '<br>';
            self.contentText += '            }' + '<br>';
            self.contentText += '            // done debug on' + '<br>';
            self.contentText += '        // DONE FUNCTION: debug( string: message ) void' + '<br>';
            self.contentText += '        };' + '<br>';
            self.contentText += '<br><br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br><br>';
        self.contentText += '<div style="font-size: 1.0em;padding: 4px;color:black;">';
            self.contentText += 'With this setup it is possible to call the self.debug function from the functions of the module. ';
            self.contentText += '<br><br>';
            self.contentText += 'By setting specific module values of debugOn to true we can debug these modules.';
            self.contentText += '<br><br>';
            self.contentText += 'Setting the debugOn value of the main application will determine if the debug window is visible and active. ';
            self.contentText += '<br><br>';
        self.contentText += '</div>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Examples.',
            'showDebugger'          :       'Show debugger',
            'hideDebugger'          :       'Hide debugger',
            'introTitle'            :       'Welcome to the jsProject examples.',
            'contentTitle'          :       'The debugModule.',
            'contentText'           :       self.contentText
        };                                                          // done json: translations
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
            
            // add get translation function
            pleisterman.getTranslation = self.get;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.get = function( translationId ) {
        // FUNCTION: get( string: translationId ) var
            
            // translation defined
            if( self.translations[translationId] !== undefined ){
                // done
                return self.translations[translationId];
            }
            // done translation defined
            
            // debug info
            self.debug( 'error translation not found: ' +  translationId );
            // done with error
            return false;
            
        // DONE FUNCTION: get( string: translationId ) var
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
    // DONE MODULE: translationsModule( pleisterman ) void
})( pleisterman );
// done create module function

