import { NlpManager } from 'node-nlp';

const manager = new NlpManager({ languages: ['en'], forceNER: true });

// Adds the intents and responses for the chatbot
function addIntents() {
    manager.addDocument('en', 'hello', 'greet');
    manager.addDocument('en', 'goodbye', 'farewell');
    manager.addDocument('en', 'how are you', 'askHealth');

    manager.addAnswer('en', 'greet', 'Hello there!');
    manager.addAnswer('en', 'farewell', 'Goodbye!');
    manager.addAnswer('en', 'askHealth', 'I am a bot, I do not have feelings but thanks for asking!');
}

// Train and save the model
async function trainAndSave() {
    await manager.train();
    manager.save();
}

// Process a given message and return the response
export async function processMessage(message: string) {
    await manager.load();
    const response = await manager.process('en', message);
    return response.answer;
}

// Initialize the chatbot by adding intents and training the model
async function initChatbot() {
    addIntents();
    await trainAndSave();
}

initChatbot().then(() => console.log('Chatbot is ready'));

