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
        self.contentText += 'De jsProject HTML-Generator genereert HTML met inline css, de layoutModule regelt de responsive layout van de pagina.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
        self.contentText += 'De layoutModule is geen onderdeel van jsProject maar is een extensie module die goed samenwerkt met jsProject.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
        self.contentText += 'Omdat ik deze module meestal gebruik voor de responsive layout zal ik deze module hier ook behandelen.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
        self.contentText += 'Mijn layoutModule regelt ook de document css settings in de construct functie,';
        self.contentText += ' ik definieer daarbij de document css in de settingsModule:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
        self.contentText += '<br>';
        self.contentText += '"documentCssOptions" :   {' + '<br>';
        self.contentText += ' "body"              :   {' + '<br>';
        self.contentText += ' "margin"            :   " 0 auto",' + '<br>';
        self.contentText += ' ... ' + '<br>';
        self.contentText += '}' + '<br>';
        self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText += '<div>';
        self.contentText += 'De layoutModule vangt de window.resize functie af en roept de jsProject.layoutChange event op.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div>';
        self.contentText += 'Dit event wordt in volgorde van inschrijving afgehandeld. De inschrijvende modules kunnen dan zelf hun layout aanpassen.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Voorbeelden.',
            'introTitle'            :       'Welkom bij de jsProject voorbeelden.',
            'contentTitle'          :       'De layoutModule.',
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
            
            // add get translations function
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

