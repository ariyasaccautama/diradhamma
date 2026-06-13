"use client";

import { supabase } from "../../lib/supabase";

export default function TestInsert() {

  const submit = async () => {

    const { data, error } =
      await supabase
        .from("rsvp")
        .upsert({
          guest_id: "TEST01",
          attendance: "hadir",
          message: "Sampai jumpa",
        });

    console.log(data);
    console.log(error);
  };

  return (
    <button onClick={submit}>
      TEST RSVP
    </button>
  );
}