const { ipcRenderer } = require('electron'); 

// upload button , click to uplaod an image 
document.getElementById('uploadbutton').addEventListener('click', () => {
    ipcRenderer.send('open-file-dialog');
});

// double check that the file uploaded is apart of accepted file types (in this case pictures)
function isFileImage(file) {
    const acceptedFileTypes = ['image/gif', 'image/jpg', 'image/png', 'image/heic']
    return file && acceptedFileTypes.includes(file['type']);
}