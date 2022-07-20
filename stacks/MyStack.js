import { Api } from "@serverless-stack/resources";

export function MyStack({ stack }) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
      "GET /help": "functions/lambda.handler2",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url
  });
}
