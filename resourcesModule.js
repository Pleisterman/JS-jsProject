/*
* Author: Pleisterman
* Info: 
* Web: www.pleisterman.nl 
* Mail: info@pleisterman.nl 
* GitHub: Pleisterman 
* 
* Purpose: this module controls the resources for the application 
*          resources are images, sounds, [ // later more? ]
*          when load is called the module will load the resources in the list
*          and call the callback when finished   
* Last revision: 03-11-2014
* 
* NOTICE OF LICENSE
*
* Copyright (C) 2014  Pleisterman
* 
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU General Public License as published by
*    the Free Software Foundation, either version 3 of the License, or
*    (at your option) any later version.
* 
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU General Public License for more details.
*
*    You should have received a copy of the GNU General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

( function( jsProject ){
    jsProject.resourcesModule = function( ) {


        /*
        *  module resourcesModule 
        *  purpose:
        *          this module controls the resources for the application 
        *          resources are images, sounds, [ // later more? ]
        *          when load is called the module will load the resources in the list
        *          and call the callback when finished
        *          
        *   functions: 
        *       private:
        *           construct:      parameters: ( void ) return: void 
        *                           called by the module for initialization
        *           debug:          parameters: ( string string ) return: void
        *                           calls the jsProject.debug( string ) when self.debugOn
        */
    
        // private
        var self = this;
        self.MODULE = 'resourcesModule';
        self.debugOn = true;

        // array to save the resources in
        self.resources = new Array();
        
        
        // store the callback for load
        self.callback = null;
        
        // functions
        self.construct = function() {
            self.debug( 'construct' );

            // add the acces functions for the app
            jsProject.addResource = self.add;
            jsProject.loadResources = self.load;
            jsProject.getResource = self.get;
            
       };
        self.add = function( id, src, type  ) {
            self.debug( 'addResource' );
            var resource = { 'id' : id,
                             'loaded' : false, 
                             'src' : src,      
                             'type'  : type, 
                             'resource' : null };
           self.resources.push( resource );                  
        };
        self.load = function( callback ) {
            self.callback = callback;
            // loop the resource array and start loading
            var hasResourcesToLoad = true;
            self.resources.forEach( function( resource ) {
                // if resource is empty
                if( !resource['resource']) {
                    hasResourcesToLoad = true;
                    switch( resource['type'] ) {
                        case 'image' : {
                            resource['resource'] = new Image();
                            resource['resource'].onload = function() {
                                self.loaded( resource['id'] );
                            };
                            resource['resource'].src = resource['src'];
                            break;
                        }
                        case 'sound' : {
                            resource['resource'] = new Audio();
                            resource['resource'].src = resource['src'];
                            resource['resource'].onloadeddata = function() {
                                self.loaded( resource['id'] );
                            };
                            break;
                        }
                        default : {
                            self.debug( 'error unknown resource type: ' + resource['type'] );
                            break;
                        }
                    }
                }    
            });
            if(!hasResourcesToLoad){
                self.callback();
            }
            
        };
        self.loaded = function( id ) {
            self.debug( ' sceneResourceLoaded: ' + id );
           
            var allLoaded = true;
            self.resources.forEach( function( resource ) {
                // set loaded to true 
                if( resource['id'] == id ) {
                    resource['loaded'] = true;
                }
                // check if all resource are loaded
                if( !resource['loaded'] ) {
                    allLoaded = false;
                }
            });
            if( allLoaded ){
                self.debug( 'allLoaded' );
                self.callback();
            }
        };
        self.get = function( id, type ) {
            self.debug( 'resourceItem get id=' + id + ' type:'  + type );
            var resource = null;
            self.resources.forEach( function( resourceItem ) {
                if( resourceItem['id'] == id && resourceItem['type'] == type ) {
                   resource = resourceItem['resource'];
                }
            });
            if( resource ){
                return resource
            }
            else {
                self.debug( ' resource not found id: ' + id + ' type: ' + type );
            }
        };
        self.debug = function( string ) {
            if( self.debugOn ) {
                jsProject.debug( self.MODULE + ': ' + string );
            }
        };
        
        // initialize the module 
        self.construct();

    };
})( jsProject );