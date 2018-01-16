/* 
 *  Project: jsProject Examples 
 * 
 *  File: contentModule.js
 * 
 *  Purpose: 
 *      creates the content
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

    // MODULE: contentModule( void ) void
    
    pleisterman.contentModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                                // object: self
        self.MODULE = 'contentModule';                                  // string: module
        self.debugOn = true;                                            // boolean: debugOn
        self.contentContainerOptions = {                                // json: contentContainerOptions
            'id'                            :   self.MODULE + 'ContentContainer', // string: id
            'element'                       :   'div',                  // string: html element type 
            'text'                          :   '',                     // string: text
            'margin'                        :   '0 auto',               // css margin
            'marginTop'                     :   162,                    // css margin top
            'minimumWidth'                  :   '1020px',               // css style width
            'maximumWidth'                  :   1200,                   // css maximum width
            'backgroundColor'               :   'transparent',          // css background color
            'zIndex'                        :   pleisterman.getSetting( 'zIndex' )['content'].toString() // integer: z index
        };                                                              // done json:contentContainerOptions
        self.contentTitleOptions = {                                    // json: contentTitleOptions
            'id'                            :   self.MODULE + 'contentTitle', // string: id
            'element'                       :   'div',                  // string: html element type 
            'maximumWidth'                  :   '820px',                // css maximum width
            'margin'                        :   '0 auto',               // css margin right
            'marginTop'                     :   '28px',                 // css padding top
            'textAlign'                     :   'left',                 // css text align
            'fontSize'                      :   '1.2em',                // css font size
            'fontWeight'                    :   'bold',                 // css font size
            'color'                         :   'mediumseagreen',       // css color: color
        };                                                              // done json: contentTitleOptions
        self.contentTextOptions = {                                     // json: contentTextOptions
            'id'                            :   self.MODULE + 'contentText', // string: id
            'element'                       :   'div',                  // string: html element type 
            'display'                       :   'block',                // css display
            'maximumWidth'                  :   '820px',                // css maximum width
            'margin'                        :   '0 auto',               // css margin right
            'marginTop'                     :   '28px',                 // css padding top
            'marginBottom'                   :   '28px',                // css padding top
            'textAlign'                     :   'left',                 // css text align
            'fontSize'                      :   '1.1em',                // css font size
            'color'                         :   'black',                // css color: color
        };                                                              // done json: contentTextOptions
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
            
            // add the menu to parent
            $( '#' + pleisterman.getSetting( 'ids' )['layoutId'] ).append( jsProject.jsonToElementHtml( self.contentContainerOptions ) );
        
            // set title text
            self.contentTitleOptions['text'] = pleisterman.getTranslation( 'contentTitle' );
            // add title to container    
            $( '#' + self.contentContainerOptions['id'] ).append( jsProject.jsonToElementHtml( self.contentTitleOptions ) );
            // set text
            self.contentTextOptions['text'] = pleisterman.getTranslation( 'contentText' );
            // add text to container    
            $( '#' + self.contentContainerOptions['id'] ).append( jsProject.jsonToElementHtml( self.contentTextOptions ) );

        // DONE FUNCTION: addHtml( void ) void
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
    // DONE MODULE: contentModule( void ) void
})( pleisterman );
// done create module function
