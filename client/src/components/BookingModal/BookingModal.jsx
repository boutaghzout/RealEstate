import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailContext.js";
import { bookVisit } from "../../utils/api.js";
import { toast } from "react-toastify";

const BookingModal = ({ opened, setOpened, email, PropertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("you have booked your visit", {
      position: "bottom-right",
    });
  };
  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, PropertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="select your date of visit"
      centered
    >
      <div className="flexCenter">
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book Visit
        </Button>
      </div>
    </Modal>
  );
};
export default BookingModal;
