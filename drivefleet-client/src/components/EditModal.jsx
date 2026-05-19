"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";

export function EditModal({ car }) {
    const route = useRouter();
  const {
    _id,
    imageUrl,
    pricePerDay,
    description,
    category,
    availability,
    location,
  } = car;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const carData = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(carData),
      },
    );

    const data = await res.json();
    toast.success("Car updated successfully!");
    route.refresh();
    console.log(data);
  };
  return (
    <Modal>
      <Button variant="primary" className={"rounded-none"}>
        <BiEdit /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Car</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-4 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   
                    <div className="md:col-span-2"></div>

                    
                    <TextField defaultValue={location} name="location">
                      <Label>Location</Label>
                      <Input placeholder="Meherpur" className="rounded-2xl" />
                      <FieldError />
                    </TextField>


                    <div>
                      <Select
                        defaultValue={category}
                        name="category"
                        className="w-full"
                        placeholder="Select category"
                      >
                        <Label>Category</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Sudan" textValue="Sudan">
                              Sudan
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="SUV" textValue="SUV">
                              SUV
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Hatchback" textValue="Hatchback">
                              Hatchback
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Crossover" textValue="Crossover">
                              Crossover
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">
                              Luxury
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      defaultValue={pricePerDay}
                      name="pricePerDay"
                      type="number"
                    >
                      <Label>Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>


                   
                    <div className="md:col-span-2">
                      <Select
                        defaultValue={availability}
                        name="availability"
                        className="w-full"
                        placeholder="Select availability"
                      >
                        <Label>Availability</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Available" textValue="Available">
                              Available
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Rented" textValue="Rented">
                              Rented
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item
                              id="Maintenance"
                              textValue="Maintenance"
                            >
                              Maintenance
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={imageUrl} name="imageUrl">
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="rounded-3xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Buttons */}

                  <Modal.Footer>
                    <Button type="submit" slot="close">
                      Save
                    </Button>
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
