import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(
  request: NextRequest
) {
  const { searchParams } =
    new URL(request.url);

  const guestId =
    searchParams.get("guest");

  const page =
    Number(
      searchParams.get("page") || 1
    );

  const pageSize = 5;

  // LOAD GUEST

  if (guestId) {

    const { data } =
      await supabase
        .from("guests")
        .select(`
          guest_id,
          name,
          rsvp (
            name,
            attendance,
            message
          )
        `)
        .eq(
          "guest_id",
          guestId
        )
        .single();

    return NextResponse.json(
      data
    );
  }

  // LOAD WISHES

  const from =
    (page - 1) *
    pageSize;

  const to =
    from +
    pageSize -
    1;

  const {
    data,
    count,
  } = await supabase
    .from("rsvp_wishes")
    .select(
      "*",
      { count: "exact" }
    )
    .order(
      "updated_at",
      {
        ascending: false,
      }
    )
    .range(
      from,
      to
    );

  return NextResponse.json({
    data,
    totalPages:
      Math.ceil(
        (count || 0) /
        pageSize
      ),
  });
}

export async function POST(
  request: NextRequest
) {

  const body =
    await request.json();

  const {
    guestId,
    name,
    attendance,
    message,
  } = body;

  const { data: guest } =
    await supabase
      .from("guests")
      .select("guest_id")
      .eq("guest_id", guestId)
      .single();

  if (!guest) {
    return NextResponse.json(
      {
        success: false,
        error: "Guest not found",
      },
      {
        status: 404,
      }
    );
  }

  const { error } =
    await supabase
      .from("rsvp")
      .upsert({
        guest_id:
          guestId,
        name,
        attendance,
        message,
        updated_at:
          new Date()
            .toISOString(),
      });

  if (error) {

    return NextResponse.json(
      {
        success: false,
        error:
          error.message,
      },
      {
        status: 500,
      }
    );

  }

  return NextResponse.json({
    success: true,
  });
}