/**
 *
 * Put Prisma.PrismaClientKnowRequestError as a parameter.
 * Locate the error code indicated by Prisma.PrismaClientKnowRequestError and return the appropriate error message and http status.
 */
export declare function findPrismaErrorMessageAndStatus(exception: any): {
    message: string;
    status: number;
};
export declare const PrismaCommonErrMsg: {
    readonly P2000: "The provided value for the column is too long for the column's type";
    readonly P2001: "The record searched for in the where condition does not exist";
    readonly P2002: "Unique constraint failed: A record with the same key already exists";
    readonly P2003: "Foreign key constraint failed: The associated record does not exist";
    readonly P2004: "A constraint failed on the database: Integrity constraint violation";
    readonly P2005: "The value stored in the database for the field is invalid for the field's type";
    readonly P2006: "The provided value for the field is not valid";
    readonly P2007: "Data validation error: Provided data does not meet validation requirements";
    readonly P2008: "Failed to parse the query: Query syntax error";
    readonly P2009: "Failed to validate the query: Query validation error";
    readonly P2010: "Raw query failed: Unable to execute raw database query";
    readonly P2011: "Null constraint violation: Required field cannot be null";
    readonly P2012: "Missing a required value: Required field is missing";
    readonly P2013: "Missing a required argument: Required argument is missing";
    readonly P2014: "The change you are trying to make would violate the required relation";
    readonly P2015: "A related record could not be found";
    readonly P2016: "Query interpretation error: Unable to interpret query";
    readonly P2017: "The records for relation between the parent and child models are not connected";
    readonly P2018: "The required connected records were not found";
    readonly P2019: "Input error: Invalid input provided";
    readonly P2020: "Value out of range for the type: Provided value exceeds allowable range";
    readonly P2021: "The table does not exist in the current database";
    readonly P2022: "The column does not exist in the current database";
    readonly P2023: "Inconsistent column data: Data in the column is inconsistent";
    readonly P2024: "Timed out fetching a new connection from the pool: Database connection timeout";
    readonly P2025: "An operation failed because it depends on one or more records that were required but not found";
    readonly P2026: "The current database provider doesn't support a feature that the query used";
    readonly P2027: "Multiple errors occurred on the database during query execution";
};
export declare const PrismaCommonErrStatus: {
    readonly P2000: 400;
    readonly P2001: 404;
    readonly P2002: 409;
    readonly P2003: 409;
    readonly P2004: 400;
    readonly P2005: 400;
    readonly P2006: 400;
    readonly P2007: 400;
    readonly P2008: 400;
    readonly P2009: 400;
    readonly P2010: 500;
    readonly P2011: 400;
    readonly P2012: 400;
    readonly P2013: 400;
    readonly P2014: 400;
    readonly P2015: 404;
    readonly P2016: 400;
    readonly P2017: 400;
    readonly P2018: 404;
    readonly P2019: 400;
    readonly P2020: 400;
    readonly P2021: 404;
    readonly P2022: 404;
    readonly P2023: 400;
    readonly P2024: 500;
    readonly P2025: 404;
    readonly P2026: 400;
    readonly P2027: 500;
};
/**
 *
 * Error code enumeration of Prisma.PrismaClientKnowRequestError.
 * Use to customize exception handling in Prisma.PrismaClientKnowRequestError.
 */
export declare enum PrismaCommonErrCode {
    P2000 = "P2000",
    P2001 = "P2001",
    P2002 = "P2002",
    P2003 = "P2003",
    P2004 = "P2004",
    P2005 = "P2005",
    P2006 = "P2006",
    P2007 = "P2007",
    P2008 = "P2008",
    P2009 = "P2009",
    P2010 = "P2010",
    P2011 = "P2011",
    P2012 = "P2012",
    P2013 = "P2013",
    P2014 = "P2014",
    P2015 = "P2015",
    P2016 = "P2016",
    P2017 = "P2017",
    P2018 = "P2018",
    P2019 = "P2019",
    P2020 = "P2020",
    P2021 = "P2021",
    P2022 = "P2022",
    P2023 = "P2023",
    P2024 = "P2024",
    P2025 = "P2025",
    P2026 = "P2026",
    P2027 = "P2027"
}
