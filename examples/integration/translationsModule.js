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
            self.contentText += 'Eerst wordt jsProject toegevoegd in de html:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '<br><br>';
            self.contentText += '&lt;script type="text/javascript" src="jsProject-min.js"&gt;&lt;/script&gt;' + '<br>';
            self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'Voeg een onLoad event toe:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '&lt;script&gt;' + '<br>';
            self.contentText += '// add onload event ' + '<br>';
            self.contentText += 'window.onload = function(){' + '<br>';
            self.contentText += '  // create the jsProject module' + '<br>';
            self.contentText += '  jsProject.construct();' + '<br>';
            self.contentText += '};' + '<br>';
            self.contentText += '// done add onload event ' + '<br>';
            self.contentText += '&lt;/script&gt;' + '<br>';
            self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText +=  '<div>';
        self.contentText += '<br>';
        self.contentText += 'Bij een modulaire setup is het handig om een tweede globale variabele naast jsProject te maken.';
        self.contentText += '<br>';
        self.contentText += 'Dit is bijvoorbeeld handig als je de values voor je applicatie maakt. De tweede variabele kan ';
        self.contentText += 'ook een valuesModule bevatten, deze voegt de applicatie waarden toe aan de jsProject valuesModule, en zo botsen de namen van de modules niet.';
        self.contentText += '<br><br>';
        self.contentText += 'Ik noem deze module pleisterman. Maar je kunt zelf een geschikte naam verzinnen.';
        self.contentText += '<br>';
        self.contentText += 'De pleisterman module omkapseld dan de specifieke applicatie modules. Voor een voorbeeld zie de code van deze module: ';
        self.contentText += '<br><br>';
        self.contentText += '<a href="./main.js" target="_blank" >main.js</a>';
        self.contentText += '<br>';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += 'Voor meer informatie zie de andere voorbeelden. De code for deze pagina gebruikt ook jsProject.';
        self.contentText += '<br>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Voorbeelden.',
            'introTitle'            :       'Welkom bij de jsProject voorbeelden.',
            'contentTitle'          :       'Het gebruik van jsProject.',
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

