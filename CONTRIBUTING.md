```markdown
# Contributing to Petcare Alexa Skill

Thank you for considering contributing to our project! Here are the guidelines for contributing:

## Branching Strategy

We follow a modified GitHub Flow branching strategy with additional branches for development and staging:

- **master**: The production-ready state of the code. Always deployable.
- **dev**: The development environment where initial development and integration happen.
- **feature branches**: Used for developing new features or bug fixes. Created from `dev` and merged back into `dev` via pull requests.

## Workflow

1. **Create a Feature Branch**

   ```sh
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes and Commit**

   Make your changes and commit them with clear and descriptive commit messages. Follow the commit message template below:

   ```
   <Title>

   [Problem]

   [Solution]

   [Ticket]
   <Trello Card link>
   ```

   ```sh
   git add .
   git commit
   ```

3. **Push Your Feature Branch**

   ```sh
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**

   - Go to the repository on GitHub.
   - Click on the "Pull requests" tab.
   - Click "New pull request".
   - Select `dev` as the base branch and your feature branch as the compare branch.
   - Add a title and description for your pull request.
   - Assign reviewers.

5. **Review and Merge**

   - Reviewers will provide feedback on your pull request.
   - Make any necessary changes and push them to the feature branch.
   
   ```sh
   git add .
   git commit
   git push origin feature/your-feature-name
   ```

   - Once approved, merge the pull request into `dev`.

## Commit Message Guidelines

- Use clear and descriptive commit messages.
- Follow the format: `type(scope): subject`
- Use the following commit message template:

  ```
  <Title>

  [Problem]

  [Solution]

  [Ticket]
  <Trello Card link>
  ```

### Example Commit Messages

- **Feature**: `feat(intent): add weather forecast intent`
  ```
  Add weather forecast intent to the skill

  [Problem]
  Users need to ask Alexa for the weather forecast for a specific location.

  [Solution]
  Implemented a new intent that retrieves and responds with the weather forecast using the OpenWeather API.

  [Ticket]
  https://trello.com/c/exampleticket
  ```

- **Fix**: `fix(intent): correct invocation name for the skill`
  ```
  Correct invocation name for the skill

  [Problem]
  The skill invocation name was not recognized properly by Alexa, causing failures in triggering the skill.

  [Solution]
  Updated the invocation name to meet Alexa's guidelines and tested the new name across all supported locales.

  [Ticket]
  https://trello.com/c/exampleticket
  ```

- **Docs**: `docs: update interaction model setup instructions`
  ```
  Update interaction model setup instructions

  [Problem]
  Developers found it challenging to set up the interaction model due to incomplete instructions.

  [Solution]
  Added detailed steps and examples for setting up the interaction model, including sample utterances and slot types.

  [Ticket]
  https://trello.com/c/exampleticket
  ```

- **Refactor**: `refactor(intent-handlers): streamline session management`
  ```
  Streamline session management in intent handlers

  [Problem]
  The session attributes handling was inconsistent across different intent handlers, leading to state management issues.

  [Solution]
  Refactored session management logic to use a common utility function across all intent handlers.

  [Ticket]
  https://trello.com/c/exampleticket
  ```

- **Test**: `test(e2e): add end-to-end tests for skill interaction`
  ```
  Add end-to-end tests for skill interaction

  [Problem]
  The skill's functionality was not thoroughly tested, leading to bugs in the deployed skill.

  [Solution]
  Implemented end-to-end tests using the Alexa Simulator to validate the skill's responses for various user interactions.

  [Ticket]
  https://trello.com/c/exampleticket
  ```

Thank you for your contributions!
```
