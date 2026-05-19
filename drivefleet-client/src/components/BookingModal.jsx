"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function BookingModal({ car }) {
  const route = useRouter();
  const { _id, carName, imageUrl, location, pricePerDay } = car;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bookingData = Object.fromEntries(formData.entries());
    const { data: sessionData } = await authClient.getSession();

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify({
        ...bookingData,
        carId: _id,
        carName,
        imageUrl,
        location,
        pricePerDay,
        userEmail: sessionData?.user?.email,
        bookingDate: new Date(),
      }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Booking successful! 🎉");
      route.refresh();
    } else {
      toast.error(data?.message || "Booking failed. Try again."); 
    }
  };

  return (
    <Modal>
      <Button variant="primary" className="rounded-md w-full mt-5 text-white">
        Book Now
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Book — {carName}</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-6 space-y-6">
                  <div>
                    <Select name="driverNeeded" isRequired className="w-full" placeholder="Select an option">
                      <Label>Driver Needed</Label>
                      <Select.Trigger className="rounded-2xl">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="yes" textValue="Yes">Yes<ListBox.ItemIndicator /></ListBox.Item>
                          <ListBox.Item id="no" textValue="No">No<ListBox.ItemIndicator /></ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  <div>
                    <TextField name="specialNote">
                      <Label>Special Note</Label>
                      <TextArea placeholder="Any special requests or instructions..." className="rounded-2xl" />
                      <FieldError />
                    </TextField>
                  </div>

                  <Modal.Footer>
                    <Button type="submit" slot="close" >Book Now</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}