import { Routes as RoutesWrapper, Route } from "react-router-dom";
import TransferTimeReward from "./transferTimeReward/TransferTimeReward";
import ChooseGroup from "./chooseReceiver/ChooseGroup";
import FriendAndFamily from "./chooseReceiver/FriendAndFamily";
import SendReward from "./chooseReceiver/SendReward";
import Title from "../../craftkit/Title/Title";
import { useForm, FormProvider } from "react-hook-form";
import Pending from "./Pending/Pending";

function Routes(props) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Title title={"TOGETHER Time Reward System"} />
      <RoutesWrapper>
        <Route path={"/"} element={<TransferTimeReward />} />
        <Route path={"/pending"} element={<Pending />} />
        <Route path={"/choose-group"} element={<ChooseGroup />} />
        <Route path={"/choose-group/friends"} element={<FriendAndFamily />} />
        <Route path={"/choose-group/friends/:id"} element={<SendReward />} />
      </RoutesWrapper>
    </FormProvider>
  );
}

export default Routes;
