import {Text, TouchableOpacity} from 'react-native';
import auth from '../../utils/auth.ts';
import {useDispatch} from 'react-redux';
import {logOut} from '../../store/slices/authSlice.ts';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Text>ProfileScreen</Text>
      <TouchableOpacity
        onPress={async () => {
          await auth.logOut();
          dispatch(logOut());
        }}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </>
  );
};

export default ProfileScreen;
