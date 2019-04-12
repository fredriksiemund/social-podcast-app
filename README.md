# Social Podcast App

## Setup project on VS Code:

1. Install [VS Code](https://code.visualstudio.com/)
2. Open VS Code, go to extensions and install "ESLint" and "Prettier - Code formatter".
3. Go to Settings -> Extensions -> Prettier and set the following:
   - Eslint Integration: true
   - Semi: false
   - Single Quote: true
4. Go to Settings -> Text Editor -> Formatting and set the following:
   -Format On Save: true.

## Project structure

<!-- - src/config - Configurations for the app . For example, environment specific config for dev and prod, etc. -->
<!-- - src/utils - Services/utility files such as HTTP utility to make API calls, storage utility, data transformation utility, etc. -->

- `src/styles`- Global styles, themes, and mixins.
- `src/components` - All the functional components. These components will only do layouting and won't contain any states or business logic inside them. All the data to these components will be passed in as props.
- `src/screens` - The different screens used in the app.
- `src/routes` - The app's routing logic.
- `src/redux` - Redux state management files like actions, reducers, store config, thunks etc.

- `assets` - Images, videos and static files.

## Start the simulator

- Use `yarn ios` and `yarn android` to start the simulator. To run on android the simulator has to be started before the command is executed.
