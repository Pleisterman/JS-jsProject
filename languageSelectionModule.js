/* 
 *  Project: jsProject Examples  
 * 
 *  File: languageSelectionModule.js
 * 
 *  Purpose: 
 *      creates the language selection 
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

    // MODULE: languageSelectionModule( html element id: parentId ) void
    
    pleisterman.languageSelectionModule = function( parentId ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                                // object: self
        self.MODULE = 'languageSelectionModule';                        // string: module
        self.debugOn = true;                                            // boolean: debugOn
        self.parentId = parentId;                                       // html element id: parentId 
        self.imageUrl = pleisterman.getSetting( 'imageUrl' );             // string: image dir
        self.buttonOptions = {                                          // json: buttonOptions
            'id'                            :   self.parentId + 'LanguageSelectionButton', // string: id
            'element'                       :   'div',                  // string: html element type 
            'display'                       :   'inline-block',         // css display
            'text'                          :   'nl',                   // string: text 
            'fontSize'                      :   '1.0em',                // css font size 
            'padding'                       :   '8px',                  // css padding
            'paddingRight'                  :   '35px',                 // css padding
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
            'borderStyle'                   :   'solid',                // css border style 
            'backgroundSize'                :   '25px 20px',            // css background size
            'backgroundPosition'            :   'center right',         // css background position
            'backgroundRepeat'              :   'no-repeat',            // css background repeat
            'imageUrl'                      :   'url(' + self.imageUrl + 'dropdown.png' + ')', // css background size
        };                                                              // done json: buttonOptions
        self.languagesContainerOptions = {                              // json: languagesContainerOptions
            'id'                            :   self.parentId + 'languagesContainer', // string: id
            'element'                       :   'div',                  // string: html element type 
            'position'                      :   'absolute',             // css position
            'offsetTop'                     :   40,                     // integer: offsetTop
            'offsetLeft'                    :   40,                     // integer: offsetLeft
            'display'                       :   'block',                // css display
            'visible'                       :   false,                  // boolean: visible
            'borderRadius'                  :   '5px',                  // css border radius
            'borderColor'                   :   'mediumseagreen',       // css color: border color
            'zIndex'                        :   pleisterman.getSetting( 'zIndex' )['overlay'].toString() // integer: z index
        };                                                              // done json: languagesContainerOptions
        self.languageItems = [];                                        // json: languageItems
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );

            // add html
            self.addHtml();

            // event subscription
            self.addEventSubscriptions();


        // DONE FUNCTION: construct( void ) void
        };
        self.addEventSubscriptions = function(){
        // FUNCTION: addEventSubscriptions( void ) void
            
            // subscribe to layoutChange
            jsProject.subscribeToEvent( 'layoutChange', self.layoutChange );
            
            // subscribe to sceneScroll
            jsProject.subscribeToEvent( 'sceneScroll', self.layoutChange );

        // DONE FUNCTION: addEventSubscriptions( void ) void
        };
        self.addHtml = function() {
        // FUNCTION: addHtml( void ) void
        
            // add button
            self.addButton();

            // add selections
            self.addSelections();

            // add document click event    
            $( document.body ).click( function( ){ self.documentClick( ); });

            
        // DONE FUNCTION: addHtml( void ) void
        };
        self.addButton = function() {
        // FUNCTION: addButton( void ) void
        
            // get languages
            var languages = pleisterman.getSetting( 'languages' );
            // loop over laguages
            for( var i = 0; i < languages.length; i++ ){
                // language url = language urlLanguage
                if( languages[i]['urlLanguage'] === pleisterman.urlLanguage  ){
                    // set text
                    self.buttonOptions['text'] = languages[i]['abbreviation'];
                }
                // done language url = language urlLanguage
            }
            // done loop over languages
            
            // add button to header
            $( '#' + self.parentId ).append( jsProject.jsonToElementHtml( self.buttonOptions ) );
            // add mouseIn event    
            $( '#' + self.buttonOptions['id'] ).mouseenter( function( ){ self.mouseIn( this ); });
            // add mouseOut event    
            $( '#' + self.buttonOptions['id'] ).mouseleave( function( ){ self.mouseOut( this ); });
            // add click event    
            $( '#' + self.buttonOptions['id'] ).click( function( event ){ self.mouseClick( event ); });
        
        // DONE FUNCTION: addButton( void ) void
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
        self.mouseClick = function( event ){
        // FUNCTION: mouseClick( void ) void

            // debug info
            self.debug( 'click' );

            // prevent propagation
            event.stopPropagation();
                
            // language selection is visible
            if( self.languagesContainerOptions['visible'] ){
                // hide selection
                $( '#' + self.languagesContainerOptions['id'] ).hide();
            }
            else {
                // show selection
                $( '#' + self.languagesContainerOptions['id'] ).show();
            }
            // done language selection is visible
            
            // remember visibility
            self.languagesContainerOptions['visible'] = !self.languagesContainerOptions['visible'];
            
            // refresh layout
            self.layoutChange();

        // DONE FUNCTION: mouseClick( void ) void
        };
        self.documentClick = function( ){
        // FUNCTION: documentClick( void ) void

            // debug info
            self.debug( 'documentClick' );
        
            // language selection is visible
            if( self.languagesContainerOptions['visible'] ){
                // hide selection
                $( '#' + self.languagesContainerOptions['id'] ).hide();
                
                // remember visibility
                self.languagesContainerOptions['visible'] = false;
                
            }
            // done language selection is visible
            
        // DONE FUNCTION: documentClick( void ) void
        };
        self.addSelections = function() {
        // FUNCTION: addSelections( void ) void
        
            // add layout to document
            $( document.body ).append( jsProject.jsonToElementHtml( self.languagesContainerOptions ) );
            // hide container
            $( '#' + self.languagesContainerOptions['id'] ).hide();
            
            // get languages
            var languages = pleisterman.getSetting( 'languages' );
            // loop over laguages
            for( var i = 0; i < languages.length; i++ ){
                // language url ! language urlLanguage
                if( languages[i]['urlLanguage'] !== pleisterman.urlLanguage  ){
                    // create item
                    var languageItem = new pleisterman.languageSelectionItemModule( self.languagesContainerOptions['id'], languages[i] );
                    // add to items
                    self.languageItems.push( languageItem );
                }
            }
            // done loop over languages
            
        // DONE FUNCTION: addSelections( void ) void
        };
        self.layoutChange = function(){
        // FUNCTION: layoutChange( void ) void

            // debug info
            //self.debug( 'layoutChange  ' );
        
            // get caller position
            var top = $( '#' + self.buttonOptions['id'] ).position().top;
            // add document scroll
            top += $( document.body ).scrollTop();
            // add button height
            top += $( '#' + self.buttonOptions['id'] ).outerHeight();
            // add offset top
            top += self.languagesContainerOptions['offsetTop'];
            // get caller position
            var left = $( '#' + self.buttonOptions['id'] ).position().left;
            // add offset left
            left += self.languagesContainerOptions['offsetLeft'];
        
            // set position
            $( '#' + self.languagesContainerOptions['id'] ).css( 'top', top + 'px' );
            $( '#' + self.languagesContainerOptions['id'] ).css( 'left', left + 'px' );
            // set position
        
        // DONE FUNCTION: layoutChange( void ) void
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
    // DONE MODULE: languageSelectionModule( html element id: parentId ) void
})( pleisterman );
// done create module function
