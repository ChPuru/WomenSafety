import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmergencyContactList } from "./emergencyContact/EmergencyContactList";
import { EmergencyContactCreate } from "./emergencyContact/EmergencyContactCreate";
import { EmergencyContactEdit } from "./emergencyContact/EmergencyContactEdit";
import { EmergencyContactShow } from "./emergencyContact/EmergencyContactShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { VoiceCommandList } from "./voiceCommand/VoiceCommandList";
import { VoiceCommandCreate } from "./voiceCommand/VoiceCommandCreate";
import { VoiceCommandEdit } from "./voiceCommand/VoiceCommandEdit";
import { VoiceCommandShow } from "./voiceCommand/VoiceCommandShow";
import { EmotionRecognitionList } from "./emotionRecognition/EmotionRecognitionList";
import { EmotionRecognitionCreate } from "./emotionRecognition/EmotionRecognitionCreate";
import { EmotionRecognitionEdit } from "./emotionRecognition/EmotionRecognitionEdit";
import { EmotionRecognitionShow } from "./emotionRecognition/EmotionRecognitionShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Personal Safety Backend"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EmergencyContact"
          list={EmergencyContactList}
          edit={EmergencyContactEdit}
          create={EmergencyContactCreate}
          show={EmergencyContactShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
        <Resource
          name="VoiceCommand"
          list={VoiceCommandList}
          edit={VoiceCommandEdit}
          create={VoiceCommandCreate}
          show={VoiceCommandShow}
        />
        <Resource
          name="EmotionRecognition"
          list={EmotionRecognitionList}
          edit={EmotionRecognitionEdit}
          create={EmotionRecognitionCreate}
          show={EmotionRecognitionShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
