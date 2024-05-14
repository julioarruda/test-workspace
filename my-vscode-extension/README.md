# My VS Code Extension

This is a VS Code extension that provides additional functionality to enhance your coding experience, including a new chatbot feature powered by Azure OpenAI GPT-4-32k to answer programming questions and maintain historical data.

## Installation

To install the extension, follow these steps:

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the square icon on the left sidebar or by pressing `Ctrl+Shift+X`.
3. Search for "My VS Code Extension" in the search bar.
4. Click on the "Install" button next to the extension.
5. Once the installation is complete, you can start using the extension.

## Features

- Feature 1: Describe the first feature of your extension.
- Feature 2: Describe the second feature of your extension.
- Feature 3: Describe the third feature of your extension.
- **New! Chatbot Feature**: Interact with a chatbot that answers programming questions using Azure OpenAI GPT-4-32k, and maintains a history of your queries.

## Usage

To use the extension, follow these steps:

1. Open a file in Visual Studio Code.
2. Use the extension commands to perform specific actions.
3. To interact with the chatbot, use the command palette (`Ctrl+Shift+P`) and select "Chat with the Code Assistant".

## Configuration

The extension can be configured by modifying the following files:

- `.vscode/launch.json`: This file is used to configure the launch configurations for debugging the VS Code extension.
- `.vscode/tasks.json`: This file is used to configure tasks that can be run from the VS Code command palette.
- `tsconfig.json`: This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

### Azure OpenAI Integration

To configure the Azure OpenAI integration for the chatbot feature:

1. Obtain an API key from Azure OpenAI.
2. Create a `.env` file in the root of your project.
3. Add the following line to your `.env` file: `AZURE_OPENAI_KEY=your_api_key_here`.
4. Use the `setup-azure-openai` script included in the `package.json` to verify the integration.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please create an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/my-vscode-extension).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or need assistance, feel free to contact me at [your-email@example.com](mailto:your-email@example.com).

---

This file is intentionally left blank.
