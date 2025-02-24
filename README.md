### Document describing design decisions and implementation details.

#### Design Decisions

  1. Used tailwind css for styling the app.
  2. Used Shadcn as the component/UI library for quick prototyping of the interactive and visual components.
  3. For making the UI responsive across screens used tailwinds utility classes for media queries.
  4. Made the layout of the dashboard overview as Grid Layout.


#### Implementation Details

  1. Used NextJS 14 (app router) for building the application.
  2. Used next middleware and cookies to persists the user authenticated state across the application.
  3. Used react-Oauth-library for implementing the google sign-in. Used the auth-flow implementation.
