import dynamodb from "../util/dynamodb";
import handler from "../util/handler";

export const main = handler(async (event) => {
    console.warn("Event main function", event);
    const params = {
        TableName: process.env.TABLE_NAME,
        // 'Key' defines the partition key and sort key of the item to be retrieved
        Key: {
            userId: "123", // The id of the author
            noteId: event.pathParameters.id, // The id of the note from the path
        }
    };

    const result = await dynamodb.get(params);
    console.log("Result: ", result);
    if (!result.Item) {
        throw new Error("Item not found!");
    }

    return result;
});