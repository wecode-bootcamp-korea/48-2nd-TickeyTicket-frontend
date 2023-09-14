export async function uploadImage(files) {
  const uploadedUrls = [];
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);

    try {
      const response = await fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      uploadedUrls.push(result.url);
    } catch (error) {
      console.error('Error uploading file:', error);
      return [];
    }
  }

  return uploadedUrls;

  // return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
  //   method: 'POST',
  //   body: data,
  // })
  //   .then(res => res.json())
  //   .then(data => data.url);
}
