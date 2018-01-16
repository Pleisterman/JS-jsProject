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
            self.contentText += 'The jsonToElementHtmlModule provides a generator that creates html with inline style definitions from Json structures.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'The Json structures are easier to read, adapt and reuse then plain HTML.';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'First define the Json:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += '// json container options' + '<br>';
            self.contentText += 'self.containerOptions = {' + '<br>';
            self.contentText += '     "id"                 :   self.MODULE + "Container",' + '<br>';
            self.contentText += '     "element"            :   "div",' + '<br>';
            self.contentText += '     "display"            :   "block",' + '<br>';
            self.contentText += '     "backgroundColor"    :   "white"' + '<br>';
            self.contentText += '};' + '<br>';
            self.contentText += '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'Then create the HTML:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
            self.contentText += 'var html = jsProject.jsonToElementHtml( self.containerOptions );' + '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'This creates the string:';
        self.contentText += '<div style="padding: 10px;background-color:rgb(241,255,241);"><pre>';
        self.contentText += '<br>';
            self.contentText += '&lt;div id="pleistermanContainer" style="display : block;background-color : white;"&gt;&lt;/div&gt;' + '<br>';
        self.contentText += '</pre></div>';
        self.contentText += '<br>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'All the elements currently available:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'a' + '<br>';
            self.contentText += 'div' + '<br>';
            self.contentText += 'form' + '<br>';
            self.contentText += 'svg' + '<br>';
            self.contentText += 'iframe' + '<br>';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'All the element properties currently available:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'id' + '<br>';
            self.contentText += 'name' + '<br>';
            self.contentText += 'type' + '<br>';
            self.contentText += 'value' + '<br>';
            self.contentText += 'src' + '<br>';
            self.contentText += 'action' + '<br>';
            self.contentText += 'method' + '<br>';
            self.contentText += 'href' + '<br>';
            self.contentText += 'target' + '<br>';
            self.contentText += 'title' + '<br>';
            self.contentText += 'size' + '<br>';
            self.contentText += 'width' + '<br>';
            self.contentText += 'height' + '<br>';
            self.contentText += 'maxlength' + '<br>';
            self.contentText += 'rowspan' + '<br>';
            self.contentText += 'colspan' + '<br>';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'All the styles currently available:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'zIndex' + '<br>';
            self.contentText += 'position' + '<br>';
            self.contentText += 'float' + '<br>';
            self.contentText += 'clear' + '<br>';
            self.contentText += 'top' + '<br>';
            self.contentText += 'left' + '<br>';
            self.contentText += 'display' + '<br>';
            self.contentText += 'overflow' + '<br>';
            self.contentText += 'overflowX' + '<br>';
            self.contentText += 'overflowY' + '<br>';
            self.contentText += 'cursor' + '<br>';
            self.contentText += 'background' + '<br>';
            self.contentText += 'backgroundColor' + '<br>';
            self.contentText += 'backgroundRepeat' + '<br>';
            self.contentText += 'backgroundPosition' + '<br>';
            self.contentText += 'backgroundSize' + '<br>';
            self.contentText += 'color' + '<br>';
            self.contentText += 'minimumWidth' + '<br>';
            self.contentText += 'maximumWidth' + '<br>';
            self.contentText += 'minimumHeight' + '<br>';
            self.contentText += 'maximumHeight' + '<br>';
            self.contentText += 'styleWidth' + '<br>';
            self.contentText += 'styleHeight' + '<br>';
            self.contentText += 'fontFamily' + '<br>';
            self.contentText += 'fontSize' + '<br>';
            self.contentText += 'lineHeight' + '<br>';
            self.contentText += 'letterSpacing' + '<br>';
            self.contentText += 'fontWeight' + '<br>';
            self.contentText += 'textAlign' + '<br>';
            self.contentText += 'verticalAlign' + '<br>';
            self.contentText += 'margin' + '<br>';
            self.contentText += 'marginTop' + '<br>';
            self.contentText += 'marginLeft' + '<br>';
            self.contentText += 'marginRight' + '<br>';
            self.contentText += 'marginBottom' + '<br>';
            self.contentText += 'padding' + '<br>';
            self.contentText += 'paddingTop' + '<br>';
            self.contentText += 'paddingLeft' + '<br>';
            self.contentText += 'paddingRight' + '<br>';
            self.contentText += 'paddingBottom' + '<br>';
            self.contentText += 'imageUrl' + '<br>';
            self.contentText += 'transformOrigin' + '<br>';
            self.contentText += 'boxShadow' + '<br>';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'And the border styles currently available:';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.contentText +=  '<div>';
            self.contentText += 'border' + '<br>';
            self.contentText += 'borderTop' + '<br>';
            self.contentText += 'borderLeft' + '<br>';
            self.contentText += 'borderRight' + '<br>';
            self.contentText += 'borderBottom' + '<br>';
            self.contentText += 'borderRadius' + '<br>';
            self.contentText += 'borderWidth' + '<br>';
            self.contentText += 'borderColor' + '<br>';
            self.contentText += 'borderStyle' + '<br>';
        self.contentText += '</div>';
        self.contentText += '<br>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Examples.',
            'introTitle'            :       'Welcome to the jsProject examples.',
            'contentTitle'          :       'The HTML-Generator.',
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

