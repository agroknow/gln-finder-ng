//gets of the full JSON based on Agro-Know Internal Format
function getFullJSON(urlTemp){
        jQuery.ajax({
               url: urlTemp,
               mimeType: "textPlain",
               dataType: "json",
               success: function(data)
                    {
                   //alert(urlTemp);
                    
                        //GENERAL
                    
                        if(data.identifier!==undefined){ jQuery('#stage').html('<p> identifier: ' + data.identifier + '</p>'); }
                        if(data.set!==undefined){jQuery('#stage').append('<p>set : ' + data.set+ '</p>');}
                        if(data.status!==undefined){ jQuery('#stage').append('<p>status : ' + data.status+ '</p>');}
                        if(data.generateThumbnail!==undefined){jQuery('#stage').append('<p> generateThumbnail: ' + data.generateThumbnail+ '</p>');}
                        if(data.lastUpdateDate!==undefined){jQuery('#stage').append('<p> lastUpdateDate: ' + data.lastUpdateDate+ '</p>');}
                        if(data.creationDate!==undefined){jQuery('#stage').append('<p> creationDate: ' + data.creationDate+ '</p>');}
                    
                    
                        //-------------------*LANGUAGEBLOCKS contains multiple language versions - reads all.-------------------
                        jQuery('#stage').append('<p style="color:blue;"> ------- language blocks -------- </p>');
                    
                        //if languageBlocks is an array and isn't empty
                        if(data.languageBlocks.length!==undefined && data.languageBlocks!==undefined )
                        {
                        for(var i = 0; i<data.languageBlocks.length; i++)//run all different languages version of this item
                        {
                            var language = Object.keys(data.languageBlocks[i]); //keys for different language versions of this item. (i.e en, gr, no,) 
                    
                            languageBlock = data.languageBlocks[i][language[0]]; // We always get language[0] as key
                    
                            jQuery('#stage').append('<p> languageBlocks.title: ' + language[0] + '</p>'); // language code
                            jQuery('#stage').append('<p> languageBlocks.title: ' + languageBlock.title + '</p>');
                            jQuery('#stage').append('<p> languageBlocks.description: ' + languageBlock.description+ '</p>');
                            jQuery('#stage').append('<p> languageBlocks.coverage: ' + languageBlock.coverage+ '</p>');
                            jQuery('#stage').append('<p> languageBlocks.keywords: ' + languageBlock.keywords+ '</p>'); //*ARRAY of keywords in current version
                    
                        }}
                        //if languageBlocks has ONLY one value => not array
                        if(data.languageBlocks.length==undefined && data.languageBlocks!==undefined )
                        {
                        var language = Object.keys(data.languageBlocks); //keys for different language versions of this item. (i.e en, gr, no,)
                    
                        languageBlock = data.languageBlocks[language[0]]; // We always get language[0] as key
                    
                        jQuery('#stage').append('<p> languageBlocks.title: ' + language[0] + '</p>'); // language code
                        jQuery('#stage').append('<p> languageBlocks.title: ' + languageBlock.title + '</p>');
                        jQuery('#stage').append('<p> languageBlocks.description: ' + languageBlock.description+ '</p>');
                        jQuery('#stage').append('<p> languageBlocks.coverage: ' + languageBlock.coverage+ '</p>');
                        jQuery('#stage').append('<p> languageBlocks.keywords: ' + languageBlock.keywords+ '</p>'); //*ARRAY of keywords in current version
                        }
                    
                    
                        //-------------------TOKENBLOCK-------------------
                        jQuery('#stage').append('<p style="color:blue;"> ------- token block -------- </p>');
                    
                        if(data.tokenBlock!==undefined)
                        {
                        if(data.tokenBlock.learningResourceTypes!==undefined){
                        jQuery('#stage').append('<p> learningResourceTypes: ' + data.tokenBlock.learningResourceTypes+ '</p>');} //*ARRAY of learningResourceTypes
                        if(data.tokenBlock.endUserRole!==undefined){jQuery('#stage').append('<p> endUserRole: ' + data.tokenBlock.endUserRole + '</p>'); } //*ARRAY of endUserRole
                        if(data.tokenBlock.context!==undefined){jQuery('#stage').append('<p> context: ' + data.tokenBlock.context+ '</p>');} //*ARRAY of context
                        if(data.tokenBlock.taxonPaths!==undefined){jQuery('#stage').append('<p> taxonPaths: ' + data.tokenBlock.taxonPaths+ '</p>');} //*ARRAY of taxonPaths
                        if(data.tokenBlock.ageRange!==undefined){jQuery('#stage').append('<p> ageRange: ' + data.tokenBlock.ageRange+ '</p>');}
                        }
                        
                        
                         
                         
                        

                    
              
                        //-------------------*EXPRESSIONS contains multiple manifestions-------------------
                        jQuery('#stage').append('<p style="color:blue;"> ------- expressions -------- </p>');
                    
                        if(data.expressions!==undefined){
                        for(var i=0; i<data.expressions.length;i++)
                        {
                            var expression = data.expressions[i]; //this expression
                            jQuery('#stage').append('<p> expressions.language: ' + expression.language + '</p>');
                    
                            //*manifestions
                            for(var j=0; i<expression.manifestations.length;i++)
                            {
                                var manifestation = expression.manifestations[j]; //this manifestion
                                jQuery('#stage').append('<p> expressions.manifestations.identifier: ' + manifestation.identifier + '</p>');
                                jQuery('#stage').append('<p> expressions.manifestations.name: ' + manifestation.name + '</p>');
                                jQuery('#stage').append('<p> expressions.manifestations.parameter: ' + manifestation.parameter + '</p>');
                                jQuery('#stage').append('<p> expressions.manifestations.duration: ' + manifestation.duration + '</p>');
                    
                                for(var k=0; k< manifestation.items.lenght ;k++)
                                {
                                    var item = manifestation.items[k]; //this item
                                    jQuery('#stage').append('<p> expressions.manifestations.items.url: ' + item.url + '</p>');
                                    jQuery('#stage').append('<p> expressions.manifestations.items.broken: ' + item.broken + '</p>');
                                }//end-for item
                            }//end-for manifestion
                        }//end-for expression
                        }//end-if
                
      
               
                    
                    
                    
                        //-------------------RIGHTS-------------------
                        jQuery('#stage').append('<p style="color:blue;"> ------- rights -------- </p>');
                    
                        jQuery('#stage').append('<p> rights: ' + data.rights.url+ '</p>');
                    
                        if(data.rights.description!==undefined){
                        for(var i=0; i<data.rights.description.length;i++)
                        {jQuery('#stage').append('<p> rights: ' + data.rights.description[i]+ '</p>');}
                        }//end if
                    
                        
                    
                    
                        //-------------------*CONTRIBUTORS-------------------
                        jQuery('#stage').append('<p style="color:blue;"> ------- contributors-------- </p>');
                    
                        if(data.contributors!==undefined){
                        for(var i=0; i<data.contributors.length;i++){
                            var contributor = data.contributors[i]; //this contributor
                            jQuery('#stage').append('<p> contributors.role: ' + contributor.role+ '</p>');
                            jQuery('#stage').append('<p> contributors.name: ' + contributor.name+ '</p>');
                            jQuery('#stage').append('<p> contributors.organization: ' + contributor.organization+ '</p>');
                            jQuery('#stage').append('<p> contributors.date: ' + contributor.date+ '</p>');
                        }}
                    
                    
                    jQuery('#stage').append('<p style="color:blue;"> ------- end-------- </p>');
                    
                    }});
        
    }


//gets needed attributes and render them in the item.html
function getItemJSON(urlTemp)
{
    //alert("getItemJSON!");
    jQuery.ajax({
        url: urlTemp,
        mimeType: "textPlain",
        dataType: "json",
        //dataType: "json",
        success: function(data)
        {
                
            //if languageBlocks is an array and isn't empty
            if(data.languageBlocks.length!==undefined && data.languageBlocks!==undefined )
            {
                for(var i = 0; i<data.languageBlocks.length; i++)//run all different languages version of this item
                {
                    var language = Object.keys(data.languageBlocks[i]); //keys for different language versions of this item. (i.e en, gr, no,)
                
                    languageBlock = data.languageBlocks[i][language[0]]; // We always get language[0] as key
                
                    //jQuery('#stage').append('<p> languageBlocks.title: ' + language[0] + '</p>'); // language code
                    document.getElementById('itemTitle').innerHTML = languageBlock.title;
                    document.getElementById('itemDescription').innerHTML = languageBlock.description;

                if(data.expressions[0].manifestations[0].items[0].url!==undefined)
                {
                        jQuery('#itemAccess').append('<a target="_blank" href="'+data.expressions[0].manifestations[0].items[0].url+'" class="access  secondary">Access to the resource</a>');
                        jQuery('#itemThumb').append('<a href="'+data.expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="http://open.thumbshots.org/image.aspx?url='+data.expressions[0].manifestations[0].items[0].url+'" /> </a>');
                }
                
                if(data.tokenBlock.ageRange!==undefined){
                    jQuery('#ageRange').append(data.tokenBlock.ageRange);
                    jQuery('#itemAgeRange').append(data.tokenBlock.ageRange);
                }
                if(data.rights.url!==undefined){ 
                    jQuery('#itemRights').append('<a href="'+data.rights.url+'" class="secondary" target="_blank">'+data.rights.url+'</a>');
                }
                
                if(data.tokenBlock.endUserRoles.length!==undefined)
                {
                    for(var j=0; j<data.tokenBlock.endUserRoles.length;j++)//*ARRAY of keywords in current version
                    {
                        jQuery('#itemEducationalContext').append('<a  href="#" class="secondary">'+data.tokenBlock.endUserRoles[j]+'</a>');
                    }
                }
                if(data.tokenBlock.learningResourceTypes.length!==undefined)
                {
                    for(var j=0; j<data.tokenBlock.learningResourceTypes.length;j++)//*ARRAY of keywords in current version
                    {
                        jQuery('#itemResourceType').append('<a  href="#" class="secondary">'+data.tokenBlock.learningResourceTypes[j]+'</a>');
                    }
                }
                if(data.tokenBlock.contexts.length!==undefined)
                {
                    for(var j=0; j<data.tokenBlock.contexts.length;j++)//*ARRAY of keywords in current version
                    {
                        jQuery('#itemIntendedAudience').append('<a  href="#" class="secondary">'+data.tokenBlock.contexts[j]+'</a>');
                    }
                }
                
                
                    if(languageBlock.keywords.length!==undefined)
                    {
                        for(var j=0; j<languageBlock.keywords.length;j++)//*ARRAY of keywords in current version
                        {
                            jQuery('#itemKeywords').append('<a  href="listing.html?query='+languageBlock.keywords[j]+'" class="secondary">'+languageBlock.keywords[j]+'</a>');
                        }
                    }
                
                }
            }
                
                
                
            //if languageBlocks has ONLY one value => not array
            if(data.languageBlocks.length==undefined && data.languageBlocks!==undefined )
            {
                var language = Object.keys(data.languageBlocks); //keys for different language versions of this item. (i.e en, gr, no,)
                
                languageBlock = data.languageBlocks[language[0]]; // We always get language[0] as key
                
                //jQuery('#stage').append('<p> languageBlocks.title: ' + language[0] + '</p>'); // language code
                document.getElementById('itemTitle').innerHTML = languageBlock.title ;
                document.getElementById('itemDescription').innerHTML = languageBlock.description;


                if(data.expressions[0].manifestations[0].items[0].url!==undefined)
                {
                        jQuery('#itemAccess').append('<a target="_blank" href="'+data.expressions[0].manifestations[0].items[0].url+'" class="access  secondary">Access to the resource</a>');
                        jQuery('#itemThumb').append('<a href="'+data.expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="http://open.thumbshots.org/image.aspx?url='+data.expressions[0].manifestations[0].items[0].url+'" /> </a>');
                }
                
                
                if(data.tokenBlock.ageRange!==undefined){
                    jQuery('#ageRange').append(data.tokenBlock.ageRange);
                    jQuery('#itemAgeRange').append(data.tokenBlock.ageRange);
                }
                if(data.rights.url!==undefined){ 
                    jQuery('#itemRights').append('<a href="'+data.rights.url+'" class="secondary" target="_blank">'+data.rights.url+'</a>');
                }
                
                if(data.tokenBlock.endUserRoles.length!==undefined)
                {
                    for(var j=0; j<data.tokenBlock.endUserRoles.length;j++)//*ARRAY of keywords in current version
                    {
                        jQuery('#itemEducationalContext').append('<a  href="#" class="secondary">'+data.tokenBlock.endUserRoles[j]+'</a>');
                    }
                }
                if(data.tokenBlock.learningResourceTypes.length!==undefined)
                {
                    for(var j=0; j<data.tokenBlock.learningResourceTypes.length;j++)//*ARRAY of keywords in current version
                    {
                        jQuery('#itemResourceType').append('<a  href="#" class="secondary">'+data.tokenBlock.learningResourceTypes[j]+'</a>');
                    }
                }
                if(data.tokenBlock.contexts.length!==undefined)
                {
                    for(var j=0; j<data.tokenBlock.contexts.length;j++)//*ARRAY of keywords in current version
                    {
                        jQuery('#itemIntendedAudience').append('<a  href="#" class="secondary">'+data.tokenBlock.contexts[j]+'</a>');
                    }
                }
                
                
                if(languageBlock.keywords.length!==undefined)
                {
                    for(var j=0; j<languageBlock.keywords.length;j++)//*ARRAY of keywords in current version
                    {
                        jQuery('#itemKeywords').append('<a  href="listing.html?query='+languageBlock.keywords[j]+'" class="secondary">'+languageBlock.keywords[j]+'</a>');
                    }
                }
                
            }
                
                
        }
                
    });
}


//Items is an array with the names of the jsons.
//WE ASSUME THAT WE WANT 3 ITEMS PER SLIDE
//!!! Function may change to follow the storage format ../3LastDigits/XXX3LastDigits
function getFeaturedItems(items, urlPath)
{
    var itemsPerSlide = 3;
    var numOfSlides= Math.ceil(items.length/itemsPerSlide); //rounds up the value
    
    var functionsQueue = [];
    var itemsLength = items.length;
    
    for(var i=0;i<numOfSlides;i++)
    {
        jQuery('#FeaturedItemsSlider').append('<div class="slider_page"><ul id="slide'+i+'">');
        
    }
    
    console.log('TEST0:');
    
    for(var i=0; i<itemsLength;i++)//every item
    {
        
            
            var fileUrl = urlPath + items[i] + ".json";
        
            var belongsToSlide = Math.floor(i/itemsPerSlide);
        
            console.log('TEST1-belongsToSlide:'+belongsToSlide);
        
        
            var thisItem = getFeaturedItem(fileUrl, belongsToSlide);
        
        
            functionsQueue.push(thisItem);
        
            if(i===itemsLength-1)
            {var changeToSlide = function(){jQuery('#FeaturedItemsSlider').addClass("is_slider");} }
        
            functionsQueue.push(changeToSlide);
            
                 
        //}//end inner loop - j
        
        
    }//end outter loop -i
    
    while (functionsQueue.length > 0) {
        functionsQueue.shift();
    }

}

//CHANGE THIS FUNCTION WITH GEORGE.
//CONFLICT PROBLEMS WITH SLIDERs JQUERY AND getJSON AJAX CALLS
function getFeaturedItem(urlTemp, belongsToSlide)
{
    
    jQuery.ajax({
                url: urlTemp,
                mimeType: "textPlain",
                dataType: "json",
                async:false,
                success: function(data)
                {
                console.log('TEST2:'+urlTemp);
                
                //if languageBlocks is an array and isn't empty
                if(data.languageBlocks.length!==undefined && data.languageBlocks!==undefined )
                {
                for(var k = 0; k<data.languageBlocks.length; k++)//run all different languages version of this item
                {
                var language = Object.keys(data.languageBlocks[k]); //keys for different language versions of this item. (i.e en, gr, no,)
                
                languageBlock = data.languageBlocks[k][language[0]]; // We always get language[0] as key
                
                jQuery('#slide'+belongsToSlide).append('<li class="clearfix slider_page_listitem movie_label"><div><h2><a href="#">'+languageBlock.title+'</a></h2><p>The video describes the importance of the timely vaccination in livestock, in order to prevent the occasionally occurring Foot and Mouth Disease (FMD).</p><div class="info clearfix"><div class="floatleft"><label>Keywords:</label><a href="#">Digital Green,</a><a href="#">Cattle,</a></div></div></div></li>');
                
                
                }}
                
                //if languageBlocks has ONLY one value => not array
                if(data.languageBlocks.length==undefined && data.languageBlocks!==undefined )
                {
                
                var language = Object.keys(data.languageBlocks); //keys for different language versions of this item. (i.e en, gr, no,)
                
                languageBlock = data.languageBlocks[language[0]]; // We always get language[0] as key
                
                jQuery('#slide'+belongsToSlide).append('<li class="clearfix slider_page_listitem movie_label"><div><h2><a href="#">'+languageBlock.title+'</a></h2><p>The video describes the importance of the timely vaccination in livestock, in order to prevent the occasionally occurring Foot and Mouth Disease (FMD).</p><div class="info clearfix"><div class="floatleft"><label>Keywords:</label><a href="#">Digital Green,</a><a href="#">Cattle,</a></div></div></div></li>');
              
                
                
                
                }
                }
                
                });

}

// ADD THE LINK TO THE BANNER IMAGES
function imageClick(url) {window.location = url;}








