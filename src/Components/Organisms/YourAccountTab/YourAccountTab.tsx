import SettingsFrame from './SettingsFrame';
import YourAccountFrame from './YourAccountFrame';

// TODO: user info will be fetched from context
// const { state } = useContext(UserDataContext);
// const { userId } = state;

const YourAccountTab = () => {
  return (
    <>
      <YourAccountFrame />
      <SettingsFrame />
    </>
  );
};

export default YourAccountTab;
