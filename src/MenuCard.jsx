import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

import { Input } from "./components/ui/input";

import { Button } from "./components/ui/button";

import { Label } from "@radix-ui/react-label";

import { supabase } from "./createClient";

import { useState, useEffect } from "react";

function MenuCard() {
  const [task, setTasks] = useState([]);
  const [taskName, setTaskName] = useState([]);
  const [taskValue, setTaskValue] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await supabase.from("commissions").select("*");
    setTasks(data);
    console.log(task);
  }

  async function uploadData() {
    const { error } = await supabase
      .from("commissions")
      .insert({ type: taskName, amount: taskValue });
    alert("Success!");

    if (error) {
      alert("No data inserted!");
    }
  }

  return (
    <Card className="w-[40em]">
      <CardHeader>
        <CardTitle>LaziServices Database!</CardTitle>
        <CardDescription>Input data to insert to database!</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2" onSubmit={uploadData}>
          <Label>Task Type</Label>
          <Input
            type="text"
            placeholder="Enter Task Type Here..."
            onChange={(event) => setTaskName(event.target.value)}
          />
          <Label>Task Value</Label>
          <Input
            type="number"
            placeholder="Enter Task Value Here..."
            onChange={(event) => setTaskValue(event.target.value)}
          />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">Check Earnings</Button>
      </CardFooter>
    </Card>
  );
}

export default MenuCard;
