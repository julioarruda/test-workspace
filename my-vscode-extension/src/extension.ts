import * as vscode from 'vscode';
import { AzureOpenAIClient, GPT4_32k } from 'azure-openai';

let historicalData: { question: string; answer: string }[] = [];

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.chatWithBot', async () => {
    const azureClient = new AzureOpenAIClient(process.env.AZURE_OPENAI_KEY);
    const chatInput = await vscode.window.showInputBox({ prompt: 'Ask me a programming question' });

    if (chatInput) {
      const response = await azureClient.queryGPT4_32k(chatInput, GPT4_32k.Programming);
      const answer = response.data.choices[0].text.trim();

      historicalData.push({ question: chatInput, answer });
      vscode.window.showInformationMessage(answer);
    }
  });

  context.subscriptions.push(disposable);

  let historyDisposable = vscode.commands.registerCommand('extension.viewHistory', () => {
    const historyString = historicalData.map(entry => `Q: ${entry.question}\nA: ${entry.answer}`).join('\n\n');
    vscode.window.showInformationMessage(historyString || 'No history available.');
  });

  context.subscriptions.push(historyDisposable);
}

export function deactivate() {}
