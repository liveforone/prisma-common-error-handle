"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCommonErrCode = exports.PrismaCommonErrStatus = exports.PrismaCommonErrMsg = exports.findPrismaErrorInfo = void 0;
/**
 *
 * Put PrismaClientKnowRequestError as a parameter.
 * Locate the error code indicated by PrismaClientKnowRequestError and return the appropriate error message and http status.
 */
function findPrismaErrorInfo(exception) {
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
            message = "Invalid parameters were delivered.";
            status = 500;
            break;
    }
    return { message, status };
}
exports.findPrismaErrorInfo = findPrismaErrorInfo;
exports.PrismaCommonErrMsg = {
    P2000: "[P2000] The value provided for this column exceeds the maximum length allowed by the column's data type. Please ensure that the length of the value does not exceed the specified limit for this column type to prevent this error.",
    P2001: "[P2001] The record specified in the WHERE condition does not exist in the database. This could be due to a mismatch between the search criteria and the actual data stored in the database. Double-check the search parameters to ensure they accurately reflect the data you are trying to retrieve.",
    P2002: "[P2002] The unique constraint for this operation has failed because a record with the same key already exists in the database. This means that the operation you are trying to perform violates a uniqueness constraint defined on one or more columns. Please review the data being inserted or updated to ensure that it does not duplicate existing keys.",
    P2003: "[P2003] The foreign key constraint has failed because the associated record does not exist in the referenced table. This indicates that the value being inserted or updated in the column with the foreign key constraint does not have a corresponding entry in the related table. Check the integrity of your data and ensure that all foreign key references are valid.",
    P2004: "[P2004] A constraint violation occurred in the database, resulting in an integrity constraint failure. This typically means that one or more constraints defined on the database schema have been violated during an operation, such as an insert, update, or delete. These constraints could include uniqueness constraints, foreign key constraints, or other rules defined to maintain data integrity.",
    P2005: "[P2005] The value stored in the database for this field is not valid according to the field's data type. This suggests that the data stored does not adhere to the expected format or constraints defined for this field. Verify the data being stored and ensure it conforms to the specified data type and any associated constraints to prevent this error.",
    P2006: "[P2006] The value provided for this field is not considered valid. This could be due to various reasons such as format mismatch, out-of-range values, or violating specific constraints defined for the field. Ensure that the value provided meets all requirements specified for this field to resolve this issue.",
    P2007: "[P2007] A data validation error has occurred because the provided data does not meet the validation requirements. Review the validation rules for the data in question and ensure that it conforms to these requirements to resolve the error.",
    P2008: "[P2008] The query failed to parse due to a syntax error. This indicates that the structure or format of the query is incorrect, preventing it from being properly interpreted by the database engine. Check the syntax of the query and ensure that it adheres to the correct syntax rules for the database system you are using. Fixing any syntax errors should resolve this issue.",
    P2009: "[P2009] The query failed to validate due to a query validation error. Review the query and ensure that it follows the rules and syntax requirements specified by the database system. Fixing any issues with the query structure or content should resolve this error.",
    P2010: "[P2010] The raw database query failed to execute. This could be due to various reasons such as incorrect SQL syntax, insufficient permissions, or database connection issues. Double-check the syntax of the raw query and ensure that the database connection is properly established with the necessary permissions to execute the query. Resolving any issues with the query or the database connection should help in resolving this error.",
    P2011: "[P2011] A null constraint violation occurred because a required field was found to be null. This means that a column in the database table, which is marked as mandatory and cannot have null values, was attempted to be inserted or updated with a null value. Make sure that all required fields are populated with valid data before attempting to perform the operation to avoid this error.",
    P2012: "[P2012] The error indicates that a required value is missing, specifically, a field that is mandatory for the operation is not provided. This typically occurs when attempting to insert or update a record without supplying a value for a field that cannot be null. Check the operation and ensure that all required fields are provided with valid values before proceeding.",
    P2013: "[P2013] The error suggests that a required argument is missing. This commonly happens in function or method calls where certain parameters are mandatory for the operation but were not provided. Double-check the function or method call and ensure that all required arguments are supplied in order to execute the operation successfully.",
    P2014: "[P2014] The change you're attempting to make would violate a required relationship. This typically happens when there's a dependency between entities, and the operation you're performing would break that dependency. Review the relationships between the entities involved, and ensure that any required connections or dependencies are maintained to avoid this error.",
    P2015: "[P2015] The error indicates that a related record could not be found. This typically occurs when attempting to access or manipulate a record that has a relationship with another record, but the related record does not exist. Check the integrity of the data and ensure that the related record is available before performing the operation.",
    P2016: "[P2016] The error suggests that the query could not be interpreted. This can happen due to various reasons such as syntax errors, unsupported query structures, or inconsistencies in the query format. Double-check the syntax and structure of the query to ensure it conforms to the expected format and requirements of the database system.",
    P2017: "[P2017] It seems that the records for the relationship between the parent and child models are not connected. This typically occurs when there is a relational database model, such as a parent-child relationship, and the expected connections between records are missing. Check the data integrity and ensure that the necessary connections between parent and child records are established to maintain the relationship correctly.",
    P2018: "[P2018] It appears that the required connected records were not found. This usually happens when there's an expectation for related records to exist, such as in a one-to-one or one-to-many relationship, but those related records are missing. Review the data and relationships involved, ensuring that all required connections between records are present to fulfill the relationship requirements.",
    P2019: "[P2019] The error indicates that an invalid input was provided. This suggests that the data or input provided does not meet the expected format, requirements, or validation criteria. Double-check the input data and ensure that it conforms to the expected format and requirements to resolve this error.",
    P2020: "[P2020] The error indicates that the provided value exceeds the allowable range for the data type. This typically happens when trying to insert or update a value that falls outside the acceptable range for the specified data type, such as trying to insert a number that is too large for an integer field. Ensure that the value being inserted or updated falls within the allowable range for the data type to resolve this error.",
    P2021: "[P2021] The error suggests that the table referenced in the query or operation does not exist within the database being accessed. This can occur due to various reasons, such as misspelling the table name, referencing a table in the wrong schema, or the table not being created yet. Double-check the table name and verify that it exists in the database schema you are accessing. If necessary, create the table before attempting to perform operations on it.",
    P2022: "[P2022] The error indicates that the column referenced in the query or operation does not exist within the database being accessed. This can occur due to various reasons, such as misspelling the column name, referencing a column in the wrong table, or the column not being created yet. Double-check the column name and verify that it exists in the table within the database schema you are accessing.",
    P2023: "[P2023] The error indicates that there are inconsistencies present within the data of a specific column. This could mean that the data within the column does not adhere to the expected format, contains unexpected values, or varies in structure across different rows. To resolve this issue, thoroughly inspect the data in the column to identify and address any inconsistencies. This might involve data cleansing, standardization, or correction of erroneous entries to ensure data integrity and consistency.",
    P2024: "[P2024] The error suggests that there was a timeout while attempting to retrieve a new database connection from the connection pool. This can occur due to various reasons such as network issues, database server overload, or misconfiguration of connection pool settings. To resolve this issue, you may need to check your network connectivity, database server status, and adjust connection pool settings to ensure that sufficient resources are available and timeouts are appropriately configured to prevent future occurrences of this error.",
    P2025: "[P2025] The error indicates that an operation failed because it depends on one or more records that were required but not found. This typically occurs when there's a dependency between operations, such as when trying to perform an action that relies on the existence of specific records. Review the dependencies and ensure that all required records are present before attempting the operation to avoid this error.",
    P2026: "[P2026] The error suggests that the query includes a feature or functionality that is not supported by the current database provider. This can happen when using certain SQL syntax, functions, or operators that are not compatible with the database system being used. To resolve this issue, you may need to modify the query to use supported features or consider switching to a different database provider that supports the required functionality.",
    P2027: "[P2027] The error indicates that there were multiple issues encountered while executing the query on the database. These errors could range from syntax errors in the query to data integrity issues or database connectivity problems. To address this, carefully review each error message provided and take appropriate actions to resolve them individually.",
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