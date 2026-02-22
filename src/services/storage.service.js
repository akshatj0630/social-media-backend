import ImageKit from 'imagekit';

export const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

export const uploadToImageKit = async (fileBuffer, fileName) => {
    return new Promise((resolve, reject) => {
        imageKit.upload({
            file: fileBuffer,
            fileName: fileName,
            folder: '/social-media-uploads'
        }, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};
