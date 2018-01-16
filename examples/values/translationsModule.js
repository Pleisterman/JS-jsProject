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
            self.contentText += 'Values zijn veranderbare waarden die een applicatie brede scope hebben.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'De valuesModule omkapseld en bewaart deze waarden en bevat functionaliteit voor het toevoegen, wijzigen en ';
            self.contentText += 'lezen van deze waarden, opgedeeld in groepen.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'Als je een modulaire setup kiest bij het werken met jsProject is het handig een tweede globale variablele te maken die een eigen valuesModule bevat.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'Hier kunnen de applicatie specifieke waarden worden vastgelegd: ';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += 'pleisterman.valuesModule = function( ) {' + '<br>';
            self.contentText += '        // PRIVATE:' + '<br>';
            self.contentText += '        ' + '<br>';
            self.contentText += '        // MEMBERS' + '<br>';
            self.contentText += '        var self = this;                            // object: self' + '<br>';
            self.contentText += '        self.MODULE = "valuesModule";               // string: module' + '<br>';
            self.contentText += '        self.debugOn = false;                       // boolean: debugOn' + '<br>';
            self.contentText += '        self.values = [                             // json[ json, json, json..]: values' + '<br>';
            self.contentText += '            {                                       // json: canvas' + '<br>';
            self.contentText += '                "groupName" :   "canvas",           // string: groupName' + '<br>';
            self.contentText += '                "valueName" :   "width",            // string: valueName' + '<br>';
            self.contentText += '                "value"     :   800                 // integer: value' + '<br>';
            self.contentText += '            },...                                   // done json: canvas' + '<br>';
            self.contentText += '        ];                                          // done json[ json, json, json..]: values' + '<br>';
            self.contentText += '' + '<br>';
            self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'Deze waarden worden dan toegevoegd aan jsProject in de construct functie van de valuesModule: ';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '// FUNCTIONS' + '<br>';
            self.contentText += '  self.construct = function() {' + '<br>';
            self.contentText += '  // FUNCTION: construct( void ) void' + '<br>';
            self.contentText += '     // loop over values' + '<br>';
            self.contentText += '     for( var i = 0; i < self.values.length; i++ ) {' + '<br>';
            self.contentText += '        // add the values for the app to the project' + '<br>';
            self.contentText += '        jsProject.addValue( self.values[i]["valueName"],' + '<br>';
            self.contentText += '                            self.values[i]["groupName"],' + '<br>';
            self.contentText += '                            self.values[i]["value"] ); ' + '<br>';
            self.contentText += '     }' + '<br>';
            self.contentText += '     // done loop over values' + '<br>';
            self.contentText += '     ' + '<br>';
            self.contentText += '  // DONE FUNCTION: construct( void ) void' + '<br>';
            self.contentText += '  }' + '<br>';
            self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'Deze waarden kunnen dan worden gebruikt in de modules: ';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '<br>';
            self.contentText += 'var canvasWidth = jsProject.getValue( "width", "canvas" );' + '<br>';
            self.contentText += '' + '<br>';
            self.contentText += 'jsProject.setValue( "width", "canvas", 100 );    ' + '<br>';
            self.contentText += '' + '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Voorbeelden.',
            'introTitle'            :       'Welkom bij de jsProject voorbeelden.',
            'contentTitle'          :       'De valuesModule.',
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

