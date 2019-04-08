(function(_window,_document,ajaxRequest){
            let configuration={
            	selector:"input[data-action='register']"
            }
            
        	this.ActionWrapper=function(){
                if (arguments[0] && typeof arguments[0] === "object") {
					configuration=extendDefaults(configuration, arguments[0]);
                }
            }
            
            function onclick(){
                const scope=this;
                let actFunction=scope.dataset.actionfunction;
                let parameters=scope.dataset.parameter;
                let defaultvalue=scope.dataset.default;
                
                let selectors=parameters.split(",");
                let values=[];
                selectors.forEach(function(dom,index){
                    var domEle=document.querySelector(dom);
                    if(!!domEle.value && domEle.value.trim().length>0){
                    	values.push(domEle.value);
                    }else{
                    	if(!!domEle.dataset["defaultvalue"]){
                        	values.push(domEle.dataset["defaultvalue"]);
                        }else{
                        	values.push("");
                        }
                    }
                });
                if(!!defaultvalue){
                    values.push(defaultvalue);
                }
                window[actFunction].apply(null,values);
          	}
            
            // Utility method to extend defaults with user options
            let extendDefaults=(source, properties)=>{
                var property;
                for (property in properties) {
                    if (properties.hasOwnProperty(property)) {
                        source[property] = properties[property];
                    }
                }
                return source;
            }
            
            this.ActionWrapper.prototype.config=configuration;
        
            this.ActionWrapper.prototype.Initialize=()=>{
            	let eleSelector=configuration.selector;
                let eleCount=_document.querySelectorAll(eleSelector);
                SubscribeEvents(eleCount);
            }
            
            let SubscribeEvents=(domElements)=>{
            	domElements.forEach(function(domElement,index){
                    let actionfunction=domElement.dataset.actionfunction;
                    if(!!actionfunction){
                        domElement.addEventListener("click",onclick,false);
                    }
            	});
            }
            
            XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
                this.addEventListener("readystatechange", function() {
                    console.log(this.readyState); // this one I changed
                }, false);
                ajaxRequest.call(this, method, url, async, user, pass);
            };

            _window.onload=function(){
         		let wrapper=new ActionWrapper();
         		wrapper.Initialize();
                console.log("loaded");
            }
                
})(window,document,XMLHttpRequest.prototype.open);