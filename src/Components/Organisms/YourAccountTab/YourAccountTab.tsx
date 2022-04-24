import { Box, Stack } from "@mui/material";

import BasicSelect from "./BasicSelect";
import FrameStyle from "./FrameStyle";
import Header from "./Header";
import SettingsFrame from "./SettingsFrame";
import YourAccountFrame from "./YourAccountFrame";

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
