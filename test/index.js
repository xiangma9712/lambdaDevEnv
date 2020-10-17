const AWS = require('aws-sdk');
AWS.config.update({
    endpoint: 'http://localhost:8000',
    region: 'ap-northeast-1',
    accessKeyId: 'fakeMyKeyId',
    secretAccessKey: 'fakeSecretAccessKey'
});

const main = async () => {
    const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
    const params = {
        AttributeDefinitions: [
            {
                AttributeName: 'CUSTOMER_ID',
                AttributeType: 'N'
            },
            {
                AttributeName: 'CUSTOMER_NAME',
                AttributeType: 'S'
            }
        ],
        KeySchema: [
            {
                AttributeName: 'CUSTOMER_ID',
                KeyType: 'HASH'
            },
            {
                AttributeName: 'CUSTOMER_NAME',
                KeyType: 'RANGE'
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
        },
        TableName: 'CUSTOMER_LIST',
        StreamSpecification: {
            StreamEnabled: false
        }
    };

    // Call DynamoDB to create the table
    try {
        const data = await ddb.createTable(params).promise();
        console.log("Table Created", data);
    } catch (err) {
        console.log("Error", err);
    }
} 

main();