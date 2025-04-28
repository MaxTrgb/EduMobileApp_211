import { Text, Alert, TouchableOpacity } from "react-native";
import { launchCamera, CameraOptions, Asset } from "react-native-image-picker";

const ImagePickerDemo = () => {
    const handleTakePhoto = async () => {
        const options: CameraOptions = {
            mediaType: "photo",
            saveToPhotos: true,
            quality: 1,
        };
        await launchCamera(options, (response) => {
            if (response.didCancel) {
                Alert.alert('Cancelled');
            } else if (response.errorCode) {
                Alert.alert('Error', response.errorMessage || 'Unknown error');
            } else if (response.assets && response.assets.length > 0) {
                const photo = response.assets[0];
                Alert.alert('Photo taken!', `URI: ${photo.uri}`);
            }
        });
    };

    return (
        <>
            <TouchableOpacity onPress={handleTakePhoto}>
                <Text>Take photo.</Text>
            </TouchableOpacity>
        </>
    );
};

export default ImagePickerDemo;
