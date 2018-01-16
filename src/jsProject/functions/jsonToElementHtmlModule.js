/* 
 *  Project: jsProject 
 * 
 *  File: jsonToElementHtmlModule.js
 * 
 *  Last revision: 10-03-2017
 * 
 * Purpose:  this module generates html with inline css from json  
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
( function( jsProject ){

    // FUNCTION: jsonToElementHtmlModule( void ) void
    
    jsProject.jsonToElementHtmlModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'jsonToElementHtmlModule';            // string: module
        self.debugOn = false;                               // boolean: debug
        self.closeElements = [
            'a',
            'div',
            'svg',
            'iframe'
        ];
        self.properties = [
            'id',
            'name',
            'type',
            'value',
            'src',
            'href',
            'target',
            'title',
            'size',
            'width',
            'height',
            'maxlength',
            'rowspan',
            'colspan'
            
        ];
        self.styles = {
            'zIndex'            :   'z-index',  
            'position'          :   'position',  
            'float'             :   'float',  
            'clear'             :   'clear',  
            'top'               :   'top',  
            'left'              :   'left',  
            'display'           :   'display',  
            'overflow'          :   'overflow',  
            'overflowX'         :   'overflow-x',  
            'overflowY'         :   'overflow-y',  
            'cursor'            :   'cursor',  
            'background'        :   'background',
            'backgroundColor'   :   'background-color',
            'backgroundRepeat'  :   'background-repeat',
            'backgroundPosition':   'background-position',
            'backgroundSize'    :   'background-size',
            'color'             :   'color',
            'minimumWidth'      :   'min-width',
            'maximumWidth'      :   'max-width',
            'minimumHeight'     :   'min-height',
            'maximumHeight'     :   'max-height',
            'styleWidth'        :   'width',
            'styleHeight'       :   'height',
            'fontFamily'        :   'font-family',
            'fontSize'          :   'font-size',
            'lineHeight'        :   'line-height',
            'letterSpacing'     :   'letter-spacing',
            'fontWeight'        :   'font-weight',
            'textAlign'         :   'text-align',
            'verticalAlign'     :   'vertical-align',
            'margin'            :   'margin',
            'marginTop'         :   'margin-top',
            'marginLeft'        :   'margin-left',
            'marginRight'       :   'margin-right',
            'marginBottom'      :   'margin-bottom',
            'padding'           :   'padding',
            'paddingTop'        :   'padding-top',
            'paddingLeft'       :   'padding-left',
            'paddingRight'      :   'padding-right',
            'paddingBottom'     :   'padding-bottom',
            'imageUrl'          :   'background-image',
            'transformOrigin'   :   'transform-origin',
            'boxShadow'         :   'box-shadow'
        };
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
        
            // debug info
            self.debug( 'construct' );
            
            // add the extensions to jsProject
            self.addApplicationsExtensions();

        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function(){
        // FUNCTION: addApplicationsExtensions( void ) void
            
            // add jsonToElementHtml
            jsProject.jsonToElementHtml = self.jsonToElementHtml;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.jsonToElementHtml = function( options ) {
        // FUNCTION: jsonToElementHtml( json: options ) html
        
            var html = '';
            
            // element
            html += '<' + options['element'];
                html += self.addProperties( options );
                html += self.addStyle( options );
            html += '>';
            // done div header
                
            // text
            if( options['text'] ){
                html += options['text'];
            }
            // done text
            
            // close element
            if( self.closeElements.indexOf( options['element'] ) >= 0 ){
                html += '</' + options['element'] + '>';
            }
            
            return html;

        // DONE FUNCTION: jsonToElementHtml( json: options ) html
        };
        self.addProperties = function( options ){
        // FUNCTION: addProperties( json: options ) html
            
            var html = '';
            
            // add properties
            $.each( self.properties, function( index, value ) {
                if( options[value] !== undefined ){
                    html += ' ' + value + '="' + options[value]; 
                    if( typeof( options[value] ) === 'number' ){
                         html += 'px;';
                    }
                    html += '"';
                }
            } );
            // done add properties

            // read only
            if( options['readOnly'] ){
                html += ' readOnly '; 
            }
            // done read only

            // checked
            if( options['checked'] ){
                html += ' checked '; 
            }
            // done checked

            return html;

        // DONE FUNCTION: addProperties( json: options ) html
        };
        self.addStyle = function( options ){
        // FUNCTION: addStyle( json: options ) html
            
            var html = '';
            // add style
            html += ' style="';
            
            // 
            $.each( self.styles, function( index, value ) {
                if( options[index] !== undefined ){
                    html += value + ' : ' + options[index];
                    if( typeof( options[index] ) === 'number' ){
                         html += 'px';
                    }
                    html += ';';
                }
            });
            html += self.addBorder( options );
            
            
            html += '"';
            
            // done add style
            
            return html;

        // DONE FUNCTION: addStyle( json: options ) html
        };
        self.addBorder = function( options ){
        // FUNCTION: addBorder( json: options ) html
            
            var html = '';
            
            // border
            if( options['border'] !== undefined  ){
                html += ' border: ';
                html += self.getBorderHtml( options );
            }
            // top border
            if( options['borderTop'] !== undefined ){
                html += ' border-top: ';
                html += self.getBorderHtml( options );
            }
            // left border
            if( options['borderLeft'] !== undefined ){
                html += ' border-left: ';
                html += self.getBorderHtml( options );
            }
            // right border
            if( options['borderRight'] !== undefined ){
                html += ' border-right: ';
                html += self.getBorderHtml( options );
            }
            // bottom border
            if( options['borderBottom'] !== undefined ){
                html += ' border-bottom: ';
                html += self.getBorderHtml( options );
            }
            
            // bottom radius
            if( options['borderRadius'] !== undefined ){
                html += ' border-radius: ';
                html += options['borderRadius'];
                html += ';';
            }
            return html;

        // DONE FUNCTION: addBorder( json: options ) html
        };
        self.getBorderHtml = function( options ){
        // FUNCTION: getBorderHtml( json: options ) html
            
            var html = '';
            html += options['borderWidth'];
            html += ' ';
            html += options['borderColor'];
            html += ' ';
            html += options['borderStyle'];
            html += ';';
            
            return html;

        // DONE FUNCTION: getBorderHtml( json: options ) html
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
    // DONE MODULE: jsonToElementHtmlModule( void ) void
})( jsProject );
// done create module function
