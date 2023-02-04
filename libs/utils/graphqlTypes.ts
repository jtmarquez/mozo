import {
  APIGatewayProxyEventBase,
  APIGatewayEventRequestContextWithAuthorizer,
} from 'aws-lambda';

interface RequestContext
  extends APIGatewayEventRequestContextWithAuthorizer<any> {
  http: { method: string };
}
export interface Event extends APIGatewayProxyEventBase<RequestContext> {
  authorization: any;
  Authorization: Array<any>;
  requestContext: RequestContext;
}
