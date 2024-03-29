"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCommonErrCode = exports.PrismaCommonErrStatus = exports.PrismaCommonErrMsg = exports.findPrismaErrorMessageAndStatus = void 0;
/**
 *
 * Put Prisma.PrismaClientKnowRequestError as a parameter.
 * Locate the error code indicated by Prisma.PrismaClientKnowRequestError and return the appropriate error message and http status.
 */
function findPrismaErrorMessageAndStatus(exception) {
    let message;
    let status;
    switch (exception.code) {
        case PrismaCommonErrCode.P2000:
            message = exports.PrismaCommonErrMsg.P2000;
            status = exports.PrismaCommonErrStatus.P2000;
            break;
        case PrismaCommonErrCode.P2001:
            message = exports.PrismaCommonErrMsg.P2001;
            status = exports.PrismaCommonErrStatus.P2001;
            break;
        case PrismaCommonErrCode.P2002:
            message = exports.PrismaCommonErrMsg.P2002;
            status = exports.PrismaCommonErrStatus.P2002;
            break;
        case PrismaCommonErrCode.P2003:
            message = exports.PrismaCommonErrMsg.P2003;
            status = exports.PrismaCommonErrStatus.P2003;
            break;
        case PrismaCommonErrCode.P2004:
            message = exports.PrismaCommonErrMsg.P2004;
            status = exports.PrismaCommonErrStatus.P2004;
            break;
        case PrismaCommonErrCode.P2005:
            message = exports.PrismaCommonErrMsg.P2005;
            status = exports.PrismaCommonErrStatus.P2005;
            break;
        case PrismaCommonErrCode.P2006:
            message = exports.PrismaCommonErrMsg.P2006;
            status = exports.PrismaCommonErrStatus.P2006;
            break;
        case PrismaCommonErrCode.P2007:
            message = exports.PrismaCommonErrMsg.P2007;
            status = exports.PrismaCommonErrStatus.P2007;
            break;
        case PrismaCommonErrCode.P2008:
            message = exports.PrismaCommonErrMsg.P2008;
            status = exports.PrismaCommonErrStatus.P2008;
            break;
        case PrismaCommonErrCode.P2009:
            message = exports.PrismaCommonErrMsg.P2009;
            status = exports.PrismaCommonErrStatus.P2009;
            break;
        case PrismaCommonErrCode.P2010:
            message = exports.PrismaCommonErrMsg.P2010;
            status = exports.PrismaCommonErrStatus.P2010;
            break;
        case PrismaCommonErrCode.P2011:
            message = exports.PrismaCommonErrMsg.P2011;
            status = exports.PrismaCommonErrStatus.P2011;
            break;
        case PrismaCommonErrCode.P2012:
            message = exports.PrismaCommonErrMsg.P2012;
            status = exports.PrismaCommonErrStatus.P2012;
            break;
        case PrismaCommonErrCode.P2013:
            message = exports.PrismaCommonErrMsg.P2013;
            status = exports.PrismaCommonErrStatus.P2013;
            break;
        case PrismaCommonErrCode.P2014:
            message = exports.PrismaCommonErrMsg.P2014;
            status = exports.PrismaCommonErrStatus.P2014;
            break;
        case PrismaCommonErrCode.P2015:
            message = exports.PrismaCommonErrMsg.P2015;
            status = exports.PrismaCommonErrStatus.P2015;
            break;
        case PrismaCommonErrCode.P2016:
            message = exports.PrismaCommonErrMsg.P2016;
            status = exports.PrismaCommonErrStatus.P2016;
            break;
        case PrismaCommonErrCode.P2017:
            message = exports.PrismaCommonErrMsg.P2017;
            status = exports.PrismaCommonErrStatus.P2017;
            break;
        case PrismaCommonErrCode.P2018:
            message = exports.PrismaCommonErrMsg.P2018;
            status = exports.PrismaCommonErrStatus.P2018;
            break;
        case PrismaCommonErrCode.P2019:
            message = exports.PrismaCommonErrMsg.P2019;
            status = exports.PrismaCommonErrStatus.P2019;
            break;
        case PrismaCommonErrCode.P2020:
            message = exports.PrismaCommonErrMsg.P2020;
            status = exports.PrismaCommonErrStatus.P2020;
            break;
        case PrismaCommonErrCode.P2021:
            message = exports.PrismaCommonErrMsg.P2021;
            status = exports.PrismaCommonErrStatus.P2021;
            break;
        case PrismaCommonErrCode.P2022:
            message = exports.PrismaCommonErrMsg.P2022;
            status = exports.PrismaCommonErrStatus.P2022;
            break;
        case PrismaCommonErrCode.P2023:
            message = exports.PrismaCommonErrMsg.P2023;
            status = exports.PrismaCommonErrStatus.P2023;
            break;
        case PrismaCommonErrCode.P2024:
            message = exports.PrismaCommonErrMsg.P2024;
            status = exports.PrismaCommonErrStatus.P2024;
            break;
        case PrismaCommonErrCode.P2025:
            message = exports.PrismaCommonErrMsg.P2025;
            status = exports.PrismaCommonErrStatus.P2025;
            break;
        case PrismaCommonErrCode.P2026:
            message = exports.PrismaCommonErrMsg.P2026;
            status = exports.PrismaCommonErrStatus.P2026;
            break;
        case PrismaCommonErrCode.P2027:
            message = exports.PrismaCommonErrMsg.P2027;
            status = exports.PrismaCommonErrStatus.P2027;
            break;
        default:
            message = exception.message.replace(/\n/g, "");
            status = 400;
            break;
    }
    return { message, status };
}
exports.findPrismaErrorMessageAndStatus = findPrismaErrorMessageAndStatus;
exports.PrismaCommonErrMsg = {
    P2000: "The provided value for the column is too long for the column's type",
    P2001: "The record searched for in the where condition does not exist",
    P2002: "Unique constraint failed: A record with the same key already exists",
    P2003: "Foreign key constraint failed: The associated record does not exist",
    P2004: "A constraint failed on the database: Integrity constraint violation",
    P2005: "The value stored in the database for the field is invalid for the field's type",
    P2006: "The provided value for the field is not valid",
    P2007: "Data validation error: Provided data does not meet validation requirements",
    P2008: "Failed to parse the query: Query syntax error",
    P2009: "Failed to validate the query: Query validation error",
    P2010: "Raw query failed: Unable to execute raw database query",
    P2011: "Null constraint violation: Required field cannot be null",
    P2012: "Missing a required value: Required field is missing",
    P2013: "Missing a required argument: Required argument is missing",
    P2014: "The change you are trying to make would violate the required relation",
    P2015: "A related record could not be found",
    P2016: "Query interpretation error: Unable to interpret query",
    P2017: "The records for relation between the parent and child models are not connected",
    P2018: "The required connected records were not found",
    P2019: "Input error: Invalid input provided",
    P2020: "Value out of range for the type: Provided value exceeds allowable range",
    P2021: "The table does not exist in the current database",
    P2022: "The column does not exist in the current database",
    P2023: "Inconsistent column data: Data in the column is inconsistent",
    P2024: "Timed out fetching a new connection from the pool: Database connection timeout",
    P2025: "An operation failed because it depends on one or more records that were required but not found",
    P2026: "The current database provider doesn't support a feature that the query used",
    P2027: "Multiple errors occurred on the database during query execution",
};
exports.PrismaCommonErrStatus = {
    P2000: 400,
    P2001: 404,
    P2002: 409,
    P2003: 409,
    P2004: 400,
    P2005: 400,
    P2006: 400,
    P2007: 400,
    P2008: 400,
    P2009: 400,
    P2010: 500,
    P2011: 400,
    P2012: 400,
    P2013: 400,
    P2014: 400,
    P2015: 404,
    P2016: 400,
    P2017: 400,
    P2018: 404,
    P2019: 400,
    P2020: 400,
    P2021: 404,
    P2022: 404,
    P2023: 400,
    P2024: 500,
    P2025: 404,
    P2026: 400,
    P2027: 500,
};
/**
 *
 * Error code enumeration of Prisma.PrismaClientKnowRequestError.
 * Use to customize exception handling in Prisma.PrismaClientKnowRequestError.
 */
var PrismaCommonErrCode;
(function (PrismaCommonErrCode) {
    PrismaCommonErrCode["P2000"] = "P2000";
    PrismaCommonErrCode["P2001"] = "P2001";
    PrismaCommonErrCode["P2002"] = "P2002";
    PrismaCommonErrCode["P2003"] = "P2003";
    PrismaCommonErrCode["P2004"] = "P2004";
    PrismaCommonErrCode["P2005"] = "P2005";
    PrismaCommonErrCode["P2006"] = "P2006";
    PrismaCommonErrCode["P2007"] = "P2007";
    PrismaCommonErrCode["P2008"] = "P2008";
    PrismaCommonErrCode["P2009"] = "P2009";
    PrismaCommonErrCode["P2010"] = "P2010";
    PrismaCommonErrCode["P2011"] = "P2011";
    PrismaCommonErrCode["P2012"] = "P2012";
    PrismaCommonErrCode["P2013"] = "P2013";
    PrismaCommonErrCode["P2014"] = "P2014";
    PrismaCommonErrCode["P2015"] = "P2015";
    PrismaCommonErrCode["P2016"] = "P2016";
    PrismaCommonErrCode["P2017"] = "P2017";
    PrismaCommonErrCode["P2018"] = "P2018";
    PrismaCommonErrCode["P2019"] = "P2019";
    PrismaCommonErrCode["P2020"] = "P2020";
    PrismaCommonErrCode["P2021"] = "P2021";
    PrismaCommonErrCode["P2022"] = "P2022";
    PrismaCommonErrCode["P2023"] = "P2023";
    PrismaCommonErrCode["P2024"] = "P2024";
    PrismaCommonErrCode["P2025"] = "P2025";
    PrismaCommonErrCode["P2026"] = "P2026";
    PrismaCommonErrCode["P2027"] = "P2027";
})(PrismaCommonErrCode || (exports.PrismaCommonErrCode = PrismaCommonErrCode = {}));
//# sourceMappingURL=index.js.map