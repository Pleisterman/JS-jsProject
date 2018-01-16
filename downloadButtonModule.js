/* 
 *  Project: jsProject Examples  
 * 
 *  File: downloadButtonModule.js
 * 
 *  Purpose: 
 *      creates the download button
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

    // MODULE: downloadButtonModule( html element id: parentId ) void
    
    pleisterman.downloadButtonModule = function( parentId ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                                // object: self
        self.MODULE = 'downloadButtonModule';                           // string: module
        self.debugOn = true;                                            // boolean: debugOn
        self.parentId = parentId;                                       // html element id: parentId 
        self.buttonOptions = {                                          // json: buttonOptions
            'id'                            :   self.parentId + 'downloadButton', // string: id
            'element'                       :   'a',                    // string: html element type 
            'target'                        :   '_blank',               // html target 
            'href'                          :   'https://github.com/Pleisterman/jsProject/blob/master/src/jsProject/jsProject-min.js',        // a href
            'display'                       :   'inline-block',         // html href
            'text'                          :   'download',             // string: text 
            'fontSize'                      :   '1.0em',                // css font size 
            'padding'                       :   '8px',                  // css padding
            'marginTop'                     :   '38px',                 // css margin top
            'marginLeft'                    :   '40px',                 // css margin left
            'color'                         :   'black',                // css color: color
            'highlightColor'                :   'white',                // css color: highlightColor
            'backgroundColor'               :   'white',                // css color: backgroundColor
            'backgroundHighlightColor'      :   'mediumseagreen',       // css color: backgroundHihlightColor
            'cursor'                        :   'pointer',              // css cursor
            'border'                        :   true,                   // boolean: has border
            'borderRadius'                  :   '5px',                  // css border radius
            'borderColor'                   :   'mediumseagreen',       // css color: border color
            'borderHighlightColor'          :   'seagreen',             // css color: border highlight color
            'borderWidth'                   :   '1px',                  // css border width 
            'borderStyle'                   :   'solid'                 // css border style 
        };                                                              // done json: buttonOptions
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );

            // add button to header
            $( '#' + self.parentId ).append( jsProject.jsonToElementHtml( self.buttonOptions ) );
            // add mouseIn event    
            $( '#' + self.buttonOptions['id'] ).mouseenter( function( ){ self.mouseIn( this ); });
            // add mouseOut event    
            $( '#' + self.buttonOptions['id'] ).mouseleave( function( ){ self.mouseOut( this ); });

        // DONE FUNCTION: construct( void ) void
        };
        self.mouseIn = function( element ){
        // FUNCTION: mouseIn( html element: element ) void

            // debug info
            self.debug( 'mouseIn' );
            
            // set container background color highlight
            $( '#' + self.buttonOptions['id'] ).css( 'background-color', self.buttonOptions['backgroundHighlightColor'] );
            // set container border color highlight
            $( '#' + self.buttonOptions['id'] ).css( 'border-color', self.buttonOptions['borderHighlightColor'] );
            // set title color highlight
            $( '#' + self.buttonOptions['id'] ).css( 'color', self.buttonOptions['highlightColor'] );            

        // DONE FUNCTION: mouseIn( html element: element ) void
        };
        self.mouseOut = function( element ){
        // FUNCTION: mouseOut( html element: element ) void

            // debug info
            self.debug( 'mouseOut' );

            // set container background color default
            $( '#' + self.buttonOptions['id'] ).css( 'background-color', self.buttonOptions['backgroundColor'] );
            // set container border color default
            $( '#' + self.buttonOptions['id'] ).css( 'border-color', self.buttonOptions['borderColor'] );
            // set title color highlight
            $( '#' + self.buttonOptions['id'] ).css( 'color', self.buttonOptions['color'] );

        // DONE FUNCTION: mouseOut( html element: element ) void
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
    // DONE MODULE: downloadButtonModule( html element id: parentId ) void
})( pleisterman );
// done create module function
