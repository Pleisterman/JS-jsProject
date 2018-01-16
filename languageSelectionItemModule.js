/* 
 *  Project: jsProject Examples 
 * 
 *  File: languageSelectionItemModule.js
 * 
 *  Purpose: 
 *      creates a language selection item and hadels the events
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

    // MODULE: languageSelectionItemModule( html element id: parentId, languageOptions ) void
    
    pleisterman.languageSelectionItemModule = function( parentId, languageOptions ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                                // object: self
        self.MODULE = 'languageSelectionItemModule';                    // string: module
        self.debugOn = true;                                            // boolean: debugOn
        self.parentId = parentId;                                       // html element id: parentId 
        self.languageOptions = languageOptions;                         // json: languageOptions
        self.itemContainerOptions = {                                   // json: item container options
            'id'                            :   self.MODULE + 'item' + self.languageOptions['id'],   // string: id
            'element'                       :   'div',                  // string: html element type 
            'text'                          :   self.languageOptions['abbreviation'], // string: html element type 
            'display'                       :   'block',                // css display
            'padding'                       :   '8px',                  // css padding
            'margin'                        :   '4px',                  // css margin right
            'cursor'                        :   'pointer',              // css cursor
            'backgroundColor'               :   'white',                // css color: backgroundColor
            'backgroundHighlightColor'      :   'mediumseagreen',       // css color: backgroundHihlightColor
            'color'                         :   'black',                // css color: color
            'highlightColor'                :   'white',                // css color: color
            'border'                        :   true,                   // boolean: has border
            'borderRadius'                  :   '5px',                  // css border radius
            'borderColor'                   :   'mediumseagreen',       // css color: border color
            'borderHighlightColor'          :   'seagreen',             // css color: border color
            'borderWidth'                   :   '1px',                  // css border width
            'borderStyle'                   :   'solid'                 // css border style
        };                                                              // done json: item container options
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );

            // add html
            self.addHtml();

        // DONE FUNCTION: construct( void ) void
        };
        self.addHtml = function() {
        // FUNCTION: addHtml( void ) void
       
            // add container to parent    
            $( '#' + self.parentId ).append( jsProject.jsonToElementHtml( self.itemContainerOptions ) );
            // add mouseIn event    
            $( '#' + self.itemContainerOptions['id'] ).mouseenter( function( ){ self.itemMouseIn( ); });
            // add mouseOut event    
            $( '#' + self.itemContainerOptions['id'] ).mouseleave( function( ){ self.itemMouseOut( ); });
            // add click event    
            $( '#' + self.itemContainerOptions['id'] ).click( function( ){ self.itemClick( ); });
            
        // DONE FUNCTION: addHtml( void ) void
        };
        self.itemMouseIn = function(  ){
        // FUNCTION: itemMouseIn( void ) void

            // debug info
            self.debug( 'itemMouseIn ' );
            // set container background color highlight
            $( '#' + self.itemContainerOptions['id'] ).css( 'background-color', self.itemContainerOptions['backgroundHighlightColor'] );
            // set container border color highlight
            $( '#' + self.itemContainerOptions['id'] ).css( 'border-color', self.itemContainerOptions['borderHighlightColor'] );
            // set text color highlight
            $( '#' + self.itemContainerOptions['id'] ).css( 'color', self.itemContainerOptions['highlightColor'] );


        // DONE FUNCTION: itemMouseIn( void ) void
        };
        self.itemMouseOut = function( ){
        // FUNCTION: itemMouseOut( void ) void

            // debug info
            self.debug( 'itemMouseOut ' );

            // set container background color default
            $( '#' + self.itemContainerOptions['id'] ).css( 'background-color', self.itemContainerOptions['backgroundColor'] );
            // set container border color default
            $( '#' + self.itemContainerOptions['id'] ).css( 'border-color', self.itemContainerOptions['borderColor'] );
            // set text color default
            $( '#' + self.itemContainerOptions['id'] ).css( 'color', self.itemContainerOptions['color'] );

        // DONE FUNCTION: itemMouseOut( void ) void
        };
        self.itemClick = function( ){
        // FUNCTION: itemClick( void ) void
        
            var url = "./index.php";
            
            // language url ! empty
            if( self.languageOptions['urlLanguage'] !== '' ){
                // add language to url
                url += '?lang=' + self.languageOptions['urlLanguage'];
            }    
            // done language url ! empty
            
            // open url
            window.open( url, '_self' );

        // DONE FUNCTION: itemClick( void ) void
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
    // DONE MODULE: languageSelectionItemModule( html element id: parentId ) void
})( pleisterman );
// done create module function
