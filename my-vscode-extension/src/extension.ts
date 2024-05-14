import * as vscode from 'vscode';
import { startChatbotServer } from './chatbot/server';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "my-vscode-extension" is now active!');

    // Initialize and start the chatbot server on extension activation
    startChatbotServer();

    let disposable = vscode.commands.registerCommand('extension.activate', () => {
        vscode.window.showInformationMessage('Chatbot activated!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
