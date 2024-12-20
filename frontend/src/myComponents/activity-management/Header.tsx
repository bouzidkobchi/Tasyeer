import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { colors } from "@/utils/colors";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Activity } from "./activities-list/columns";

export default function Header({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<Activity[]>>;
}) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    duration: "",
    place: "",
    startTime: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const addActivity = async () => {
    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_API_URL;
      const token = import.meta.env.VITE_API_TOKEN;

      const res = await fetch(`${API_URL}/api/activities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          data: {
            name: form.name,
            type: form.type,
            duration: Number(form.duration),
            place: form.place,
            startTime: form.startTime,
          },
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create activity");
      }

      const newActivity = await res.json();
      setData((prev) => [...prev, newActivity.data]);
      setForm({ name: "", type: "", duration: "", place: "", startTime: "" });
    } catch (error) {
      console.error("Error creating activity:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-end mb-6">
      <Button
        className={`text-green font-medium dbg-[${colors.main}] text-white py-0 flex rounded-lg px-3`}
      >
        <Dialog>
          <DialogTrigger>Add</DialogTrigger>
          <DialogContent className="min-w-fit">
            <DialogHeader>
              <DialogTitle className={`text-[${colors.main}] mb-14 text-3xl`}>
                Add New Activity
              </DialogTitle>
              <div
                style={{ marginBottom: "60px" }}
                className="flex gap-10 justify-between items-start mb-10"
              >
                <div className="w-full">
                  <div className="flex flex-col gap-2 justify-between mb-4">
                    <label htmlFor="name" className="min-w-fit font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={handleInputChange}
                      className="h-fit w-full"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-2 justify-between mb-4 min-w-[300px]">
                      <label htmlFor="type" className="min-w-fit font-medium">
                        Type
                      </label>
                      <Input
                        id="type"
                        type="text"
                        value={form.type}
                        onChange={handleInputChange}
                        className="h-fit w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 justify-between mb-4 min-w-[300px]">
                      <label
                        htmlFor="duration"
                        className="min-w-fit font-medium"
                      >
                        Duration (in days)
                      </label>
                      <Input
                        id="duration"
                        type="text"
                        value={form.duration}
                        onChange={handleInputChange}
                        className="h-fit w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-between mb-4">
                    <label htmlFor="place" className="min-w-fit font-medium">
                      Place
                    </label>
                    <Input
                      id="place"
                      type="text"
                      value={form.place}
                      onChange={handleInputChange}
                      className="h-fit w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-between mb-4">
                    <label htmlFor="startTime" className="min-w-fit font-medium">
                      Start Time
                    </label>
                    <Input
                      id="startTime"
                      type="datetime-local"
                      value={form.startTime}
                      onChange={handleInputChange}
                      className="h-fit w-full"
                    />
                  </div>
                </div>
              </div>
              <Button
                className="mt-10 block"
                onClick={addActivity}
                disabled={loading}
              >
                {loading ? "Creating..." : "Create"}
              </Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Button>
    </div>
  );
}
