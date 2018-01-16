/* 
 *  Project: jsProject Examples 
 * 
 *  File: contentItemsModule.js
 * 
 *  Purpose: 
 *      creates the content items
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

    // MODULE: contentItemsModule( html element id: parentId ) void
    
    pleisterman.contentItemsModule = function( parentId ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                                // object: self
        self.MODULE = 'contentItemsModule';                             // string: module
        self.debugOn = true;                                            // boolean: debugOn
        self.parentId = parentId;                                       // html element id: parentId 
        self.imageUrl = pleisterman.getSetting( 'imageUrl' );             // string: image dir
        self.itemLinkOptions = {                                        // json: item link Options
            'idPrefix'                      :   self.MODULE + 'itemLink', // string: id prefix
            'element'                       :   'a',                    // string: html element type 
            'target'                        :   '_self',                // string: reference target
            'text'                          :   ''                      // string: text
        };                                                              // done json: item link container 
        self.itemContainerOptions = {                                   // json: item container options
            'idPrefix'                      :   self.MODULE + 'itemContainer', // string: id prefix
            'element'                       :   'div',                  // string: html element type 
            'minimumWidth'                  :   '60px',                 // css style height
            'display'                       :   'inline-block',         // css display
            'verticalAlign'                 :   'top',                  // css vertical align
            'padding'                       :   '8px',                  // css padding
            'margin'                        :   '14px',                 // css margin right
            'marginTop'                     :   '28px',                 // css margin top
            'styleWidth'                    :   '280px',                // css margin right
            'cursor'                        :   'pointer',              // css cursor
            'backgroundColor'               :   'white',                // css color: backgroundColor
            'backgroundHighlightColor'      :   'mediumseagreen',       // css color: backgroundHihlightColor
            'border'                        :   true,                   // boolean: has border
            'borderRadius'                  :   '5px',                  // css border radius
            'borderColor'                   :   'mediumseagreen',       // css color: border color
            'borderHighlightColor'          :   'seagreen',             // css color: border color
            'borderWidth'                   :   '1px',                  // css border width
            'borderStyle'                   :   'solid'                 // css border style
        };                                                              // done json: item container options
        self.itemSrcButtonOptions = {                                   // json: item title options
            'idPrefix'                      :   self.MODULE + 'itemSrcButton', // string: id prefix
            'element'                       :   'a',                    // string: html element type 
            'float'                         :   'right',                // css float
            'imageUrl'                      :   'url(' + self.imageUrl + 'srcButton.png' + ')', // css background size
            'target'                        :   '_blank',               // a target
            'styleWidth'                    :   '40px',                 // css width
            'styleHeight'                   :   '55px',                 // css height
            'marginRight'                   :   '8px',                  // css margin right
            'border'                        :   true,                   // boolean: has border
            'borderRadius'                  :   '5px',                  // css border radius
            'borderWidth'                   :   '0px',                  // css border width
            'borderStyle'                   :   'solid',                // css border style
            'backgroundSize'                :   '40px 55px',            // css background size
            'backgroundColor'               :   'transparent',          // css color: background color
            'backgroundHighlightColor'      :   'white',                // css color: backgroundHihlightColor
            'backgroundPosition'            :   'center center',        // css background position
            'backgroundRepeat'              :   'no-repeat',            // css background repeat
        };                                                              // done json: item container options
        self.itemTitleOptions = {                                       // json: item title options
            'idPrefix'                      :   self.MODULE + 'itemTitle', // string: id prefix
            'element'                       :   'div',                  // string: html element type 
            'margin'                        :   '12px',                 // css margin right
            'marginTop'                     :   '28px',                 // css padding top
            'fontSize'                      :   '1.1em',                // css font size
            'color'                         :   'black',                // css color: color
            'highlightColor'                :   'white',                // css color: color
        };                                                              // done json: item title options
        self.itemTextOptions = {                                        // json: item text options
            'idPrefix'                      :   self.MODULE + 'itemText', // string: id prefix
            'element'                       :   'div',                  // string: html element type 
            'margin'                        :   '12px',                 // css margin right
            'marginTop'                     :   '28px',                 // css padding top
            'fontSize'                      :   '1.0em',                // css font size
            'color'                         :   'black',                // css color: color
            'highlightColor'                :   'white',                // css color: color
        };                                                              // done json: item text options
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

        // DONE FUNCTION: addEventSubscriptions( void ) void
        };
        self.addHtml = function() {
        // FUNCTION: addHtml( void ) void
       
            // get items
            var items = pleisterman.getTranslation( 'contentItems' ); 
            // loop over items
            for( var i = 0; i < items.length; i++ ){

                // set link id
                self.itemLinkOptions['id'] = self.itemLinkOptions['idPrefix'] + '_' + i;
                // set reference
                self.itemLinkOptions['href'] = items[i]['link'];
                // add link    
                $( '#' + self.parentId ).append( jsProject.jsonToElementHtml( self.itemLinkOptions ) );

                // set container id
                self.itemContainerOptions['id'] = self.itemContainerOptions['idPrefix'] + '_' + i;
                // add container to link    
                $( '#' + self.itemLinkOptions['id'] ).append( jsProject.jsonToElementHtml( self.itemContainerOptions ) );
                // add mouseIn event    
                $( '#' + self.itemContainerOptions['id'] ).mouseenter( function( ){ self.itemMouseIn( this ); });
                // add mouseOut event    
                $( '#' + self.itemContainerOptions['id'] ).mouseleave( function( ){ self.itemMouseOut( this ); });

                // set src button id
                self.itemSrcButtonOptions['id'] = self.itemSrcButtonOptions['idPrefix'] + '_' + i;
                // set src button id
                self.itemSrcButtonOptions['href'] = items[i]['fileName'];
                // add src button to container    
                $( '#' + self.itemContainerOptions['id'] ).append( jsProject.jsonToElementHtml( self.itemSrcButtonOptions ) );
                // add mouseIn event    
                $( '#' + self.itemSrcButtonOptions['id'] ).mouseenter( function( ){ self.itemSrcMouseIn( this ); });
                // add mouseOut event    
                $( '#' + self.itemSrcButtonOptions['id'] ).mouseleave( function( ){ self.itemSrcMouseOut( this ); });

                // set title id
                self.itemTitleOptions['id'] = self.itemTitleOptions['idPrefix'] + '_' + i;
                // set title text
                self.itemTitleOptions['text'] = items[i]['title'];
                // add title to container    
                $( '#' + self.itemContainerOptions['id'] ).append( jsProject.jsonToElementHtml( self.itemTitleOptions ) );

                // set text id
                self.itemTextOptions['id'] = self.itemTextOptions['idPrefix'] + '_' + i;
                // set text
                self.itemTextOptions['text'] = items[i]['text'];
                // add text to container    
                $( '#' + self.itemContainerOptions['id'] ).append( jsProject.jsonToElementHtml( self.itemTextOptions ) );

            }
            // done loop items
            
        // DONE FUNCTION: addHtml( void ) void
        };
        self.itemMouseIn = function( element ){
        // FUNCTION: itemMouseIn( html element: element ) void

            // debug info
            self.debug( 'itemMouseIn element: ' + element.id );

            // split element id
            var idArray = element.id.split( '_' );
            // get index
            var index = idArray[idArray.length - 1];
            // set container background color highlight
            $( '#' + element.id ).css( 'background-color', self.itemContainerOptions['backgroundHighlightColor'] );
            // set container border color highlight
            $( '#' + element.id ).css( 'border-color', self.itemContainerOptions['borderHighlightColor'] );
            // set title color highlight
            $( '#' + self.itemTitleOptions['idPrefix'] + '_' + index ).css( 'color', self.itemTitleOptions['highlightColor'] );
            // set text color highlight
            $( '#' + self.itemTextOptions['idPrefix'] + '_' + index ).css( 'color', self.itemTextOptions['highlightColor'] );

        // DONE FUNCTION: itemMouseIn( html element: element ) void
        };
        self.itemMouseOut = function( element ){
        // FUNCTION: itemMouseOut( html element: element ) void

            // debug info
            self.debug( 'itemMouseOut element: ' + element.id );

            // split element id
            var idArray = element.id.split( '_' );
            // get index
            var index = idArray[idArray.length - 1];
            // set container background color default
            $( '#' + element.id ).css( 'background-color', self.itemContainerOptions['backgroundColor'] );
            // set container border color default
            $( '#' + element.id ).css( 'border-color', self.itemContainerOptions['borderColor'] );
            // set title color default
            $( '#' + self.itemTitleOptions['idPrefix'] + '_' + index ).css( 'color', self.itemTitleOptions['color'] );
            // set text color default
            $( '#' + self.itemTextOptions['idPrefix'] + '_' + index ).css( 'color', self.itemTextOptions['color'] );

        // DONE FUNCTION: itemMouseOut( html element: element ) void
        };
        self.itemSrcMouseIn = function( element ){
        // FUNCTION: itemSrcMouseIn( html element: element ) void

            // debug info
            self.debug( 'itemSrcMouseIn element: ' + element.id );

            // set button background color highlight
            $( '#' + element.id ).css( 'background-color', self.itemSrcButtonOptions['backgroundHighlightColor'] );

        // DONE FUNCTION: itemSrcMouseIn( html element: element ) void
        };
        self.itemSrcMouseOut = function( element ){
        // FUNCTION: itemSrcMouseOut( html element: element ) void

            // debug info
            self.debug( 'itemSrcMouseOut element: ' + element.id );

            // set button background color
            $( '#' + element.id ).css( 'background-color', self.itemSrcButtonOptions['backgroundColor'] );


        // DONE FUNCTION: itemSrcMouseOut( html element: element ) void
        };
        self.layoutChange = function(){
        // FUNCTION: layoutChange( void ) void

            // debug info
            self.debug( 'layoutChange  ' );

            var maximumHeight = 0;
            
            // get items
            var items = pleisterman.getTranslation( 'contentItems' ); 
            // loop over items
            for( var i = 0; i < items.length; i++ ){
                // set container id
                self.itemContainerOptions['id'] = self.itemContainerOptions['idPrefix'] + '_' + i;
                
                // container height > maximum
                if(  $( '#' + self.itemContainerOptions['id'] ).height() > maximumHeight ){
                    // set maximum
                    maximumHeight = $( '#' + self.itemContainerOptions['id'] ).height();
                }
                // done container height > maximum
            }
            // done loop items
        
            // loop over items
            for( var i = 0; i < items.length; i++ ){
                // set container id
                self.itemContainerOptions['id'] = self.itemContainerOptions['idPrefix'] + '_' + i;
                // set container height
                $( '#' + self.itemContainerOptions['id'] ).height( maximumHeight );
            }
            // done loop items
        
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
    // DONE MODULE: contentItemsModule( html element id: parentId ) void
})( pleisterman );
// done create module function
