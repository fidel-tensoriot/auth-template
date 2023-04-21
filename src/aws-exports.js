const awsmobile = {
    aws_project_region: "us-east-1", // changed
    aws_cognito_identity_pool_id:
        "us-east-1:12ddeb51-fb68-45d6-9e05-72025eedada3", //changed
    aws_cognito_region: "us-east-1", //changed
    aws_user_pools_id: "us-east-1_Ge8ZN9uz6", //changed
    aws_user_pools_web_client_id: "1nqvf84rk65eklstkn9nq98kop", //changed
    oauth: {},
    aws_cognito_username_attributes: ["EMAIL"],
    aws_cognito_social_providers: [],
    aws_cognito_signup_attributes: ["EMAIL"],
    aws_cognito_mfa_configuration: "OFF",
    aws_cognito_mfa_types: ["SMS"],
    aws_cognito_password_protection_settings: {
        passwordPolicyMinLength: 6,
        passwordPolicyCharacters: [],
    },
    aws_cognito_verification_mechanisms: ["EMAIL"],
};

const aws = {
    Auth: {
        identityPoolId: "us-east-1:12ddeb51-fb68-45d6-9e05-72025eedada3", // REQUIRED - Amazon Cognito Identity Pool ID
        region: "us-east-1", // REQUIRED - Amazon Cognito Region
        userPoolId: "us-east-1_Ge8ZN9uz6", // OPTIONAL - Amazon Cognito User Pool ID for authenticated user access
        userPoolWebClientId: "1nqvf84rk65eklstkn9nq98kop", // OPTIONAL - Amazon Cognito Web Client ID for authenticated user access
    },
    geo: {
        AmazonLocationService: {
            maps: {
                items: {
                    Map1: {
                        // REQUIRED - Amazon Location Service Map resource name
                        style: "VectorEsriStreets", // REQUIRED - String representing the style of map resource
                    },
                },
                default: "Map1", // REQUIRED - Amazon Location Service Map resource name to set as default
            },
            region: "us-east-1", // REQUIRED - Amazon Location Service Region
        },
    },
};
export default aws;
