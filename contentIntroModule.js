/* 
 *  Project: jsProject Examples 
 * 
 *  File: contentIntroModule.js
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

    // MODULE: contentIntroModule( html element id: parentId ) void
    
    pleisterman.contentIntroModule = function( parentId ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                                // object: self
        self.MODULE = 'contentIntroModule';                             // string: module
        self.debugOn = true;                                            // boolean: debugOn
        self.parentId = parentId;                                       // html element id: parentId 
        self.introContainerOptions = {                                   // json: intro container options
            'id'                            :   self.MODULE + 'introContainer', // string: id
            'element'                       :   'div',                  // string: html element type 
            'maximumWidth'                  :   '1224px',               // css maximum width
            'display'                       :   'block',                // css display
            'verticalAlign'                 :   'top',                  // css vertical align
            'padding'                       :   '8px',                  // css padding
            'margin'                        :   '0 auto',               // css margin right
            'marginTop'                     :   '28px',                 // css margin top
            'textAlign'                     :   'center',               // css text align
            'backgroundColor'               :   'white',                // css color: backgroundColor
        };                                                               // done json: intro container options
        self.introTitleOptions = {                                       // json: intro title options
            'id'                            :   self.MODULE + 'introTitle', // string: id
            'element'                       :   'div',                  // string: html element type 
            'maximumWidth'                  :   '820px',               // css maximum width
            'margin'                        :   '0 auto',                 // css margin right
            'marginTop'                     :   '28px',                 // css padding top
            'textAlign'                     :   'left',               // css text align
            'fontSize'                      :   '1.2em',                // css font size
            'fontWeight'                    :   'bold',                 // css font size
            'color'                         :   'mediumseagreen',       // css color: color
        };                                                              // done json: intro text options
        self.introTextOptions = {                                       // json: intro title options
            'id'                            :   self.MODULE + 'introText', // string: id
            'element'                       :   'div',                  // string: html element type 
            'display'                       :   'block',                // css display
            'maximumWidth'                  :   '820px',               // css maximum width
            'margin'                        :   '0 auto',                 // css margin right
            'marginTop'                     :   '28px',                 // css padding top
            'marginBottom'                   :   '28px',                 // css padding top
            'textAlign'                     :   'left',               // css text align
            'fontSize'                      :   '1.1em',                // css font size
            'color'                         :   'black',                // css color: color
        };                                                              // done json: intro text options
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
       
            // add container    
            $( '#' + self.parentId ).append( jsProject.jsonToElementHtml( self.introContainerOptions ) );
            // set title text
            self.introTitleOptions['text'] = pleisterman.getTranslation( 'introTitle' );
            // add title to container    
            $( '#' + self.introContainerOptions['id'] ).append( jsProject.jsonToElementHtml( self.introTitleOptions ) );
            // set text
            self.introTextOptions['text'] = pleisterman.getTranslation( 'introText' );
            // add text to container    
            $( '#' + self.introContainerOptions['id'] ).append( jsProject.jsonToElementHtml( self.introTextOptions ) );
            
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
    // DONE MODULE: contentIntroModule( html element id: parentId ) void
})( pleisterman );
// done create module function
