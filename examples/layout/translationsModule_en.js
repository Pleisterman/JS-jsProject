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
        self.contentText += 'The jsProject HTML-Generator creates HTML with inline css, the layoutModule will handle the responsive layout of the page.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
        self.contentText += 'The layoutModule is not contained in jsProject but is an extension module that will work with jsProject.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
        self.contentText += 'Because I use this module to handle responsive layout in my projects I will explan it here.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
        self.contentText += 'The Layout module handles document css settings in the construct function, I define the document settings in the settingsModule:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
        self.contentText += '<br>';
        self.contentText += '"documentCssOptions"        :   {' + '<br>';
        self.contentText += ' "body"                      :   {' + '<br>';
        self.contentText += ' "margin"                :   " 0 auto",...' + '<br>';
        self.contentText += ' }' + '<br>';
        self.contentText += '}' + '<br>';
        self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
        self.contentText += 'The layoutModule will overwrite window.resize function and call the jsProject.layoutChange event.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
        self.contentText += 'This event will be handled in order of subscription. And the subscibers can handle their layout change.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Examples.',
            'introTitle'            :       'Welcome to the jsProject examples.',
            'contentTitle'          :       'The layoutModule.',
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

