import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    endpoint: 'https://s3.filebase.com', // Endpoint из Filebase
    accessKeyId: '3329F09DED5E4BFA4E1C',
    secretAccessKey: 'QKBNZC6lr15ASRW8Qyx3c0F21KPGmyPqeHm2sCk1',
    region: 'us-east-1'
});

export default s3;