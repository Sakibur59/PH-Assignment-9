"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
  Card,
} from "@heroui/react";

import React from "react";
import toast from "react-hot-toast";

const AddCarPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const carData = Object.fromEntries(formData.entries());
    console.log("Form Data:", carData);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      });
      const data = await res.json();
      toast.success("Car added successfully! 🚗🎉");
    } catch (error) {
      toast.error("Error adding car. Please try again.");
    }
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Rental Car</h1>
      <Card>
        <form onSubmit={handleSubmit} className="p-10 space-y-8 w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Car Name */}
            <TextField name="carName" isRequired>
              <Label>Car Model Name</Label>
              <Input placeholder="Toyota Corolla" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Brand */}
            <TextField name="brand" isRequired>
              <Label>Brand / Manufacturer</Label>
              <Input placeholder="Toyota" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Category */}
            <div>
              <Select name="category" isRequired className="w-full" placeholder="Select category">
                <Label>Category</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Sedan" textValue="Sedan">Sedan</ListBox.Item>
                    <ListBox.Item id="SUV" textValue="SUV">SUV</ListBox.Item>
                    <ListBox.Item id="Hatchback" textValue="Hatchback">Hatchback</ListBox.Item>
                    <ListBox.Item id="Crossover" textValue="Crossover">Crossover</ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">Luxury</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price Per Day */}
            <TextField name="pricePerDay" type="number" isRequired>
              <Label>Price Per Day (USD)</Label>
              <Input type="number" placeholder="45" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Transmission */}
            <div>
              <Select name="transmission" isRequired className="w-full" placeholder="Select transmission">
                <Label>Transmission</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Automatic" textValue="Automatic">Automatic</ListBox.Item>
                    <ListBox.Item id="Manual" textValue="Manual">Manual</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Fuel Type */}
            <div>
              <Select name="fuelType" isRequired className="w-full" placeholder="Select fuel type">
                <Label>Fuel Type</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Petrol" textValue="Petrol">Petrol</ListBox.Item>
                    <ListBox.Item id="Diesel" textValue="Diesel">Diesel</ListBox.Item>
                    <ListBox.Item id="Electric" textValue="Electric">Electric</ListBox.Item>
                    <ListBox.Item id="Hybrid" textValue="Hybrid">Hybrid</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Seating Capacity */}
            <TextField name="seatingCapacity" type="number" isRequired>
              <Label>Seating Capacity</Label>
              <Input type="number" placeholder="5" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Location */}
            <TextField name="location" isRequired>
              <Label>Location / City</Label>
              <Input placeholder="Dhaka" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Availability */}
            <div className="md:col-span-2">
              <Select name="availability" isRequired className="w-full" placeholder="Select availability status">
                <Label>Availability Status</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Available" textValue="Available">Available</ListBox.Item>
                    <ListBox.Item id="Rented" textValue="Rented">Rented</ListBox.Item>
                    <ListBox.Item id="Maintenance" textValue="Maintenance">Maintenance</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Car Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Comfortable and fuel-efficient sedan perfect for city rides..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="outline"
            className="rounded-none w-full bg-cyan-500 text-white font-medium py-3 h-auto"
          >
            Add Vehicle to Fleet
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddCarPage;