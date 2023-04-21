# Auth Template

Just a simple project to showcase how to integrate cognito authorization into an App. We only have 2 routes, a landing page at `/` and a protected route at `/test`.
The landing page will be integrated with Amazon Location Services so that we can showcase `Cognito Identity Pool` while the `/test` page will be integrated with `Cognito User Pools` to showcase authentication.

-   User Pool - Authentication flow, Authorization, User data and roles.
-   Identity Pool - Give your users access to AWS resources, such as an Amazon Simple Storage Service (Amazon S3) bucket or an Amazon DynamoDB table o temporary credentials.

## Table of Contents

-   [Auth Template](#auth-template)
-   [Cognito Auth](#notes-for-cognito-auth)
    -   [F/E](#steps-for-fe)
    -   [B/E](#steps-for-be)
-   [Location Services](#notes-for-location-servicesgeo)
-   [Available Scripts](#available-scripts)

## Notes for Cognito Auth.

Amplify is a tool for F/E that can integrate with many backend services

-   [Amplify CLI](https://docs.amplify.aws/cli/) is a tool used to build backend resources from CLI, wont really go into it.
-   [Amplify Authentication Library](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/) documentation, goes over getting started and user management. Note that this talks about both amplify cli and the amplify library `aws-amplify`
    -   Can use the library to do things like connect to S3 [S3 Storage](https://docs.amplify.aws/lib/storage/getting-started/q/platform/js/#configure-your-application)
-   [Amplify UI](https://ui.docs.amplify.aws/react/connected-components/authenticator) a UI library of prebuilt component built on top of Material UI (I think?). This component handles the authentication flow automatically but is hard to style and customize. You can either use this component+library or do the api calls from `aws-amplify`.
    -   V1 is deprecated but you my run into it on older projects.
    -   Popular libraries in this UI are the [Authenticator](https://ui.docs.amplify.aws/react/connected-components/authenticator) and [GEO/MAP](https://ui.docs.amplify.aws/react/connected-components/geo)

### Steps for F/E

-   Install Amplify Library and Amplify UI
    -   `npm install aws-amplify @aws-amplify/ui-react`
-   create `aws-export.js` file and update values
-   In `index.js` Configure `Amplify.configure()` and wrap App in Amplify Provider
-   In App use Authenticator from `@aws-amplify/ui-react` to handle token and all auth needs. \*optional create an auth wrapper for routes.

### Steps for B/E

-   deploy Cognito User Pool and if needed Federated Identity
    -   go through deployment steps.
    -   grab details to put into react apps `aws-export.js`

---

## Notes for Location Services/Geo

Please review the [Amazon Location Services Getting Started Doc](https://docs.aws.amazon.com/location/latest/developerguide/getting-started.html)

For Amplify Geo you will need to setup permissions for users in the Cognito Federated Pool to be able to access the service. [Location Services permissions](https://docs.amplify.aws/lib/geo/existing-resources/q/platform/js/)

Link for Amplify UI Geo component [AMplify UI GEO](https://docs.amplify.aws/lib/geo/maps/q/platform/js/)

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
