# Prisma common error handle

## install

- `npm i prisma-common-error-handle`

## Why I made this?

- When using prisma in nestjs or express or other frameworks, there are cases where exceptions that prisma throw are filtered.
- At this time, the library was created to make it easier to deal with the most frequently occurring prisma errors, such as `PrismaClientKnowRequestError`.
- The `findPrismaErrorInfo()` function provides specific error messages and httpstatus that fit each Prisma error.
- In addition, the `PrismaCommonErrCode` enumeration contains a frequently used prisma error code.
- If necessary, it can be further customized.

## examples

- Below is an example used by the exception filter in nestjs.
- You can call the function to get the message and http status and handle the exception according to each framework.
- Exception type must be `PrismaClientKnownRequestError`

```typescript
import { ArgumentsHost, Catch } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { PrismaClientKnownRequestError } from "@prisma/client";
import { Request, Response } from "express";
import { findPrismaErrorInfo } from "prisma-common-error-handle";

@Catch(PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const { message, status } = findPrismaErrorInfo(exception);

    response.status(status).json({
      message,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
```

- simple example
- Exception type must be `Prisma.PrismaClientKnownRequestError`

```typescript
const { message, status } = findPrismaErrorInfo(exception);
```
