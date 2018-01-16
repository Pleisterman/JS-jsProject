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
            self.contentText += 'The ajaxModule provides 2 post functions, the post and the securePost function.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div>';
            self.contentText += 'Both functions will handle calls in a multi-processing asynchronious procedure.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'So remember that callbacks are also handled in an asynchronious manner.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'To call the post first create a json data structure:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
        self.contentText += '<br>';
        self.contentText += '     // create ajax data' + '<br>';
        self.contentText += '     var data = { ' + '<br>';
        self.contentText += '         "messageId"         :   messageId,' + '<br>';
        self.contentText += '         "type"              :   "message",' + '<br>';
        self.contentText += '     };' + '<br>';
        self.contentText += '     // done create ajax data' + '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'Then call the post function:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
        self.contentText += '<br>';
        self.contentText += '' + '<br>';
        self.contentText += '       // ajax' + '<br>';
        self.contentText += '       jsProject.post( "/getString",' + '<br>';
        self.contentText += '                       data,' + '<br>';
        self.contentText += '                       self.getStringCallback );' + '<br>';
        self.contentText += '' + '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'The third parameter is the callback function.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'The securePost function is tokenized: ';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
        self.contentText += '<br>';
        self.contentText += '' + '<br>';
        self.contentText += '      // ajax' + '<br>';
        self.contentText += '      jsProject.post( "/getString",' + '<br>';
        self.contentText += '                      token,' + '<br>';
        self.contentText += '                      data,' + '<br>';
        self.contentText += '                      self.getStringCallback );' + '<br>';
        self.contentText += '' + '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'The ajaxModule also contains a secure download function. To call this function first create a Json data structure: ';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
        self.contentText += '<br>';
        self.contentText += '      // create download data' + '<br>';
        self.contentText += '      var data = { ' + '<br>';
        self.contentText += '          "dcumentId"         :   documentId,' + '<br>';
        self.contentText += '      };' + '<br>';
        self.contentText += '      // done create download data' + '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'Then call the download function:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
        self.contentText += '<br>';
        self.contentText += '' + '<br>';
        self.contentText += '     // ajax' + '<br>';
        self.contentText += '     jsProject.secureDownload( "/download",' + '<br>';
        self.contentText += '                               token,' + '<br>';
        self.contentText += '                               data,' + '<br>';
        self.contentText += '' + '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Examples.',
            'introTitle'            :       'Welcome to the jsProject examples.',
            'contentTitle'          :       'The ajaxModule.',
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

