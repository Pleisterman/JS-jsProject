<?php
/* 
 *  Project: jsProject Examples  
 * 
 *  File: indexJsFiles.php
 * 
 *  Purpose: 
 *      creates the page
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

?>
<!DOCTYPE html>
<html>
    <head>
        <title>jsProject Example</title>
        <meta charset="UTF-8">
        <meta name="description" content="Explanation on using jsProject">
        <meta name="keywords" content="jsProject, Home, function, examples">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"><link href="https://fonts.googleapis.com/css?family=Raleway" media="screen" rel="stylesheet" type="text/css">
        <script>
            // add onload event    
            window.onload = function(){
                // set language
                pleisterman.urlLanguage = '<?php echo $_GET['lang'] ?>';
                // start the application
                pleisterman.start();
            };
            // done add onload event  
        </script>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>   
        <script type="text/javascript" src="main.js"></script>
        <script type="text/javascript" src="settingsModule.js"></script>
        <?php
            echo ' <script type="text/javascript" src="translationsModule';
            // lang in url
            if( isset( $_GET['lang'] ) ){
                // echo lang
                echo '_' . $_GET['lang'];
            }
            // lang in url
            echo '.js"></script>';
        ?>
        <script type="text/javascript" src="valuesModule.js"></script>
        <script type="text/javascript" src="layoutModule.js"></script>
        <script type="text/javascript" src="headerModule.js"></script>
        <script type="text/javascript" src="contentModule.js"></script>
        <script type="text/javascript" src="contentItemsModule.js"></script>
        <script type="text/javascript" src="contentIntroModule.js"></script>
        <script type="text/javascript" src="debugButtonModule.js"></script>
        <script type="text/javascript" src="downloadButtonModule.js"></script>
        <script type="text/javascript" src="githubButtonModule.js"></script>
        <script type="text/javascript" src="languageSelectionModule.js"></script>
        <script type="text/javascript" src="languageSelectionItemModule.js"></script>
        
        <script type="text/javascript" src="./jsProject/src/jsProject.js"></script>
        <script type="text/javascript" src="./jsProject/src/eventsModule.js"></script>
        <script type="text/javascript" src="./jsProject/src/debugModule.js"></script>
        <script type="text/javascript" src="./jsProject/src/ajaxModule.js"></script>
        <script type="text/javascript" src="./jsProject/src/valuesModule.js"></script>
        <script type="text/javascript" src="./jsProject/src/jsonToElementHtmlModule.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/functionsModule.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/getJsonValueFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/elementIsVisibleFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/scrollElementFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/getElementPositionFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/padFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/checkEmailSyntaxFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/xorStringFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/dateObjectToDbDateFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/dateObjectToTextFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/dbDateToDateObjectFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/getNextDayFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/getPreviousDayFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/getTodayDbDateFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/getTodayTextFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/getWeekFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/textToDateObjectFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/hexStringToRgbFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/hsvToRgbFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/rgbIsRgbFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/rgbToHsvFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/rgbToHexStringFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/rgbToStringFunction.js"></script>
        <script type="text/javascript" src="./jsProject/src/functions/stringToRgbFunction.js"></script>

    </head>
    <body>
        
    </body>
</html>
