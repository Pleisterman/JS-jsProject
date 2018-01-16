/* 
 *  Project: jsProject Examples  
 * 
 *  File: debugButtonModule.js
 * 
 *  Purpose: 
 *      creates the debug on of button
 *  
 *  Last Revision:  10-03-2017
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

    // MODULE: debugButtonModule( html element id: parentId ) void
    
    pleisterman.debugButtonModule = function( parentId ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                                // object: self
        self.MODULE = 'debugButtonModule';                              // string: module
        self.debugOn = true;                                            // boolean: debugOn
        self.parentId = parentId;                                       // html element id: parentId 
        self.buttonOptions = {                                          // json: buttonOptions
            'id'                            :   self.parentId + 'debuggerButton', // string: id
            'element'                       :   'div',                  // string: html element type 
            'display'                       :   'inline-block',         // css display
            'text'                          :   pleisterman.getTranslation( 'showDebugger' ), // string: text 
            'fontSize'                      :   '1.0em',                // css font size 
            'padding'                       :   '8px',                  // css padding
            'marginTop'                     :   '38px',                 // css margin top
            'marginLeft'                    :   '42px',                 // css margin left
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
        self.debuggerOn = false;                                        // boolean: debuggerOn                                                              
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );

            // add title to header
            $( '#' + self.parentId ).append( jsProject.jsonToElementHtml( self.buttonOptions ) );
            // add mouseIn event    
            $( '#' + self.buttonOptions['id'] ).mouseenter( function( ){ self.mouseIn( this ); });
            // add mouseOut event    
            $( '#' + self.buttonOptions['id'] ).mouseleave( function( ){ self.mouseOut( this ); });
            // add click event    
            $( '#' + self.buttonOptions['id'] ).click( function( ){ self.mouseClick( ); });

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
        self.mouseClick = function( ){
        // FUNCTION: mouseClick( void ) void

            // debug info
            self.debug( 'click' );
        
           // debuggerOn is not debuggerOn
           self.debuggerOn = !self.debuggerOn;
           // show debugger
           pleisterman.showDebugger( self.debuggerOn );
           
           // debugger is on
           if( self.debuggerOn ){
               // set button text
               $( '#' + self.buttonOptions['id'] ).html( pleisterman.getTranslation( 'hideDebugger' ) );
               // scroll window
               $( document.body ).scrollTop( 0 );
           }
           else {
               // set button text
               $( '#' + self.buttonOptions['id'] ).html( pleisterman.getTranslation( 'showDebugger' ) );
           }
           // done debugger is on
           

        // DONE FUNCTION: mouseClick( void ) void
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
    // DONE MODULE: debugButtonModule( html element id: parentId ) void
})( pleisterman );
// done create module function
