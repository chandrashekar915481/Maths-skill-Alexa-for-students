// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome , how may i help you?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const AdditionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AdditionIntent';
    },
    handle(handlerInput) {
        var x = handlerInput.requestEnvelope.request.intent.slots.x.value;
        var y = handlerInput.requestEnvelope.request.intent.slots.y.value;
        var plus = handlerInput.requestEnvelope.request.intent.slots.plus.value;
        x=parseInt(x);
        y=parseInt(y);
        var z=x+y;
        let speakOutput=''
        if(plus){
            speakOutput=x.toString()+' '+plus+' '+y.toString()+" is "+z;
        }
        else{
         speakOutput = 'Addition of '+x+" and "+y+" is "+z;}
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            
            .getResponse();
    }
};
const EvenOrOddIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EvenOrOddIntent';
    },
    handle(handlerInput) {
        var x = handlerInput.requestEnvelope.request.intent.slots.n.value;
        
        x=parseInt(x);
        
        
        let speakOutput=''
        if(x%2===0){
            speakOutput=x.toString()+' is Even ';
        }
        else{
         speakOutput = x.toString()+' is Odd';}
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PrimeOrNotPrimeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PrimeOrNotPrimeIntent';
    },
    handle(handlerInput) {
        var x = handlerInput.requestEnvelope.request.intent.slots.n.value;
        let speakOutput='';
        var  i, flag = true; 
              
            // Getting the value form text 
            // field using DOM 
            
            x = parseInt(x) 
            for(i = 2; i <= x - 1; i++) 
                if (x % i === 0) { 
                    flag = false; 
                    break; 
                } 
                  
                // Check and display alert message 
            if (flag === true) 
                speakOutput=x + " is prime"; 
            else
                speakOutput=x + " is not prime"; 
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            
            .getResponse();
    }
};
const MultiplicationTableIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicationTableIntent';
    },
    handle(handlerInput) {
        var x = handlerInput.requestEnvelope.request.intent.slots.n.value;
        
        
        x=parseInt(x);
        let speakOutput='';
        for(var i=1; i<=10; i++){
            let k=x*i;
            speakOutput+=' '+x+' into '+i+' equal to '+k+' .';
            
        }
     
    
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            
            .getResponse();
    }
    
};
const HcfOfTwoNumbersIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HcfOfTwoNumbersIntent';
    },
    handle(handlerInput) {
        var x = handlerInput.requestEnvelope.request.intent.slots.x.value;
        var y = handlerInput.requestEnvelope.request.intent.slots.y.value;
        
        x=parseInt(x);
        y=parseInt(y);
        let speakOutput=''
        var gcd = function(a, b) {
    if (b ===0) {
        return a;
    }
return gcd(b, a % b);
};
        
    let z=gcd(x,y);
    speakOutput="g c d or h c f of "+x+' and '+y+' is '+z;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
           
            .getResponse();
            
    }
    
};
const SubtractionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SubtractionIntent';
    },
    handle(handlerInput) {
        var x = handlerInput.requestEnvelope.request.intent.slots.x.value;
        var y = handlerInput.requestEnvelope.request.intent.slots.y.value;
        var minus = handlerInput.requestEnvelope.request.intent.slots.minus.value;
        x=parseInt(x);
        y=parseInt(y);
        var z=x-y;
        let speakOutput=''
        if(minus){
            speakOutput=x.toString()+' '+minus+' '+y.toString()+" is "+z;
        }
        else{
         speakOutput = 'Subtraction of '+x+" and "+y+" is "+z;}
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const LcmOfTwoNumbersIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LcmOfTwoNumbersIntent';
    },
    handle(handlerInput) {
        var x = handlerInput.requestEnvelope.request.intent.slots.x.value;
        var y = handlerInput.requestEnvelope.request.intent.slots.y.value;
        
        x=parseInt(x);
        y=parseInt(y);
        let speakOutput=''
        let lcm = (n1, n2) => {
          //Find the smallest and biggest number from both the numbers
          let lar = Math.max(n1, n2);
          let small = Math.min(n1, n2);
      
      //Loop till you find a number by adding the largest number which is divisble by the smallest number
      let i = lar;
      while(i % small !== 0){
        i += lar;
      }
      
      //return the number
      return i;
    }
    let z=lcm(x,y);
    speakOutput="l c m of "+x+' and '+y+' is '+z;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AreaAndPerimeterOfRectangleIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AreaAndPerimeterOfRectangleIntent';
    },
    handle(handlerInput) {
        var l= handlerInput.requestEnvelope.request.intent.slots.l.value;
        var b = handlerInput.requestEnvelope.request.intent.slots.b.value;
        var  a= handlerInput.requestEnvelope.request.intent.slots.area.value;
        var  p= handlerInput.requestEnvelope.request.intent.slots.perimeter.value;
        l=parseInt(l);
        b=parseInt(b);
        let area=l*b;
        
        let peri=2*(l+b);
        
        let speakOutput='';
        if(a!==undefined && p!==undefined){
           speakOutput='Area of rectangle is length into breadth . and area is '+area+' and Perimeter of rectangle is two into length plus two into breadth . and perimeter is '+peri;
           
        }
        else if(a===undefined &&p!==undefined){
         speakOutput = "Perimeter of rectangle is two into length plus two into breadth . and perimeter is "+peri;}
        else if(p===undefined&&a!==undefined){
            speakOutput='Area of rectangle is length into breadth . and area is '+area;
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AreaAndPerimeterOfRhombusIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AreaAndPerimeterOfRhombusIntent';
    },
    handle(handlerInput) {
        var h= handlerInput.requestEnvelope.request.intent.slots.h.value;
        var b = handlerInput.requestEnvelope.request.intent.slots.b.value;
        var  a= handlerInput.requestEnvelope.request.intent.slots.area.value;
        var  p= handlerInput.requestEnvelope.request.intent.slots.perimeter.value;
        h=parseInt(h);
        b=parseInt(b);
        let area=h*b;
        let peri=4*h;
        let speakOutput='';
        if(a!==undefined && p!==undefined){
           speakOutput='Area of Rhombus is height into breadth . and area is '+area+' and Perimeter of Rhombus is four into height . And Perimeter is '+peri;
           
        }
        else if(a===undefined &&p!==undefined){
         speakOutput = "Perimeter of Rhombus is four into height . And perimeter is"+peri;}
        else if(p===undefined&&a!==undefined){
            speakOutput='Area of Rhombus is length into breadth . and area is '+area;
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AreaAndPerimeterOfSquareIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AreaAndPerimeterOfSquareIntent';
    },
    handle(handlerInput) {
        var l= handlerInput.requestEnvelope.request.intent.slots.s.value;
        
        var  a= handlerInput.requestEnvelope.request.intent.slots.area.value;
        var  p= handlerInput.requestEnvelope.request.intent.slots.perimeter.value;
        l=parseInt(l);
        
        let area=l*l;
        
        let peri=4*l;
        
        let speakOutput='';
        if(a!==undefined && p!==undefined){
           speakOutput='Area of square is s square . and area is '+area+'and Perimeter of square is four into side . and perimeter is '+peri;
           
        }
        else if(a===undefined &&p!==undefined){
         speakOutput = "Perimeter of square is four into side and perimeter is "+peri;}
        else if(p===undefined&&a!==undefined){
            speakOutput='Area of square is s square . and area is '+area;
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SurfaceAreaAndVolumeOfCubeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SurfaceAreaAndVolumeOfCubeIntent';
    },
    handle(handlerInput) {
        var l= handlerInput.requestEnvelope.request.intent.slots.a.value;
        
        var  a= handlerInput.requestEnvelope.request.intent.slots.volume.value;
        var  p= handlerInput.requestEnvelope.request.intent.slots.surfacearea.value;
        l=parseInt(l);
        
        let area=l*l;
        
        let peri=l*l*l;
        
        let speakOutput='';
        if(a!==undefined && p!==undefined){
           speakOutput='surface area of cube is '+area+'and volume of cube is '+peri;
           
        }
        else if(p===undefined &&a!==undefined){
         speakOutput = "volume of cube is "+peri;}
        else if(a===undefined&&p!==undefined){
            speakOutput='surface area of cube is '+area;
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SurfaceAreaAndVolumeOfSphereIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SurfaceAreaAndVolumeOfSphereIntent';
    },
    handle(handlerInput) {
        var l= handlerInput.requestEnvelope.request.intent.slots.r.value;
        
        var  a= handlerInput.requestEnvelope.request.intent.slots.volume.value;
        var  p= handlerInput.requestEnvelope.request.intent.slots.surfacearea.value;
        l=parseInt(l);
        
        let area=4*3.14*l*l;
        area=area.toFixed(2)
        let peri=(4*3.14*l*l*l)/3;
        peri=peri.toFixed(2)
        
        let speakOutput='';
        if(a!==undefined && p!==undefined){
           speakOutput='surface area of cube is '+area+'and volume of cube is '+peri;
           
        }
        else if(a===undefined &&p!==undefined){
         speakOutput = "volume of cube is "+peri;}
        else if(p===undefined&&a!==undefined){
            speakOutput='surface area of cube is '+area;
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AreaAndPerimeterOfEquilateralTriangleIntentHandler= {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AreaAndPerimeterOfEquilateralTriangleIntent';
    },
    handle(handlerInput) {
        var l= handlerInput.requestEnvelope.request.intent.slots.a.value;
        
        var  a= handlerInput.requestEnvelope.request.intent.slots.area.value;
        var  p= handlerInput.requestEnvelope.request.intent.slots.perimeter.value;
        l=parseInt(l);
        
        let area=(1/4)*1.732*l;
        
        let peri=3*l;
        
        let speakOutput='';
        if(a!==undefined && p!==undefined){
           speakOutput='Area of equilateral triangle is '+area+'and Perimeter of equilateral triangle is '+peri;
           
        }
        else if(a===undefined &&p!==undefined){
         speakOutput = "Perimeter of equilateral triangle is "+peri;}
        else if(p===undefined&&a!==undefined){
            speakOutput='Area of equilateral triangle is '+area;
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const AreaAndPerimeterOfCircleIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AreaAndPerimeterOfCircleIntent';
    },
    handle(handlerInput) {
        var r= handlerInput.requestEnvelope.request.intent.slots.r.value;
        
        var  a= handlerInput.requestEnvelope.request.intent.slots.area.value;
        var  c= handlerInput.requestEnvelope.request.intent.slots.circumference.value;
        r=parseInt(r);
        
        let area=3.14*r*r;
        area=area.toFixed(2)
        let circum=2*3.14*r;
        circum=circum.toFixed(2)
        let speakOutput='';
        if(a!==undefined && c!==undefined){
           speakOutput='Area of circle is '+area+'and Circumferance of circle is '+circum;
           
        }
        else if(a===undefined &&c!==undefined){
         speakOutput = "Circumferance of circle is "+circum;}
        else if(c===undefined&&a!==undefined){
            speakOutput='Area of circle is '+area;
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MultiplicationIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicationIntent';
    },
    handle(handlerInput) {
        var x = handlerInput.requestEnvelope.request.intent.slots.x.value;
        var y = handlerInput.requestEnvelope.request.intent.slots.y.value;
        x=parseInt(x);
        y=parseInt(y);
        var z=x*y;
        let speakOutput=''
            
        speakOutput = 'Multiplication of '+x+" and "+y+" is "+z;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        var x = handlerInput.requestEnvelope.request.intent.slots.x.value;
        var y = handlerInput.requestEnvelope.request.intent.slots.y.value;
        x=parseInt(x);
        y=parseInt(y);
        var z=x/y;
        let speakOutput=''
            
        speakOutput = 'Division of '+x+" and "+y+" is "+z;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Hope you loved it and visit again';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        AdditionIntentHandler,
        SubtractionIntentHandler,
        MultiplicationIntentHandler,
        DivisionIntentHandler,
        HelpIntentHandler,
        MultiplicationTableIntentHandler,
        AreaAndPerimeterOfRectangleIntentHandler,
        AreaAndPerimeterOfCircleIntentHandler,
        AreaAndPerimeterOfSquareIntentHandler,
        PrimeOrNotPrimeIntentHandler,
        AreaAndPerimeterOfEquilateralTriangleIntentHandler,
        AreaAndPerimeterOfRhombusIntentHandler,
        SurfaceAreaAndVolumeOfCubeIntentHandler,
        LcmOfTwoNumbersIntentHandler,
        SurfaceAreaAndVolumeOfSphereIntentHandler,
        CancelAndStopIntentHandler,
        HcfOfTwoNumbersIntentHandler,
        EvenOrOddIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
