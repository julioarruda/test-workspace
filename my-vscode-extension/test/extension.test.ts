import * as assert from 'assert';
import * as vscode from 'vscode';
import { before, after } from 'mocha';
import * as myExtension from '../src/extension';

suite('Extension Test Suite', () => {
  before(() => {
    vscode.window.showInformationMessage('Start all tests.');
  });

  after(() => {
    vscode.window.showInformationMessage('All tests done!');
  });

  test('Azure OpenAI Integration', async () => {
    const result = await myExtension.queryAzureOpenAI("What is TypeScript?");
    assert.strictEqual(result.includes("TypeScript is"), true, "The Azure OpenAI integration test failed.");
  });

  test('Historical Data Maintenance', () => {
    myExtension.saveQuery("What is TypeScript?");
    const history = myExtension.getHistory();
    assert.strictEqual(history.length > 0, true, "The historical data maintenance test failed.");
    assert.strictEqual(history.some(entry => entry.question === "What is TypeScript?"), true, "The historical data maintenance test failed.");
  });

  test('User Interface Functionality', async () => {
    const inputBox = await vscode.window.showInputBox({ prompt: 'Ask a programming question' });
    assert.strictEqual(typeof inputBox, 'string', "The user interface functionality test failed.");
  });
});
