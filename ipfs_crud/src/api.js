import s3 from './filebaseClient';

const BUCKET = 'posts-bucket';

// CREATE
export async function createPost(post) {
    const params = {
        Bucket: BUCKET,
        Key: `${Date.now()}.json`,
        Body: JSON.stringify(post, ),
        ContentType: 'application/json'
    };
    await s3.putObject(params).promise();
}

// READ
export async function getPosts() {
    const { Contents } = await s3.listObjectsV2({ Bucket: BUCKET }).promise();

    const posts = await Promise.all(
        Contents.map(async (file) => {
            const obj = await s3.getObject({ Bucket: BUCKET, Key: file.Key }).promise();
            return JSON.parse(obj.Body.toString());
        })
    );

    return posts;
}

// UPDATE = перезапись того же ключа
export async function updatePost(key, updatedPost) {
    const params = {
        Bucket: BUCKET,
        Key: key,
        Body: JSON.stringify(updatedPost),
        ContentType: 'application/json'
    };
    await s3.putObject(params).promise();
}

// DELETE
export async function deletePost(key) {
    await s3.deleteObject({ Bucket: BUCKET, Key: key }).promise();
}