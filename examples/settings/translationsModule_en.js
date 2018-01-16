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
            self.contentText += 'Settings in the settingsModule are global immutable values.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'The settings module encapsulates these values.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'The settingsModule is not contained in jsProject but is an extension module that will work with jsProject.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'The settings module is specific to your project so it is not included in jsProject. Because I use it in all my projects I will descibe how to create and use it.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div style="color:mediumseagreen; font-size:1.1em;">';
            self.contentText += 'SettingsModule has member settings: ';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '<br>';
            self.contentText += '// create member settings: ' + '<br>';
            self.contentText += 'self.settings = {' + '<br>';
            self.contentText += ' "keyCodes" :   {' + '<br>';
            self.contentText += '     "tab"      :   9,' + '<br>';
            self.contentText += '     "space"    :   32,' + '<br>';
            self.contentText += '     "enter"    :   13,' + '<br>';
            self.contentText += '     ...' + '<br>';
            self.contentText += ' },' + '<br>';
            self.contentText += ' "imageUrl"  :   "./images/"' + '<br>';
            self.contentText += '}' + '<br>';
            self.contentText += '' + '<br>';
            self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div style="color:mediumseagreen; font-size:1.1em;">';
            self.contentText += 'Create the acces funtion: ';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '<br>';
            self.contentText += 'self.get = function( setting ) {' + '<br>';
            self.contentText += '// FUNCTION: get( string: setting ) var' + '<br>';
            self.contentText += '' + '<br>';
            self.contentText += ' // setting is defined' + '<br>';
            self.contentText += ' if( self.settings[setting] !== undefined ){' + '<br>';
            self.contentText += '     // done' + '<br>';
            self.contentText += '     return self.settings[setting];' + '<br>';
            self.contentText += ' }' + '<br>';
            self.contentText += ' // done setting is defined' + '<br>';
            self.contentText += '' + '<br>';
            self.contentText += ' // debug info' + '<br>';
            self.contentText += ' self.debug( "error setting not found: " +  setting );' + '<br>';
            self.contentText += ' // done with error' + '<br>';
            self.contentText += ' return undefined;' + '<br>';
            self.contentText += '}' + '<br>';
            self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div style="color:mediumseagreen; font-size:1.1em;">';
            self.contentText += 'Add the getSetting function to your project:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '<br>';
            self.contentText += '// add get setting function' + '<br>';
            self.contentText += 'pleisterman.getSetting = self.get;' + '<br>';
            self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Examples.',
            'introTitle'            :       'Welcome to the jsProject examples.',
            'contentTitle'          :       'The settingsModule.',
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

