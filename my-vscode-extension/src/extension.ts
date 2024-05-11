import * as vscode from 'vscode';
import { OpenAIApi, Configuration } from "openai";

// Initialize Azure OpenAI with API key
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.activate', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const text = editor.document.getText(editor.selection);
            // Fetch code suggestions from Azure OpenAI
            const response = await openai.createCompletion({
                model: "code-davinci-002",
                prompt: text,
                temperature: 0.7,
                max_tokens: 150,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
            });

            const suggestion = response.data.choices[0].text.trim();
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, suggestion);
            });
        }
    });

    context.subscriptions.push(disposable);

    // Chatbot feature similar to GitHub Copilot chat
    let chatDisposable = vscode.commands.registerCommand('extension.chatWithAI', async () => {
        const input = await vscode.window.showInputBox({ prompt: 'Ask me anything about coding!' });
        if (input) {
            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: input,
                temperature: 0.7,
                max_tokens: 150,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
            });

            const answer = response.data.choices[0].text.trim();
            vscode.window.showInformationMessage(answer);
        }
    });

    context.subscriptions.push(chatDisposable);
}

export function deactivate() {}
