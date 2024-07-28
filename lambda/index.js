const Alexa = require('ask-sdk-core');

const GetFeedingReminderIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetFeedingReminderIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Varun Remember to feed your pet at 7 AM and 7 PM daily.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput) 
            .getResponse();
             
    }
};

const GetGroomingTipIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetGroomingTipIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Regularly brush your pet to keep their coat healthy and reduce shedding.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput) // Reprompt to keep session open
            .getResponse();
    }
};

const GetPetCareAdviceIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetPetCareAdviceIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Ensure your pet gets regular exercise, a balanced diet, and routine vet check-ups.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput) // Reprompt to keep session open
            .getResponse();
    }
};

const SetMedicationReminderIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SetMedicationReminderIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Medication reminder set for 8 AM daily.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput) // Reprompt to keep session open
            .getResponse();
    }
};

const ScheduleVetAppointmentIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ScheduleVetAppointmentIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Vet appointment scheduled for next Saturday at 10 AM.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput) // Reprompt to keep session open
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say things like, give me a feeding reminder, or, tell me a grooming tip.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput) // Reprompt to keep session open
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
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput) // Reprompt to keep session open
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        GetFeedingReminderIntentHandler,
        GetGroomingTipIntentHandler,
        GetPetCareAdviceIntentHandler,
        SetMedicationReminderIntentHandler,
        ScheduleVetAppointmentIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();