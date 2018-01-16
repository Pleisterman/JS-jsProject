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
            self.contentText += 'Load the module in the html File:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '<br><br>';
            self.contentText += '&lt;script type="text/javascript" src="jsProject-min.js"&gt;&lt;/script&gt;' + '<br>';
            self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'Add the onLoad event:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '<br><br>';
            self.contentText += '        &lt;script&gt;' + '<br>';
            self.contentText += '            // add onload event ' + '<br>';
            self.contentText += '            window.onload = function(){' + '<br>';
            self.contentText += '                 // create the jsProject module' + '<br>';
            self.contentText += '                 jsProject.construct();' + '<br>';
            self.contentText += '            };' + '<br>';
            self.contentText += '            // done add onload event ' + '<br>';
            self.contentText += '        &lt;/script&gt;' + '<br>';
            self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText +=  '<div>';
        self.contentText += '<br>';
        self.contentText += 'If you want to use a modulair setup when using jsProject I advice you to use a second global variable.';
        self.contentText += '<br>';
        self.contentText += 'This is for example usefull when creating the values for your application. The second variable can ';
        self.contentText += 'also contain a valuesModule, it adds the application values to the jsProject valuesModule, but the names will not collide.';
        self.contentText += '<br><br>';
        self.contentText += 'In my case I call this module pleisterman. But you can give it your own name.';
        self.contentText += '<br>';
        self.contentText += 'The pleisterman module encapsulates the specific application modules. For an example see the code for this page: ';
        self.contentText += '<br><br>';
        self.contentText += '<a href="./main.js" target="_blank" >main.js</a>';
        self.contentText += '<br>';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += 'For more information see the other examples. The code for this page also uses jsProject.';
        self.contentText += '<br>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Examples.',
            'introTitle'            :       'Welcome to the jsProject examples.',
            'contentTitle'          :       'Using jsProject.',
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

